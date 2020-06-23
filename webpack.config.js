const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => ({
  mode: process.env.NODE_ENV,
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
