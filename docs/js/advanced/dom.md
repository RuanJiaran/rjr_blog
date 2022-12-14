# DOM 操作

## DOM 概念

JavaScript 操作网页的接口，全称为“文档对象模型(Document Object Model)。 有这几个概念：文档、元素、节点

- 整个文档是一个文档节点
- 每个标签是一个元素节点
- 包含在元素中的文本是文本节点
- 元素上的属性是属性节点
- 文档中的注释是注释节点

## DOM 树

DOM 树是结构，树是由 DOM 元素和属性节点组成的，DOM 的本质是把 html 结构化成 js 可以识别的树模型；有了树模型，就有了层级结构，层级结构是指元素和元素之间的关系；父子，兄弟

```html
<html>
  <head>
    <title>dom树</title>
  </head>
  <body>
    <a href="">a标签</a>
    <h1>标题</h1>
  </body>
</html>
```

上面的 html 用 dom 树表示如下

![](/img/20201024140711640.png)

## DOM 节点操作

```js
// 创建新节点  （document调用）
createDocumentFragment() //创建一个DOM片段
createElement() //创建一个具体的元素
createTextNode() //创建一个文本节点

// 添加、移除、替换、插入  （父元素调用）
appendChild() //添加
removeChild() //移除
replaceChild() //替换
insertBefore() //插入

// 查找 （document调用）
getElementsByTagName() //通过标签名称 一组元素
getElementsByName() //通过元素的Name属性的值 一组元素
getElementById() //通过元素Id，唯一性单个元素
getElementByClassName() //通过c元素lass获取  一组元素
qurySelectorAll('选择器') // 通过选择器获取一组元素
querySelector('选择器') // 通过选择器获取单个元素

// 关系  （元素调用前三个父元素调用 ）
childNodes // 获取所有的子节点
children // 获取所有的子元素节点 (常用)
firstElementChild //获取第一个元素
lastElementChild //获取最后一个元素
parentNode //获取当前节点的父节点
previousElementSibling //获取当前节点的前一个兄弟元素
nextElementSibling //获取当前节点的后一个兄弟元素
```

#### dom 获取 (6 种方法)

```js
// 通过id获取到的是单个元素
let oBox = document.getElementById('box')
console.log(oBox) //<div id='box' class="item">abcdefg</div>

// 通过class获取到的是一组元素，不是数组，
let oBox2 = document.getElementsByClassName('item')
console.log(oBox2) //HTMLCollection [div#box.item, box: div#box.item]
console.log(oBox2[0] == oBox)

// 通过TagName获取到的是一组元素，与上面相同
let oBox3 = document.getElementsByTagName('div')[0]

//通过name后去到的是NodeList [div#box.item],也是集合
let oBox4 = document.getElementsByName('mybox')
console.log(oBox4) //NodeList [div#box.item]

// h5新加两种
//获取单个
let item = document.querySelector('.item')
//获取组合
let items = document.querySelectorAll('.item')

console.log(item, items)

// body
let body = document.body
//html
let html = document.documentElement
```

#### 添加节点

```js
let fa = document.querySelectorAll('.father')[0]

// 创建文本节点
let text = document.createTextNode('hello')
// 创建元素节点
let tag = document.createElement('H1')

tag.appendChild(text)

fa.appendChild(tag)
```

#### 删除节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  // 现获取父
  let oUl = document.querySelector('ul')

  // 再获取子
  let oLi = document.querySelectorAll('li')[1]

  oUl.removeChild(oLi)
</script>
```

#### 替换节点

```js
// 现获取父
let oUl = document.querySelector('ul')

// 再获取子
let oLi = document.querySelectorAll('li')

// 必须是同一个父
oUl.replaceChild(oLi[1], oLi[0])
```

#### 插入节点

```js
// 现获取父
let oUl = document.querySelector('ul')

// 再获取子
let oLi = document.querySelectorAll('li')

let other = document.createElement('a')
other.innerText = '百度'

// 必须是同一个父
oUl.insertBefore(other, oLi[1])
```

##### 文档碎片 (优化)

```js
// 创建文档碎片
let frag = document.createDocumentFragment()

for (var i = 0; i < 3; i++) {
  let dot = document.createElement('li')
  dot.innerHTML = `${i + 4}`
  frag.appendChild(dot)
}

oUl.appendChild(frag)
```

## Attribute 和 Property 区别

- property 修改对象属性，不会体现都 html 结构中
- attribute 修改 html 属性，会改变 html 结构
- 两者都可能引起 DOM 重新渲染

![](/img/dom1.png)

![](/img/dom2.png)

## DOM 性能

![](/img/dom3.png)

![](/img/dom4.png)

## DOM 相关面试题

```html
问题1、dom是哪种基本的数据结构？ 树结构 问题2、Dom操作的常用API有哪些？
①获取DOM节点，以及节点的property和Attribute ②获取父节点，获取子节点 childNodes/ parentNode
③新增节点，删除节点 问题3、Dom节点的Attribute和Property有和区别？ ①property是对JS对象属性的修改
②Attribute是对html标签属性的修改 问题4、DOM性能优化。
将频繁的操作改为一次性操作，通过创建文档碎片，最后一次性加入文档碎片。
```
