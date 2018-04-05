const path = require('path');

//console.log(path.resolve(__dirname,'public/scripts'));
module.exports = {
  //entry:'./src/playground/hoc.js',
  entry:'./src/app.js',
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  module:{
    rules:[{
        use:{
          loader:'babel-loader',
          //loader:'eslint-loader'
        },
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname,'public'),
    port: 9000,
    historyApiFallback:true
  }
};
