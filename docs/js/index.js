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
  getSidebar(
    '基础',
    uniq([
      '/docs/js/base/datatype',
      '/docs/js/base/typeof',
      '/docs/js/base/null',
      '/docs/js/base/copy',
      '/docs/js/base/map',
      ...getFileName('/js/base'),
    ])
  ),
  getSidebar('数组操作', getFileName('/js/array'), true),
  getSidebar('进阶', getFileName('/js/advanced'), true),
  getSidebar(
    'DOM&BOM',
    uniq([
      '/docs/js/dom-bom/dom',
      '/docs/js/dom-bom/domevent',
      '/docs/js/dom-bom/bom',
      '/docs/js/dom-bom/offset-client-scroll',
      '/docs/js/dom-bom/cookie',
      '/docs/js/dom-bom/domrender',
      ...getFileName('/js/dom-bom'),
    ])
  ),
  getSidebar('实践', getFileName('/js/pratice'), true),
  getSidebar('其它', getFileName('/js/other'), true),
];

module.exports = routes;
