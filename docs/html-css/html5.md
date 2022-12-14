# HTML5&CSS3

[Html5 教程](https://www.runoob.com/html/html5-intro.html)

[Css3 教程](https://www.runoob.com/css3/css3-tutorial.html)

## CSS3 新特性

> 选择器
>
> 背景和边框
>
> 文本效果
>
> 2D/3D 转换 — 变形（transform）、过渡(transtion)、动画(animation)

#### 1.选择器

```css
:last-child /* 选择元素最后一个孩子 */
:first-child /* 选择元素第一个孩子 */
:nth-child(1) /* 按照第几个孩子给它设置样式 */
:nth-child(even) /* 按照偶数 */
:nth-child(odd)  /* 按照奇数 */
:disabled /* 选择每个禁用的dom元素 */
:checked /* 选择每个被选中的dom元素 */
:not(selector) /* 选择非 selector 元素的每个元素 */
::selection /* 选择被用户选取的元素部分 */
a:link {color: #FF0000} /* 未访问的链接 */
a:visited {color: #00FF00} /* 已访问的链接 */
a:hover {color: #FF00FF} /* 鼠标移动到链接上 */
a:active {color: #0000FF} /* 选定的链接 */

::before {} /* 选择器在被选元素的前面插入内容和定义css，使用 content 属性来指定要插入的内容。 */
::after {} /* 选择器在被选元素的后面插入内容和定义css，使用 content 属性来指定要插入的内容。 */
:first-letter /* 选择该元素内容的首字母 */
:first-line /* 选择该元素内容的首行 */
::selection /* 选择被用户选取的元素部分 */
```

#### 2.背景和边框

```css
//背景
background-size：规定背景图片的尺寸（cover：填充；100% 100%：拉伸）
background-origin：规定背景图片的定位区域 对于 background-origin 属性，有如下属性 背景图片可以放置于
content-box、padding-box 或 border-box 区域

//边框
border-radius：圆角
box-shadow / text-shadow：阴影
border-image：边框图片
```

#### 3.文本效果

| 属性            | 描述                                                                       |
| --------------- | -------------------------------------------------------------------------- |
| text-shadow     | 向文本添加阴影                                                             |
| text-justify    | 规定当 text-align 设置为 “justify” 时所使用的对齐方法                      |
| text-emphasis   | 向元素的文本应用重点标记以及重点标记的前景色                               |
| text-outline    | 规定文本的轮廓                                                             |
| text-overflow   | 规定当文本溢出包含元素时发生的事情                                         |
| text-wrap       | 规定文本的换行规则                                                         |
| word-break      | 规定非中日韩文本的换行规则                                                 |
| word-wrap       | 允许对长的不可分割的单词进行分割并换行到下一行                             |
| text-decoration | 文本修饰符：overline、line-through、underline 分别是上划线、中划线、下划线 |

#### 4.2D/3D 转换

**变形 transform**

变形有 rotate 旋转、scale 缩放、translate 位移、skew 倾斜

**过渡 transition**

过渡 transition 是一个复合属性，可以同时定义 transition-property、transition-duration、transition-timing-function、transition-delay 子属性值

一般写在一起：

```css
div {
  width: 100px;
  transition: width 2s;
  -moz-transition: width 2s; /* Firefox 4 */
  -webkit-transition: width 2s; /* Safari 和 Chrome */
  -o-transition: width 2s; /* Opera */
}
```

**动画 animation**

动画的使用，首先通过@（-webkit-)keyframes 定义动画名称及动画的行为，再通过 animation 属性设置动画特征相关值进行调用

```css
.myClass {
  -webkit-animation-name: fadeIn;
  -moz-animation-name: fadeIn;
  -o-animation-name: fadeIn;
  -ms-animation-name: fadeIn;
  animation-name: fadeIn; /* 不带前缀的放到最后 */
}
/* 复杂属性 keyframes */
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
/* 不带前缀的放到最后 */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
```

> 这些新属性大多在新版浏览器得到了支持，有些需要添加浏览器前缀（-webkit-、-moz-、-ms-、-o-）

## H5 新特性

> 语义化标签：header、footer、section、nav、aside、article
>
> 增强型表单：input 的多个 type
>
> 新增表单属性：placehoder、required、min 和 max
>
> 音频视频：audio、video
>
> canvas 画布
>
> 地理定位
>
> 拖拽
>
> 本地存储：localStorage 没有时间限制的数据存储；sessionStorage， session 的数据存储，当用户关闭浏览器窗口后，数据会被删除
>
> 新事件：onresize、ondrag、onscroll、onmousewheel、onerror、onplay、onpause
> WebSocket：建立持久通信协议

#### 1.语义化标签

| 标签    | 描述                            |
| ------- | ------------------------------- |
| header  | 定义了文档的头部区域            |
| footer  | 定义了文档的尾部区域            |
| nav     | 定义文档的导航                  |
| section | 定义文档中的节（section、区段） |
| article | 定义页面独立的内容区域          |
| aside   | 定义页面的侧边栏内容            |
| dialog  | 定义对话框，比如提示框          |

#### 2.表单类型增强

| input 的 type | 描述                         |
| ------------- | ---------------------------- |
| week          | 选择周和年                   |
| color         | 主要用于选取颜色             |
| date          | 从一个日期选择器选择一个日期 |
| datetime      | 选择一个日期（UTC 时间）     |
| email         | 包含 e-mail 地址的输入域     |
| month         | 选择一个月份                 |
| number        | 数值的输入域                 |
| range         | 一定范围内数字值的输入域     |
| search        | 用于搜索域                   |
| tel           | 定义输入电话号码字段         |
| time          | 选择一个时间                 |
| url           | URL 地址的输入域             |

#### 3.html5 新增的表单属性

| 表单属性        | 描述                                                                                   |
| --------------- | -------------------------------------------------------------------------------------- |
| placehoder      | 简短的提示在用户输入值前会显示在输入域上。即我们常见的输入框默认提示，在用户输入后消失 |
| required        | 是一个 boolean 属性。要求填写的输入域不能为空                                          |
| pattern         | 描述了一个正则表达式用于验证 input 元素的值                                            |
| min 和 max      | 设置元素最小值与最大值                                                                 |
| step            | 为输入域规定合法的数字间隔                                                             |
| height 和 width | 用于 image 类型的 input 标签的图像高度和宽度                                           |
| autofocus       | 是一个 boolean 属性。规定在页面加载时，域自动地获得焦点                                |
| multiple        | 是一个 boolean 属性。规定 input 元素中可选择多个值                                     |

#### 4.html5 新事件

| 事件         | 描述                             |
| ------------ | -------------------------------- |
| onresize     | 当调整窗口大小时触发             |
| ondrag       | 当拖动元素时触发                 |
| onscroll     | 当滚动元素滚动元素的滚动条时触发 |
| onmousewheel | 当转动鼠标滚轮时触发             |
| onerror      | 当错误发生时触发                 |
| onplay       | 当媒介数据将要开始播放时触发     |
| onpause      | 当媒介数据暂停时触发             |
