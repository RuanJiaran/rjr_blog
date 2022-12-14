# 盒模型 BFC 问题

## 什么是双边距（边距重叠）

> 两个 box 如果都设置了边距，那么在垂直方向上，两个 box 的边距会发生重叠，以绝对值大的那个为最终结果显示在页面上

## 两种边距重叠的情况

#### 父子关系的边距重叠

> 父子关系，如果子元素设置了外边距，在没有把父元素变成 BFC 的情况下，父元素也会产生外边距

```html
<div class="out">
    <div class="inner"></article>
</div>

<style>
.out {
    background-color: #f00;
    width: 200px;
    height: 200px;
}

.inner{
    margin-top: 50px;
    width: 100px;
    height: 100px;
    background-color: blue;
}
</style>
```

![在这里插入图片描述](/img/3.jpeg)

![在这里插入图片描述](/img/4.jpeg)

#### 同级兄弟关系的重叠

> 同级元素在垂直方向上外边距会出现重叠情况，最后外边距的大小取两者绝对值大的那个

```html
<section class="fat">
  <div class="child-one"></div>
  <div class="child-two"></div>
</section>

<style type="text/css">
  .fat {
    background-color: #ccc;
  }
  .fat .child-one {
    width: 100px;
    height: 100px;
    margin-bottom: 50px;
    background-color: #f00;
  }

  .fat .child-two {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    background-color: #345890;
  }
</style>
```

![](/img/5.jpeg)

![在这里插入图片描述](/img/6.jpeg)

## 什么是 BFC

> BFC 就是“`块级格式化上下文`”的意思，BFC 是一块独立的布局环境，保护其中内部元素不收外部影响，也不影响外部。本身 BFC 是一种 css 的布局方式，只是我们可以利用它来解决外边距折叠的问题，BFC 并不是专门用来解决这个问题而创的

## 如何触发 BFC

在 box 属性值为这些的情况下，都会让所属的 box 产生 BFC

- `overflow:auto/hidden`
- `position:absolute/fixed`
- `float:left/right`

- `display:inline-block/table-cell/table-caption/flex/inline-flex`

## BFC 的原理

- BFC 内部的盒子，会在垂直方向，一个接一个地放置。垂直方向上也会发生边距重叠
- BFC 就是页面上的一个独立容器，容器里面的子元素不会影响到外面的元素，外边的也不会影响里边的
- BFC 的区域不会与 float 重叠
- 计算 BFC 的高度时，浮动元素也被计算在内

## BFC 的应用

#### 1.可以用来自适应布局

利用 BFC 的这一个原理就可以实现两栏布局，左边定宽，右边自适应。不会相互影响，哪怕高度不相等

![在这里插入图片描述](/img/7.png)

**给 right 加 overflow:hidden；使其变成 BFC，消除外部 left 因浮动对他的影响**

![在这里插入图片描述](/img/8.png)

```html
<!-- BFC不与float重叠 -->
<section id="layout">
  <div class="left">left</div>
  <div class="right">right</div>
</section>

<style media="screen">
  #layout {
    background: red;
    height: 200px;
  }
  #layout .left {
    float: left;
    width: 100px;
    height: 80px;
    background: blue;
  }
  #layout .right {
    height: 100px;
    background: green;
    overflow: hidden;
  }
</style>
```

#### 2.可以清除浮动

![在这里插入图片描述](/img/9.png)

**父元素加`overflow:hidden/auto`,变 BFC**

![在这里插入图片描述](/img/10.png)

```html
<!-- BFC子元素即使是float也会参与计算 -->
<div id="out">
  <div id="inner">我是浮动元素</div>
</div>
<style>
  #out {
    background: red;
    border: 1px solid black;
    overflow: hidden;
  }
  #inner {
    float: left;
    width: 200px;
    height: 200px;
    background-color: blue;
  }
</style>
```

#### 3.解决垂直边距重叠

见开头两种边距重叠的情况
