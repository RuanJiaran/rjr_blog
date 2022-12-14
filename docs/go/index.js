import lodash from 'lodash';

const { uniq } = lodash;
const { getFileName, getSidebar } = require('../../.vuepress/utils');

const routes = [
  getSidebar(
    '开始',
    uniq([
      '/docs/go/start/start',
      '/docs/go/start/env',
      '/docs/go/start/go-module',
      '/docs/go/start/import',
      '/docs/go/start/defer',
      '/docs/go/start/print',
      '/docs/go/start/runtime',
      ...getFileName('/go/start'),
    ])
  ),
  getSidebar(
    '基础',
    uniq([
      '/docs/go/base/data-base-type',
      '/docs/go/base/var',
      '/docs/go/base/string',
      '/docs/go/base/const',
      '/docs/go/base/map',
      '/docs/go/base/struct',
      '/docs/go/base/array',
      '/docs/go/base/slice',
      ...getFileName('/go/base'),
    ])
  ),
  getSidebar('网络', uniq([...getFileName('/go/network')])),
];

module.exports = routes;
