const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    // 打包输出文件名称
    filename: "bundle.js",
    // 打包输出地址
    path: path.resolve(__dirname, "./dist"),
    // 清除之前的打包文件
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        // 排除node_modules
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 开启css模块化
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1 * 1024,
          },
        },
        generator: {
          filename: "assets/img/[name].[hash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
};
