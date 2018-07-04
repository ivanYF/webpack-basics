const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // 入口
  entry: './src/index.js',
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash:7].js',
  },

  module: {
    // loader
    rules: [
      // babel 处理js 
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: 'babel-loader',
      },
      // less 转化为 css less-loader --> css-loader --> style-loader
      {
        test: /\.less$/,
        // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader',
          use: [
            'css-loader', 
            'less-loader',
          ],
        }), 
      },
      // 加载图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:7].[ext]'
            }
          },
        ],
      },
    ],
  },

  // 代码模块路径解析的配置
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src'),  // node_modules查找不到进行查找 src目录下

      // 优先级的配置   在某种程度上可以简化模块的查找，提升构建速度。
    ],
    // 默认文件后缀的问题
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'src/index.html', // 配置文件模板
    }),

    // 抽离css 样式 单独生成.css文件
    new ExtractTextPlugin('[name]-[hash:7].css'),

  ],
}