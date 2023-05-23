import lodash from "lodash";

const { uniq } = lodash;
const { getFileName, getSidebar } = require("../../.vuepress/utils");

const routes = [
  getSidebar(
    "webpack5+vue3",
    uniq([
      "/docs/webpack/webpack5-vue3/init",
      ...getFileName("/webpack/webpack5-vue3"),
    ])
  ),
  getSidebar(
    "webpack4+vue2",
    uniq([
      "/docs/webpack/webpack4-vue2/init",
      ...getFileName("/webpack/webpack4-vue2"),
    ])
  ),
  getSidebar(
    "webpack5+react18",
    uniq([
      "/docs/webpack/webpack5-react18/init",
      "/docs/webpack/webpack5-react18/ts",
      "/docs/webpack/webpack5-react18/alias",
      "/docs/webpack/webpack5-react18/antd",
      "/docs/webpack/webpack5-react18/router",
      "/docs/webpack/webpack5-react18/prettier",
      "/docs/webpack/webpack5-react18/css_modules",
      ...getFileName("/webpack/webpack5-react18"),
    ])
  ),
];

module.exports = routes;
