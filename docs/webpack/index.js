import lodash from 'lodash';

const { uniq } = lodash;
const { getFileName, getSidebar } = require('../../.vuepress/utils');

const routes = [
  getSidebar('webpack5+vue3', uniq(['/docs/webpack/webpack5-vue3/init', ...getFileName('/webpack/webpack5-vue3')])),
  getSidebar('其它', getFileName('/webpack/other')),
];

module.exports = routes;
