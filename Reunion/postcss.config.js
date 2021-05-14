const sortCSSmq = require('sort-css-media-queries');
module.exports = {
  plugins: [
    require("css-mqpacker")({
      sort: sortCSSmq,
    }),
    require('cssnano')({ preset: 'default' }),
  ],
};
