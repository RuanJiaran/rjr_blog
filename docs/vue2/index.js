const { getFileName, getSidebar } = require('../../.vuepress/utils');

const routes = [
  getSidebar('基础', getFileName('/vue2/base')),
  getSidebar('进阶', getFileName('/vue2/advanced')),
  getSidebar('核心原理', getFileName('/vue2/core')),
  getSidebar('实战', getFileName('/vue2/pratice')),
];

module.exports = routes;
