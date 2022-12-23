import { defineUserConfig } from 'vuepress';
import recoTheme from 'vuepress-theme-reco';
import navbar from './config/navbar';
import { resolve } from 'path';

const { getSidebar, getFileName } = require('./utils');
const {
  tsRoutes,
  jsRoutes,
  nestjsRoutes,
  reactRoutes,
  vue2Routes,
  goRoutes,
  webpackRoutes,
} = require('./config/routes');
console.log(resolve(__dirname, 'public/img'));

export default defineUserConfig({
  lang: 'zh-CN',
  title: '学习笔记',
  description: '个人学习笔记',
  base: '/rjr_blog/', //项目根路径
  dest: './dist', // 项目打包目录
  markdown: {
    headers: {
      level: [1, 2, 3, 4, 5],
    },
  },
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'ruanjiaran',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/go/': [...goRoutes],
      '/docs/js/': [...jsRoutes],
      '/docs/ts/': [...tsRoutes],
      '/docs/vue2/': [...vue2Routes],
      '/docs/react/': [...reactRoutes],
      '/docs/webpack/': [...webpackRoutes],
      '/docs/react-admin/': [getSidebar('ReactAdmin', getFileName('/react-admin'))],
      '/docs/nestjs/': [...nestjsRoutes],
      '/docs/http/': [getSidebar('HTTP', getFileName('/http'))],
      '/docs/html-css/': [getSidebar('HTML-CSS', getFileName('/html-css'))],
      '/docs/docker/': [getSidebar('Docker', getFileName('/docker'))],
      '/docs/other/': [getSidebar('其它', getFileName('/other'))],
    },
    navbar: [...navbar],
    // bulletin: {
    //   body: [
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'QQ 群',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'GitHub',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'buttongroup',
    //       children: [
    //         {
    //           text: '打赏',
    //           link: '/docs/others/donate.html',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
