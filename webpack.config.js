const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => ({
  mode: process.env.NODE_ENV,
  devtool: "sourcemap",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "index.js",
  },
  resolve: {
    alias: {
      "p5.sound": path.resolve(__dirname, "vendor/p5.sound.min.js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
});
