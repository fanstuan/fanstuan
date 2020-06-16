const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  target: 'node',
  entry: './packages/cli/lib/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/, // ts-loader是官方提供的处理tsx的文件
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new webpack.IgnorePlugin(/^electron$/)],
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  output: {
    filename: 'fantuan.js',
    path: path.resolve(__dirname+'/packages/cli/', 'bin')
  }
}
