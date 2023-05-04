const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/scripts/main.js",
  },
  output: {
    path: path.resolve(__dirname),
    filename: "scripts/main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // {
      //   test: /\.png|\.jpg/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: "images/[name][ext]",
      //   },
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/main.min.css",
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://practice-browsersync.local/',
      files: [
        "**/*.js",
        "**/*.css",
        "**/*.php",
      ],
    }),
  ],
};