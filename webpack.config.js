const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: './src/client.js',
  mode: 'development',
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  
  plugins: [ new UglifyJsPlugin() ],
  
  module: {
    rules: [
      { 
        test: /\.js$/, exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "node": "10"
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
}