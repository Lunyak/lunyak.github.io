const SvgStorePlugin = require('external-svg-sprite-loader');
const webpack = require('webpack');
const SitemapPlugin = require('./plugins/sitemap/index');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MediaQueryPlugin = require('media-query-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const HashPlugin = require('hash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pageSetting = require('./pageSetting');

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "./assets/styles/[name].css?v=[hash]",
    chunkFilename: "./assets/styles/[name].css?v=[hash]"
  }),
  new CopyWebpackPlugin([
    {
      from: './source/static',
      to: './',
      ignore: ['*.md']
    }
  ]),
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
  new SvgStorePlugin({
    sprite: {
      startX: 10,
      startY: 10,
      deltaX: 20,
      deltaY: 20,
      iconHeight: 20,
    },
    prefix: 'usage',
    suffix: ''
  })
];

module.exports = (env = {}, argv) => {
  const dirEntry = './source/entity/';
  let pages = [];
  if (env.page) {
    pages = glob.sync(__dirname + '/source/pages/'+env.page+'.pug');
  } else {
    pages = glob.sync(__dirname + '/source/pages/*.pug');
  }
  let chunks = [];
  pages.map(function (file) {
    let base = path.basename(file, '.pug');
    let chunk = (pageSetting[base] ? pageSetting[base] : base).split('/');
    let webpackChunk = chunk.concat(['vendor', 'common']);
    chunks = chunks.concat(webpackChunk);

    plugins.push(new HtmlWebpackPlugin({
      filename: './' + base + '.html',
      chunks: webpackChunk,
      template: './source/pages/' + base + '.pug',
      inject: false
    }));
  });

  if (env && env.develop === 'true') {
    plugins.push(new webpack.DefinePlugin({
      IS_DEV: true,
    }));
  } else {
    // plugins.push(new webpack.IgnorePlugin(/storybook/))
    plugins.push(new SitemapPlugin({}));
    plugins.push(new HashPlugin({
      path: './dist/',
      fileName: 'hash.txt'
    }));
    plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }));
    plugins.push(new webpack.DefinePlugin({
      IS_DEV: false,
    }));
    plugins.push(new MediaQueryPlugin({
      include: chunks,
      queries: {
        '(min-width: 767px)': '3-tablet',
        '(min-width: 1024px)': '3-tablet',
        '(min-width: 1280px)': '2-desctop',
        '(min-width: 1440px)': '2-desctop',
        '(min-width: 1600px)': '1-large',
      }
    }));
  }
  return {
    entry: fs.readdirSync(dirEntry).reduce((summ, item) => {
        if (env.page) {
          let chunk = (pageSetting[env.page] ? pageSetting[env.page] : env.page).split('/');
          if (['common'].concat(chunk).indexOf(item) !== -1) {
            summ[item] = `${dirEntry}${item}/${item}.js`;
          }
        } else {
          summ[item] = `${dirEntry}${item}/${item}.js`;
        }
      return summ;
    }, {}),
    output: {
      filename: './assets/scripts/[name].bundle.js?v=[hash]',
      chunkFilename: './assets/scripts/chunk/[name].chunk.js?v=[hash]',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.json$/,
          use: [
            {
              loader: path.resolve('./loaders/split-json-loader.js'),
              options: {
                dir: path.resolve('./source/data')
              }
            }
          ]
        },
        (env.develop === 'true') ? {
          test: /\.scss$/,
          use: [
            'style-loader',
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                includePaths: [
                  path.resolve(__dirname,'source/base/styles')
                ]
              }
            },
            {
              loader: path.resolve('./loaders/scss-import-base.js'),
              options: {
                baseStyles: path.resolve('source/base/styles'),
                name: '[name].[ext]',
              }
            },
          ]
        } : {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: './../../'
              }
            },
            "css-loader",
            'postcss-loader',
            MediaQueryPlugin.loader,
            "group-css-media-queries-loader",
            {
              loader: "sass-loader",
              options: {
                includePaths: [
                  path.resolve(__dirname,'source/base/styles')
                ]
              }
            },
            {
              loader: path.resolve('./loaders/scss-import-base.js'),
              options: {
                baseStyles: path.resolve('source/base/styles'),
                name: '[name].[ext]',
              }
            },
          ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            // "cache-loader",
            {
              loader: 'babel-loader',
              options: {
                "presets": ["@babel/preset-env"],
                "plugins": ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-class-properties"]
              }
            }]
        },
        {
          loader: SvgStorePlugin.loader,
          test: /\.svg$/,
          exclude: [path.resolve(__dirname, 'source/assets/images')],
          options: {
            iconName: '[name]-usage',
            name: './assets/sprite.svg',
          },
        },
        {
          test: /\.(png|jpg|webp|svg?)(\?.+)?$/,
          exclude: [path.resolve(__dirname, 'source/assets/svg')],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/images/[name].[ext]',
              }
            }
          ]
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/fonts/[name].[ext]",
              },
            }
          ],
        },
        {
          test: /\.pug$/,
          include: /source[\/,\\]pages/,
          use: [
            {
              loader: "pug-loader",
              options: {
                pretty: true,
                root: path.resolve(__dirname, './source/')
              }
            }
          ]
        },
        {
          test: /\.pug$/,
          exclude: /source[\/,\\]pages/,
          use: [
            {
              loader: "storypug/lib/webpack-loader.js",
              options: {
                pretty: true,
                root: path.resolve(__dirname, './source/')
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js"],
      alias: {
        "TweenMax": 'gsap/src/uncompressed/TweenMax',
        "TimelineMax": 'gsap/src/uncompressed/TimelineMax',
        "TweenLite": 'gsap/src/uncompressed/TweenLite',
        "TimelineLite": 'gsap/src/uncompressed/TimelineLite',
        "ScrollMagic": 'scrollmagic/scrollmagic/uncompressed/ScrollMagic',
        "animation.gsap": 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
        "debug.addIndicators": 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators',
        "@": path.resolve(__dirname,'./'),
        "@assets": path.resolve(__dirname,'./source/assets'),
        "@atoms": path.resolve(__dirname,'./source/atoms'),
        "@molecules": path.resolve(__dirname,'./source/molecules'),
        "@organisms": path.resolve(__dirname,'./source/organisms'),
        "@base": path.resolve(__dirname,'./source/base'),
      },
    },
    optimization: (env.develop === 'true') ? {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    } : {
      splitChunks: {
        cacheGroups: {
          vendor: {
            //test: /\.js$/,
            name: 'vendor',
            priority: -10,
            chunks: 'initial',
            filename: './assets/scripts/[name].bundle.js',
            reuseExistingChunk: true,
            minChunks: 4,
          }
        }
      },
      minimizer: [
        new TerserPlugin(),
      ],
    },
    devServer: {
      host: '0.0.0.0',
      watchContentBase: true,
      port: 80,
      open: true,
      disableHostCheck: true,
      noInfo: true,
      compress: true,
      hot: false,
      stats: 'minimal',
      publicPath: "/",
      setup(app) {
          app.post('*', (req, res) => {
              res.redirect(req.originalUrl);
          });
      },
    }
  };
};
