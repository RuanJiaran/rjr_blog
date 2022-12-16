const navbar = [
  {
    text: 'GO',
    children: [
      {
        text: '心得笔记',
        link: '/docs/go/start/start.html',
      },
      {
        text: '其它文档',
        children: [
          {
            text: '菜鸟教程',
            link: 'https://www.runoob.com/go/go-tutorial.html',
          },
          {
            text: 'Dom 事件对象',
            link: 'https://www.runoob.com/jsref/dom-obj-event.html',
          },
        ],
      },
    ],
  },
  {
    text: 'TypeScript',
    link: '/docs/ts/as.html',
    activeMatch: '^/ts/',
  },
  {
    text: 'JavaScript',
    children: [
      {
        text: '心得笔记',
        link: '/docs/js/core/eventloop.html',
      },
      {
        text: '其它文档',
        children: [
          {
            text: '菜鸟教程',
            link: 'https://www.runoob.com/js/js-tutorial.html',
          },
        ],
      },
    ],
  },
  {
    text: 'Html/Css',
    link: '/docs/html-css/index.html',
    activeMatch: '^/html-css/',
  },
  {
    text: 'React',
    link: '/docs/react/base/life.html',
    activeMatch: '^/react/',
  },
  {
    text: 'Vue2',
    link: '/docs/vue2/core/data.html',
    activeMatch: '^/vue2/',
  },
  {
    text: 'Webpack',
    link: '/docs/webpack/webpack4-vue2.html',
    activeMatch: '^/webpack/',
  },
  {
    text: 'Nest 框架',
    link: '/docs/nestjs/start/start.html',
    activeMatch: '^/nestjs/',
  },
  {
    text: 'Docker',
    link: '/docs/docker/index.html',
    activeMatch: '^/docker/',
  },
  {
    text: 'Http',
    link: '/docs/http/http-https.html',
    activeMatch: '^/http/',
  },
  {
    text: 'ReactAdmin',
    link: '/docs/react-admin/index.html',
    activeMatch: '^/react-admin/',
  },
  {
    text: '其它',
    link: '/docs/other/nginx_proxy.html',
    activeMatch: '^/other/',
  },
  {
    text: '常用文档',
    children: [
      {
        text: 'JS',
        children: [
          {
            text: 'ES6 学习文档',
            link: 'http://caibaojian.com/es6/README_about.html',
          },
          {
            text: 'lodash',
            link: 'https://www.lodashjs.com/',
          },
        ],
      },
      {
        text: 'Vue',
        children: [
          {
            text: 'Vue 官方文档',
            link: 'https://cn.vuejs.org/',
          },
          {
            text: 'Element UI',
            link: 'https://element.eleme.cn/#/zh-CN/component/installation',
          },
          {
            text: 'VuePress',
            link: 'https://v2.vuepress.vuejs.org/zh/',
          },
        ],
      },
      {
        text: 'React',
        children: [
          {
            text: 'React 官方文档',
            link: 'https://zh-hans.reactjs.org/',
          },
          {
            text: 'Create React App 中文文档',
            link: 'https://www.html.cn/create-react-app/',
          },
          {
            text: 'Ant Design',
            link: 'https://ant.design/components/overview-cn/',
          },
          {
            text: 'duim',
            link: 'https://d.umijs.org/zh-CN/guide',
          },
          {
            text: 'ahooks',
            link: 'https://ahooks.js.org/',
          },
          {
            text: 'react-dom-router',
            link: 'https://reactrouter.com/en/main',
          },
        ],
      },
      {
        text: 'Node',
        children: [
          { text: 'Sequelize 操作数据库', link: 'https://www.sequelize.com.cn/' },
          {
            text: 'Nest 框架官方文档',
            link: 'https://docs.nestjs.cn/9/introduction',
          },
          {
            text: 'Nest 框架模型生成器',
            link: 'https://www.npmjs.com/package/sequelize-typescript-generator',
          },
        ],
      },
      {
        text: '前端工程化',
        children: [
          {
            text: 'Webpack',
            link: 'https://webpack.docschina.org/concepts/',
          },
          {
            text: 'Babel',
            link: 'https://www.babeljs.cn/docs/',
          },
          {
            text: 'Prettier',
            link: 'https://www.prettier.cn/docs/index.html',
          },
          {
            text: 'Eslint',
            link: 'https://eslint.bootcss.com/',
          },
          {
            text: 'Stylelint',
            link: 'https://stylelint.io/',
          },
        ],
      },
    ],
  },
];

export default navbar;
