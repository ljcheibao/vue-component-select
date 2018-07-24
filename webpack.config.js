const baseDir = process.cwd();
const path = require("path");
module.exports = {
  entry: {
    "index": `${baseDir}/index.js`
  },
  output: {
    path: `${baseDir}/dist`,
    libraryTarget: "umd", //一般都会选择umd
    umdNamedDefine: true,
    filename: "[name].js"
  },
  module: {
    rules: [{
        test: /(\.ts|\.tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
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
    alias: { //需要设置哪些库的别名
      'vue$': path.resolve(baseDir, 'node_modules/vue/dist/vue.min.js')
    },
    modules: [
      baseDir + "/node_modules"
    ],
    extensions: [ //开启后缀名的自动补全
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
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
  /* externals: {
    "vue": 'Vue'
  } */
}