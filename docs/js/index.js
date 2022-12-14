const { getFileName, getSidebar } = require('../../.vuepress/utils');

const routes = [
  getSidebar('核心', getFileName('/js/core'), true),
  getSidebar('基础', getFileName('/js/base'), true),
  getSidebar('数组操作', getFileName('/js/array'), true),
  getSidebar('进阶', getFileName('/js/advanced'), true),
  getSidebar('实践', getFileName('/js/pratice'), true),
  getSidebar('其它', getFileName('/js/other'), true),
];

module.exports = routes;
