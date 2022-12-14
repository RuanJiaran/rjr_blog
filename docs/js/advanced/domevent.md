# 事件级别/事件捕获/事件冒泡

## DOM 事件三种级别

#### DOM0 级事件

DOM0 级事件分两种，一是直接在标签内直接添加执行语句，二是定义执行函数

```js
<input type="text" id="test">
<input type="button" value="button" onclick="alert(document.getElementById('test').value)">

<script>
    document.getElementById('button').onclick=function(){
    	alert(document.getElementById('test').value);
	}
</script>
```

#### DOM2 级事件

第一个参数：事件名称
第二个参数：执行函数
第三个参数：指定冒泡还是捕获，默认是 false，冒泡

```js
element.addEventListener('click', function () {}, false)
```

#### DOM3 级事件

同 DOM2 级一样，只不过添加了更多的事件类型，鼠标事件、键盘事件。

```js
element.addEventListener('keyup', function () {}, false)
```

## DOM 事件两种类型

`事件捕获` 就是由外往内，从事件发生的顶点开始，逐级往下查找，一直到目标元素。

`事件冒泡` 就是由内往外，从具体的目标节点元素触发，逐级向上传递，直到根节点。

![](/img/eventdom1.png)

#### DOM 事件的事件流（事件传播）

事件流就是，事件传播过程。
DOM 完整的事件流包括三个阶段：`事件捕获阶段`、`目标阶段`和`事件冒泡阶段`。
事件通过捕获到达目标元素，这个时候就是目标阶段。从目标节点元素将事件上传到根节点的过程就是第三个阶段，冒泡阶段。

#### 事件捕获的具体流程

当事件发生在 DOM 元素上时，该事件并不完全发生在那个元素上。在捕获阶段，事件从 window 开始，之后是 document 对象，一直到触发事件的元素。

我们通过代码来演示整个捕获的流程。

```js
<div id="dom">
    <style media="screen">
      #dom{
        width: 300px;
        height: 100px;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 100px;
      }
    </style>
    目标元素
</div>
<script type="text/javascript">
    var dom = document.getElementById('dom');

    dom.addEventListener('click', function (e) {
        console.log('this div');
    }, true);

    window.addEventListener('click', function (e) {
        console.log('this window');
    }, true);

    document.addEventListener('click', function (e{
        console.log('this document');
    }, true);

    document.documentElement.addEventListener('click', function (e) {
        console.log('this html');
    }, true);

    document.body.addEventListener('click',function (e) {
        console.log('this body');
    }, true);
</script>
```

![](/img/eventdom2.png)

#### 事件冒泡的具体过程

当事件发生在 DOM 元素上时，该事件并不完全发生在那个元素上。在冒泡阶段，事件冒泡，或者事件发生在它的父代，祖父母，直到到达 window 为止。

## 事件委托

一张图带你了解事件委托

![img](/img/eventdom3.png)

#### 概念

事件委托，又名事件代理。事件委托就是利用[事件冒泡](https://so.csdn.net/so/search?q=事件冒泡&spm=1001.2101.3001.7020)，就是把子元素的事件都绑定到父元素上。如果子元素阻止了事件冒泡，那么委托也就没法实现了

#### 好处

提高性能，减少了事件绑定，从而减少内存占用

#### 示例 1

```js
<div id="div3">
    <a href="#">a1</a><br>
    <a href="#">a2</a><br>
    <a href="#">a3</a><br>
    <a href="#">a4</a><br>
    <button>加载更多...</button>
</div>

<script>
// 封装通用的事件绑定函数
function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn)
}

//获取父元素
const fu = document.getElementById('div3')
bindEvent(fu, 'click', function (event) {
    // console.log(event.target) // 获取触发的元素
    let target=event.target
    event.preventDefault() // 阻止默认行为
    //过滤符合条件的子元素，主要是过滤掉 加载更多
    if(target.nodeName.toLowerCase()==="A"){
        alert(target.innerHTML)
    }
})
</script>
```

![](/img/eventdom4.png)

#### 示例 2 （在 vue 中事件委托）

我们经常遇到 vue 中`v-for`一个列表，列表的每一项都绑定了`@click`处理事件。我们都知道绑定这么多监听，从性能方面来说是不太好的。那我们我们可以通过把每个 item 的 click 事件委托给父元素的形式来实现

![](/img/20200910171402992.png)

```js
<table @click="edit">
  <tr v-for="item in list">
    <td>{{item.name}}</td>
    ...
    <td>
      <button :data-id="item.id" title="eidt">编辑</button>
   </td>
  </tr>
</table>


//js
edit (event){
    if(event.target.title == "edit"){ //如果点击到了edit
        let id = evenr.target.dataset.id;
        //拿着id参数执行着相关的操作
        this.$router.push({path:'/detail',query:{id:id}})
    }
}
```
