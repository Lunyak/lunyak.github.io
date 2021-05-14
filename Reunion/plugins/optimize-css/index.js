const css = require('css');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const md5 = require('md5');

class Chaining {
  constructor(callBack) {
    this.callBack = callBack;
    this.next = false;
  }

  setNext(object) {
    this.next = object;
  }

  run(selector, hash, inResult) {
    const result = this.callBack(selector, hash, inResult);
    if (result !== false && this.next) {
      this.next.run(selector, hash, result);
    }
    return result;
  }
}

class OptimizeCss {
  constructor() {
    this.hashEntity = [];
    const pageSetting = require(__dirname + '/../../pageSetting');

    // Формируем первичную зависимость структуры сайта и связей сущностей
    let structure = Object.values(pageSetting).reduce((summ, item) => {
      const path = item.split('/').reverse();
      path.push('common');
      const start = path.shift();
      summ[start] = path;
      return summ;
    }, {});

    // Определяем пути до файлов сущностей и добавляем первичные сущности которые не определены
    const pages = glob.sync(__dirname + '/../../dist/assets/styles/*.css');
    const entity = pages.reduce((summ, page) => {
      const baseName = path.basename(page, '.css').split('-').slice(0,-1).join('-');
      if (baseName !== 'vendor') {
        if (baseName !== 'common' && structure[baseName] == undefined) {
          structure[baseName] = ['common'];
        }
        summ[baseName] = page;
      }
      return summ;
    }, {});

    structure = Object
    .entries(structure)
    .sort(([,a], [,b]) => {
      if (a.length > b.length) {
        return 1;
      } else if (a.length < b.length) {
        return -1;
      } else {
        return 0;
      }
    })
    .reduce((_sortedObj, [k,v]) => ({
      ..._sortedObj,
      [k]: v
    }), {});

    const ast = this.parseCss(entity['common']);
    if (ast.stylesheet && ast.stylesheet.rules) {
      this.hashEntity['common'] = {};
      const baseChain = new Chaining(this.saveFn.bind(undefined, this.hashEntity['common']));
      this.generateHashTableFile(baseChain, ast.stylesheet.rules);
    }
    Object.entries(structure).forEach(([entityName, linked]) => {
      const diffAst = this.parseCss(entity[entityName]);
      if (diffAst.stylesheet && diffAst.stylesheet.rules) {
          this.hashEntity[entityName] = {};
          const baseChain = new Chaining(this.saveFn.bind(undefined, this.hashEntity[entityName]));

          let start = null;
          let current = null;
          linked.forEach((i) => {
            const replaceChain = new Chaining(this.checkMd.bind(undefined, this.hashEntity[i]));
            if (current != null) {
              current.next = replaceChain;
            }
            if (start == null) {
              start = replaceChain;
            }
            current = replaceChain;
          });

          if (current != null) {
            current.next = baseChain;
          } else {
            start = baseChain;
          }

          this.generateHashTableFile(start, diffAst.stylesheet.rules);
      }
    });

    console.log(Object.entries(this.hashEntity).map(([key, value]) => {
      return key+': '+Object.keys(value).length;
    }));
  }

  // Проверка md5
  checkMd(checkData, selectors, hash) {
    if (checkData[selectors] && checkData[selectors].indexOf(hash) !== -1) {
      return false;
    }
    return true;
  }
  // Сохраняем хеши
  saveFn(summ, selectors, hash) {
    if (Array.isArray(selectors)) {
      selectors.forEach((selector) => {
        if (summ[selector] !== undefined) {
          summ[selector].push(hash);
        } else {
          summ[selector] = [hash];
        }
      });
    } else {
      if (summ[selectors] !== undefined) {
        summ[selectors].push(hash);
      } else {
        summ[selectors] = [hash];
      }
    }
  };

  // Считываем и парсим в AST css;
  parseCss(file) {
    return css.parse(fs.readFileSync(file).toString());
  }

  // Формируем сигнатуру для правила
  generateRulesSignature(rule) {
    let signature = false;
    if (rule.declarations.length > 0) {
      const props = rule.declarations.reduce((summ , item) => {
        summ[item.property] = item.value;
        return summ;
      }, {});
      signature = md5(JSON.stringify(props));
    }
    return signature;
  }

  // Генерируем эталонную таблицу селекторов и сигнатур правил
  generateHashTableFile(chain, rules, prefixSelector = false) {
    prefixSelector = !prefixSelector ? '' : `${prefixSelector}-`;
    rules.forEach((item) => {
      if (item.type === 'rule') {
        const hash = this.generateRulesSignature(item);
        const selectors = (Array.isArray(item.selectors)) ? item.selectors.map(i => prefixSelector + i) : prefixSelector+item.selectors;
        chain.run(selectors, hash);
      } else if (item.type === 'font-face') {
        const hash = this.generateRulesSignature(item);
        const selectors = prefixSelector+item.type;
        chain.run(selectors, hash);
      } else if (item.type == 'media') {
        this.generateHashTableFile(chain, item.rules, item.media);
      }
    });
  }
}

const tmp = new OptimizeCss();
