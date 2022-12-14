const { getFileName, getSidebar } = require('../../.vuepress/utils');

const routes = [
  getSidebar('基础', getFileName('/react/base')),
  getSidebar('Hooks', getFileName('/react/hooks')),
  getSidebar('进阶', getFileName('/react/advanced')),
  getSidebar('核心原理', getFileName('/react/core')),
  getSidebar('实战', getFileName('/react/practice')),
  getSidebar('常见问题', getFileName('/react/question')),
];

module.exports = routes;
