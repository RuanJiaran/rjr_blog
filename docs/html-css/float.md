# 清除浮动

## 案例

给父盒子设置一个 boder，内部放两个盒子一个 big 一个 small，未给 big 和 small 设置浮动，则他们会默认撑开父盒子

![在这里插入图片描述](/img/11.jpeg)

当我给内部两个盒子加上 float 属性的时候
底部的 footer 盒子就会顶上来，然后父盒子因为没设置高度，变成一条线，big 和 small 已经浮动了

![在这里插入图片描述](/img/12.jpeg)

## 4 种清除浮动的方法

#### 1.额外标签法 `不推荐使用`

给谁清除浮动，就在其后额外添加一个空白标签
**优点：** 通俗易懂，书写方便
**缺点：** 添加许多无意义的标签，结构化比较差。

给元素 small 清除浮动（在 small 后添加一个空白标签 clear(类名可以随意），设置 clear:both;即可）

```html
<div class="fahter">
  <div class="big">big</div>
  <div class="small">small</div>
  <div class="clear">额外标签法</div>
</div>
<style>
  .clear {
    clear: both;
  }
</style>
```

#### 2.父级添加 overflow 方法 `不推荐使用`

可以通过触发 BFC 的方式，实现清楚浮动效果。必须定义 width 或 zoom:1，同时不能定义 height，使用 overflow:hidden 时，浏览器会自动检查浮动区域的高度

**优点：** 简单、代码少、浏览器支持好

**缺点：** 内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。不能和 position 配合使用，因为超出的尺寸的会被隐藏。

```css
.fahter {
  width: 400px;
  border: 1px solid deeppink;
  overflow: hidden;
}
```

**注意：** 别加错位置，是给父亲加（并不是所有的浮动都需要清除，谁影响布局，才清除谁。）

#### 3.使用 after 伪元素清除浮动 `推荐使用`

`:after`方式为空元素的升级版，好处是不用单独加标签了。IE8 以上和非 IE 浏览器才支持:after，，zoom(IE 专有属性)可解决 ie6,ie7 浮动问题（`较常用推荐`）

**优点：** 符合闭合浮动思想，结构语义化正确，不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）

**缺点：** 由于 IE6-7 不支持`：after`，使用`zoom：1`

![在这里插入图片描述](/img/13.png)

```html
/*伪元素是行内元素 正常浏览器清除浮动方法*/ .clearfix:after{ content: ""; display: block; height: 0;
clear:both; visibility: hidden; } .clearfix{ *zoom: 1; /*ie6清除浮动的方式
*号只有IE6-IE7执行，其他浏览器不执行*/ }

<body>
  <div class="father clearfix">
    <div class="big">big</div>
    <div class="small">small</div>
    <!--<div class="clear">额外标签法</div>-->
  </div>
  <div class="footer"></div>
</body>
```

#### 4.使用 before 和 after 双伪元素清除浮动 `推荐使用`

![在这里插入图片描述](/img/14.png)

```html
<div class="father clearfix">
    <div class="big">big</div>
    <div class="small">small</div>
</div>
<div class="footer"></div>

</div>

<style>
    .father{
        border: 1px solid black;
        *zoom: 1;
    }
    .clearfix:after,.clearfix:before{
        content: "";
        display: block;
        clear: both;
    }
    .big ,.small{
        width: 200px;
        height: 200px;
        float: left;
    }
    .big{
        background-color: red;
    }
    .small{
        background-color: blue;
    }
</style>
```

## 补充

**父级 div 定义 height：** 父级 div 手动定义 height，就解决了父级 div 无法自动获取到高度的问题。

**优点：** 简单、代码少、容易掌握

**缺点：** 只适合高度固定的布局，要给出精确的高度，如果高度和父级 div 不一样时，会产生问题
