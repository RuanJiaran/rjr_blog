# 集成 Element-Plus UI

[Element Plus UI 官方文档](https://element-plus.gitee.io/zh-CN/guide/installation.html)

## 安装

```bash
npm install element-plus --save
```

## 按需自动导入

首先你需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件

```bash
npm install -D unplugin-vue-components unplugin-auto-import
```

## 修改 Webpack 配置

修改 webpack/webpack.common.js 文件

```js
const ElementAutoImport = require('unplugin-auto-import/webpack')
const ElementComponents = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


module.exports = {
  plugins: [
    ElementAutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    ElementComponents({
      resolvers: [ElementPlusResolver()]
    })
  ],
}
```

