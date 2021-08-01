const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    devtool: "inline-source-map",
    devServer: {
    historyApiFallback: true,
  }, 

    module: {
        rules: [
          
          {
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
            test: /\.(s*)css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'url-loader',
            },
          },

        ]
      
       
    },
      
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
  ]
}