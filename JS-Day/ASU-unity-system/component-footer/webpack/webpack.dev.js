const path = require("path");

const common = require("./webpack.common.js");

const PROJECT_DIR = path.resolve(__dirname, "../");

// development bundle config
const config = {
  ...common,
  context: path.join(PROJECT_DIR, "src"),
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].development.js",
  },
};

module.exports = config;
