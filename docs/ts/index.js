const { getFileName, getSidebar } = require('../../.vuepress/utils');

const routes = [getSidebar('TypeScript', getFileName('/ts'))];

module.exports = routes;
