const path = require('path');
const webpack = require('webpack');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
      sources.push('webpack-dev-server/client?http://localhost:8080');
      sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}


module.exports = {
  entry: getEntrySources(['./src/index.tsx']),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  cache:true,
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias:{
      src: path.resolve('./src')
    }
  },
  module: {
    rules:[
    {
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, 'src'),
      use:[
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options:{
            data: `@import "variables";`,
            includePaths:[
              path.resolve(__dirname, "src")
            ]
          }
        }
      ]
   } 
  ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ],
  devServer: {
    port: 8080,
    contentBase: (__dirname, './dist'),
    compress: true
  }
};