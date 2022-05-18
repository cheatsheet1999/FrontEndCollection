const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const PurgecssPlugin = require("purgecss-webpack-plugin");

const path = require("path");
const glob = require("glob");

const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = {
  entry: {
    libCore: "./src/index.js",
  },
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // Process CSS Modules on files matching '*.module.css'
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      // Process regular global CSS styles
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PROJECT_DIR}src/**/*`, { nodir: true }),
    // }),
    // new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            PROJECT_DIR,
            "node_modules/@asu-design-system/bootstrap4-theme/dist/css/bootstrap-asu.min.css"
          ),
          to: path.resolve(
            PROJECT_DIR,
            "vendor/css/bootstrap-asu.min.module.css"
          ),
          force: true,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      Components: path.resolve(PROJECT_DIR, "src/components/"),
      Vendor: path.resolve(PROJECT_DIR, "vendor/"),
    },
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
};
