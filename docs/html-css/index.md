# 盒模型

## 什么是[盒子模型](https://so.csdn.net/so/search?q=盒子模型&spm=1001.2101.3001.7020)

在我们 HTML 页面中，每一个元素都可以被看作一个盒子，而这个盒子由：内容区（content）、填充区（padding）、边框区（border）、外边界区（[margin](https://so.csdn.net/so/search?q=margin&spm=1001.2101.3001.7020)）四部分组成。

![在这里插入图片描述](/img/1.png)

## 两种盒子模型

标准模式下: 一个块的总宽度 = width + margin(左右) + padding(左右) + border(左右)

怪异模式下: 一个块的总宽度 = width + margin(左右)（即 width 已经包含了 padding 和 border 值）（IE 浏览器）

## 标准和怪异模型的转换

- `box-sizing:content-box` 将采用标准模式的盒子模型标准
- `box-sizing:border-box` 将采用怪异模式的盒子模型标准
- `box-sizing:inherit` 规定应从父元素继承 box-sizing 属性的值

## JS 盒模型

![img](/img/2.png)

**怎么获取和设置 box 的内容宽高**

**IE：** `dom.currentStyle.width/height`

**非 IE:** `window.getComputedStyle(dom).width/height`

```js
var obj = document.getElementById('box')

var style = null
if (window.getComputedStyle) {
  style = window.getComputedStyle(obj, null) // 非IE
} else {
  style = obj.currentStyle // IE
}
alert('width=' + style.width + '\nheight=' + style.height)
```
