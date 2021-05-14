// Вычищаем все повторяющиеся стили в рамках настроенных сущностей

"use strict";

const sortCSSmq = require('sort-css-media-queries');
const postcss = require("postcss");
const slashCSS = require("postcss-slash-css");
const fs = require("fs");
const glob = require("fast-glob");

const PATH_ROOT = __dirname+'/../dist/assets/styles/';
const inputFilePath = PATH_ROOT+"**/*.css";
const targetFilePath = PATH_ROOT+"(vendor|common)*.css";
const outputFilePath = PATH_ROOT;

// plugin we will use in postcss
const pluginsUsed = [
  slashCSS({ targets: targetFilePath }),
  require('cssnano')({ preset: 'default' }),
  require("css-mqpacker")({
      sort: sortCSSmq,
    }),
];

const optimizeUsed = [
  require('cssnano')({ preset: 'default' }),
  require("css-mqpacker")({
    sort: sortCSSmq,
  }),
];

(async() => {
  let files = await glob(inputFilePath);
  files = files.filter(file => file.replace(PATH_ROOT,'').search(/(vendor|common)/) != 0);
  files.forEach((path) => {
    fs.readFile(path, "utf8", async(err, css) => {
      const result = await postcss(pluginsUsed).process(css, {from: undefined});
      const savePath = outputFilePath+path.replace(PATH_ROOT,'');
      fs.writeFile(savePath, result.css, () => {
          console.log(`check result in the ${savePath} file`);
      });
    });
  });

  let parentFiles = await glob(targetFilePath);
  parentFiles.forEach((path) => {
    fs.readFile(path, "utf8", async(err, css) => {
      const result = await postcss(optimizeUsed).process(css, {from: undefined});
      const savePath = outputFilePath+path.replace(PATH_ROOT,'');
      fs.writeFile(savePath, result.css, () => {
        console.log(`check result in the ${savePath} file`);
      });
    });
  });
})();
