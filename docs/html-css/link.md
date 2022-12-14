# like 和 @import 区别

##### 区别

- link 属于 html 标签。@import 在 css 中使用表示导入外部样式表
- link 支持使用 javascript 改变样式 （`document.styleSheets`），后者不可
- 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载
- link 方式的样式的权重 高于@import 的权重
- import 只在 IE5 以上才能识别，而 link 是 HTML 标签，无兼容问题

##### 用法

```html
<head>
  <!-- link是标签，引入外部样式表 -->
  <link rel="stylesheet" href="./a.css" />
  <style>
    /* @import 在css环境中 导入外部css */
    @import url('./b.css');
    .box {
      width: 100px;
      height: 100px;
      background: green;
    }
  </style>
</head>
```
