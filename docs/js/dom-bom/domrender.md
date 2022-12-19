# 浏览器渲染机制

![img](/img/v2-c7f975c4bc072b515dfed4765c3ea68e_720w.webp)

浏览器解析渲染页面分为以下五个步骤：

1. 解析 HTML 标签，构建 DOM 树；
2. 解析 CSS，构建 CSSOM 树；
3. 把 DOM 和 CSSOM 组合成 渲染树（render tree）；
4. 在渲染树的基础上进行布局，计算每个节点的几何结构；
5. 把每个节点绘制到屏幕上（painting）。

## 渲染流程

### 1、解析 HTML 标签，构建 DOM 树

- DOM 树（文本对象模型），根据 HTML 的内容，将标签按照结构解析成 DOM 树，DOM 构建是增量的，HTML 响应编程令牌（token），令牌变成节点，而节点又变成 DOM 树。
- 在读取 HTML 文档，**\*构建 DOM 树的过程中，若遇到 script 标签，则 DOM 树的构建会暂停，直至脚本执行完毕**。\*

### 2、解析 CSS，构建 CSSOM 树

- DOM 包含页面所有的内容。CSSOM 包含了页面所有的样式，也就是如何展示 DOM 的信息。
- **_浏览器会阻塞页面渲染直到它接收和执行了所有的 CSS。_**

### 3、把 DOM 和 CSSOM 组合成渲染树

渲染树（Render Tree）由DOM树、CSSOM树合并而成，但并不是必须等DOM树及CSSOM树加载完成后才开始合并构建渲染树。三者的构建并无先后条件，亦非完全独立，而是会有交叉，并行构建。因此会形成一边加载，一边解析，一边渲染的工作现象。

:::warning 注意

头部（通常）不包含任何可显示的信息，因此不在渲染树中。如果元素上有 display：none； ，他本身及其后代都不会出现渲染树中。

:::

### 4、在渲染树的基础上进行布局，计算每个节点的几何结构

- 布局：通过渲染树中渲染对象的信息，计算出每个渲染对象的位置和尺寸。
- 回流：布局完成后，绘制界面的某个部分发生变化，就需要重新渲染。

### 5、把每个节点绘制到屏幕上

- 最后一步是将像素绘制在屏幕上。一点渲染树创建并不就完成，像素就可以被绘制在屏幕上。

## 为什么在html底部加载 JS

若在构建DOM树的过程中，当 HTML 解析器遇到一个 script 标记时，即遇到了js，将立即阻塞DOM树的构建，将控制权移交给 JavaScript 引擎，等到 JavaScript 引擎运行完毕，浏览器才会从中断的地方恢复DOM树的构建。  其根本原因在于，**JS会对DOM节点进行操作，浏览器无法预测未来的DOM节点的具体内容，为了防止无效操作，节省资源，只能阻塞DOM树的构建**。譬如，若不阻塞DOM树的构建，若JS删除了某个DOM节点A，那么浏览器为构建此节点A花费的资源就是无效的。

若在HTML头部加载JS文件，由于JS阻塞，会推迟页面的首绘。为了加快页面渲染，一般将JS文件放到HTML底部进行加载，或是对JS文件执行async或defer加载。

## 回流（reflow）

也有称重排，当渲染树节点发生改变，影响了节点的几何属性（如宽、高、内边距、外边距、或是float、position、display：none;等等），导致节点位置发生变化，此时触发浏览器重排（reflow），需要重新生成渲染树。譬如JS为某个p标签节点添加新的样式："display:none;"。导致该p标签被隐藏起来，该p标签之后的所有节点位置都会发生改变。此时浏览器需要重新生成渲染树，重新布局，即回流（reflow）。

## 重绘（repaint）

屏幕的一部分要重绘。渲染树节点发生改变，但不影响该节点在页面当中的**空间位置及大小**。譬如某个div标签节点的背景颜色、字体颜色等等发生改变，但是该div标签节点的宽、高、内外边距并不发生变化，此时触发浏览器重绘（repaint）。

:::warning 注意

回流必将引起重绘，而重绘不一定会引起回流。

:::

## 引起回流的情况

- 添加或者删除可见的DOM元素
- 元素位置改变——display、float、position、overflow 等等
- 元素尺寸改变——边距、填充、边框、宽度和高度
- 内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变
- 页面渲染初始化
- 浏览器窗口尺寸改变——resize事件发生时

## 减少回流，优化渲染过程

- 对于复杂动画效果，由于会经常的引起回流重绘，因此，我们可以使用绝对定位，让它脱离文档流。否则会引起父元素以及后续元素频繁的回流。

#### 批量操作DOM

当对DOM有多次操作的时候，需要使用一些特殊处理减少触发回流，其实就是对DOM的多次操作，在脱离标准流后，对元素进行的多次操作，不会触发回流，等操作完成后，再将元素放回标准流。

**脱离标准流的操作有以下3中：**

1. 隐藏元素，先display:none 隐藏元素，然后对该元素进行所有的操作，最后再显示该元素。***因为对display:none的元素进行操作不会引起回流、重绘。***

2. 使用文档碎片，使用documentFragment或div等元素进行缓存操作，先把所有要添加到元素添加到1个div，最后才把这个div append到body中

3. 拷贝节点

   例如：

   将ul拷贝一份，将所有li放在拷贝中，等都放进去以后，使用拷贝替换掉ul

   ```js
   var newUL = oUl.cloneNode(true);
   for(var i=0;i<data.length;i++){
       var oLi = document.createElement("li");
       oLi.innerText = data[i].name;
       newUL.appendChild(oLi);
   }
   oUl.parentElement.replaceChild(newUl, oUl);
   ```

#### 避免触发同步布局事件

每次回流都会对浏览器造成额外的计算消耗，所以浏览器对于回流和重绘有一定的优化机制。浏览器通常都会将多次回流操作放入一个队列中，等过了一段时间或操作达到了一定的临界值，然后才会挨个执行，这样能节省一些计算消耗。但是在获取布局信息操作的时候，会强制将队列清空，也就是强制回流，比如访问或操作以下或方法时：

- offsetTop
- offsetLeft
- offsetWidth
- offsetHeight
- scrollTop
- scrollLeft
- scrollWidth
- scrollHeight
- clientTop
- clientLeft
- clientWidth
- clientHeight
- getComputedStyle()

这些属性或方法都需要得到最新的布局信息，所以浏览器必须去回流执行。因此，在项目中，尽量避免使用上述属性或方法，如果非要使用的时候，也尽量将值缓存起来，而不是一直获取。

**示例**

```js
function initP() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.width = box.offsetWidth + 'px';
    }
}
```

这段代码看上去是没有什么问题，可是其实会造成很大的性能问题。在每次循环的时候，都读取了box的 一个offsetWidth属性值，然后利用它来更新p标签的width属性。这就导致了每一次循环的时候，浏览器都必须先使上一次循环中的样式更新操作生效，才能响应本次循环的样式读取操作。每一次循环都会强 制浏览器刷新队列。我们可以优化为:

```js
const width = box.offsetWidth;
function initP() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.width = width + 'px';
    }
}
```

