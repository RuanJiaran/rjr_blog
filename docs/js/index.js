import lodash from 'lodash';

const { uniq } = lodash;
const { getFileName, getSidebar } = require('../../.vuepress/utils');

const routes = [
  getSidebar(
    '核心',
    uniq([
      '/docs/js/core/eventloop',
      '/docs/js/core/arrowfunc',
      '/docs/js/core/prototype',
      '/docs/js/core/closure',
      '/docs/js/core/scope',
      ...getFileName('/js/core'),
    ])
  ),
  getSidebar('基础', uniq(['/docs/js/base/datatype', ...getFileName('/js/base')])),
  getSidebar('数组操作', getFileName('/js/array'), true),
  getSidebar('进阶', getFileName('/js/advanced'), true),
  getSidebar('实践', getFileName('/js/pratice'), true),
  getSidebar('其它', getFileName('/js/other'), true),
];

module.exports = routes;
