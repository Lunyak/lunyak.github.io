const glob = require('glob');
const path = require('path');

class SitemapPlugin {
  apply(compiler) {
    const pageSetting = require(__dirname + '/../../pageSetting');
    compiler.hooks.emit.tapAsync('SitemapPlugin', (compilation, callback) => {
      const pages = glob.sync(__dirname + '/../../source/pages/*.pug');
      let pageList = pages.map((file) => {
        let base = path.basename(file, '.pug');
        return `<a href="/${base}.html">${base}</a>`;
      }).join('<br>');
      pageList = `<html lang="ru"><head><meta charset="UTF-8"></head><body><h1>Карта сайта:</h1><br>${pageList}</body></html>`;
      compilation.assets['index.html'] = {
        source: function() {
          return pageList;
        },
        size: function() {
          return pageList.length;
        }
      };
      const meta = JSON.stringify(pageSetting);
      compilation.assets['meta.json'] = {
        source: function() {
          return meta;
        },
        size: function() {
          return meta.length;
        }
      };
      callback();
    });
  }
}


module.exports = SitemapPlugin;
