const baseDir = process.cwd();
var webpack = require("webpack");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require("path");
module.exports = {
  entry: {
    "index": `${baseDir}/index.js`
  },
  output: {
    path: `${baseDir}/dist`,
    filename: "[name].js"
  },
  plugins: [
   /*  new UglifyJsPlugin(
      {
        compress: {
          warnings: false,
          drop_console: false
        }
      }
    ), */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            //忽略哪些腳本是不进行编译打包的
            ignore: [],
            //缓存设置
            cacheDirectory: true
          }
        }]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: false
          }
        }
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    alias: {//需要设置哪些库的别名
      'vue$': path.resolve(baseDir, 'node_modules/vue/dist/vue.min.js')
    },
    modules: [
      baseDir + "/node_modules"
    ],
    extensions: [//开启后缀名的自动补全
      '.tsx',
      '.ts',
      '.js',
      '.jsx',
      '.vue',
      '.gif',
      '.css',
      '.scss',
      '.png',
      '.jpg',
      '.less'
    ]
  },
  externals: {
    "vue": 'Vue'
  }
}