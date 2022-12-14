const { getFileName, getSidebar } = require('../../.vuepress/utils');

const routes = [
  getSidebar('快速开始', getFileName('/nestjs/start')),
  getSidebar('数据库', getFileName('/nestjs/database')),
  getSidebar('接口设计', getFileName('/nestjs/interface')),
];

module.exports = routes;
