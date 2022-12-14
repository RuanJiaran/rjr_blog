---
typora-root-url: ..\..\.vuepress\public\img
---

# Event Loop 事件循环

## Event Loop 是什么

> `Event Loop`即事件循环，是浏览器或 `Node` 解决 `javaScript` 单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理

## js 使用单线程的原因

作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？所以，为了避免复杂性，从一诞生，JavaScript 就是单线程

## 同步异步问题

由于 js 是单线程的，只有当上一个任务完成之后才会继续完成下一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。例如我们需要浏览新闻，但新闻包含的超清图片加载很慢，总不能网页一直卡着直到图片完全出来。于是，js 单线程任务将任务设计成了两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。

##### 同步任务

在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务

##### 异步任务

不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

##### 异步和同步的区别

- 异步不会阻塞程序的执行
- 同步会阻塞程序的执行

## 前端使用异步的场景

- 定时任务：setTimeout，setInverval
- 网络请求：ajax 请求，动态`<img>`加载
- 事件绑定

###### 示例

```js
// ajax请求代码示例
console.log('start')
$.get('./data1.json', function (data1) {
  console.log(data1)
})
console.log('end')
```

```js
// img 加载示例
console.log('start')
const img = document.createElement('img')
img.onload = function () {
  console.log('loaded')
}
img.src = 'xxx.png'
console.log('end')
```

```js
// 事件绑定示例
console.log('start')
document.getElementById('btn').addEventListener('click', function () {
  alert('clicked')
})
console.log('end')
```

请求处理过程中，你不能闲着，会产生异步的请求，回头再处理，然后继续执行下面的请求

#### 同步阻塞示例

```js
console.log(1000)
alert(200)
console.log(3000)
```

上面就是同步阻塞示例，你不点击 alert 确认窗口，不会打印 3000

## Event Loop 原理

同步任务会在调用栈中按照顺序等待主线程依次执行。异步任务会被挂起进入 Event Table 并注册函数，异步任务会在有了结果后将注册的回调函数放入任务队列（Event Queue）中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。

上述过程会不断重复，也就是常说的 `Event Loop`（事件循环）

![](/img/20201006174608426.png)

异步任务分`宏任务`（macrotask ）和`微任务`（microtask ）两类

#### 宏任务(MacroTask)

(macro)task，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。

浏览器为了能够使得 JS 内部(macro)task 与 DOM 任务能够有序的执行，会在一个(macro)task 执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染，流程如下

```text
(macro)task-> GUI 线程接管渲染 ->(macro)task->...
```

包含：

- `script` (全部代码)
- `setTimeout`
- `setInterval`
- `setImmediate` (Node 独有，浏览器暂时不支持，只有 IE10 支持，具体可见`MDN`）
- `I/O`
- `UI Rendering` (UI 交互事件)
- `requestAnimationFrame` (浏览器独有)
- `postMessage`
- `MessageChannel`

#### 微任务(MicroTask)

microtask,可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前 task 任务后，下一个 task 之前，在渲染之前。

所以它的响应速度相比 setTimeout（setTimeout 是 task）会更快，因为无需等渲染。也就是说，在某一个 macrotask 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕（在渲染前）

包含：

- `Promise.then` `Promise.catch` `Promise.finally`
- `async/await`
- `Process.nextTick`（Node 独有）
- `MutationObserver`(浏览器独有，具体使用方式查看[这里](https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttp%3A%2F%2Fjavascript.ruanyifeng.com%2Fdom%2Fmutationobserver.html)）
- `Object.observe`(废弃)

## 特别注意

只有`Promise.then`，`Promise.catch`，`Promise.finally`里面的回调才是微任务，而 Promise 里面的回调是同步任务

## 经典示例

###### 示例 1

```js
// 主线程
console.log(100)

// 宏任务队列 1
setTimeout(() => {
  console.log(200)
})

new Promise(resolve => {
  // 主线程
  console.log(300)
  resolve()
}).then(() => {
  // 微任务队列 1
  console.log(301)
})

// 主线程
console.log(400)

// 100,300,400,301,200
```

上示例中特别需要注意的是 300 为什么会在 400 前面打印出来？？？

###### 示例 2

```js
//第一轮 宏任务队列 1
setTimeout(() => {
  //第二轮 主线程 1
  console.log('timer_1')

  //第二轮 宏任务队列 1
  setTimeout(() => {
    // 第四轮 主线程 1
    console.log('timer_3')
    new Promise(resolve => {
      // 第四轮 主线程 2
      resolve()
      console.log('new promise2')
    }).then(() => {
      // 第四轮 微任务队列
      console.log('promise then2')
    })
  }, 0)

  // 第二轮 微任务 1
  new Promise(resolve => {
    //第二轮 主线程 2
    resolve()
    console.log('new promise')
  }).then(() => {
    //第二轮 微任务队列 1
    console.log('promise then')
  })
}, 0)

//第一轮 宏任务队列 2
setTimeout(() => {
  // 第三轮 主线程
  console.log('timer_2')
}, 0)

//第一轮 主线程
console.log('========== Sync queue ==========')

// ========== Sync queue ==========
// timer_1
// new promise
// promise then
// timer_2
// timer_3
// new promise2
// promise then2
```

###### 示例 3

```js
let n = 0
setTimeout(() => {
  n++
  new Promise(resolve => {
    resolve()
  }).then(() => {
    console.log(n)
  })
}, 1000)
setTimeout(() => {
  n++
}, 1000)
setTimeout(() => {
  n++
  new Promise(resolve => {
    resolve()
  }).then(() => {
    console.log(n)
  })
}, 1000)

// 1
// 3
```

###### 示例 4

```js
//主线程直接执行
console.log('1')

//丢到宏事件队列中
setTimeout(function () {
  console.log('2')
  process.nextTick(function () {
    console.log('3')
  })
  new Promise(function (resolve) {
    console.log('4')
    resolve()
  }).then(function () {
    console.log('5')
  })
})

//微事件1
process.nextTick(function () {
  console.log('6')
})

new Promise(function (resolve) {
  //主线程直接执行
  console.log('7')
  resolve()
}).then(function () {
  //微事件2
  console.log('8')
})

//丢到宏事件队列中
setTimeout(function () {
  console.log('9')
  process.nextTick(function () {
    console.log('10')
  })
  new Promise(function (resolve) {
    console.log('11')
    resolve()
  }).then(function () {
    console.log('12')
  })
})

// 1，7，6，8，2，4，3，5，9，11，10，12
```

执行顺序

- 首先浏览器执行 js 进入第一个宏任务进入主线程, 直接打印 console.log('1')
- 遇到 setTimeout 分发到宏任务 Event Queue 中
- 遇到 process.nextTick 丢到微任务 Event Queue 中
- 遇到 Promise， new Promise 直接执行 输出 console.log('7')
- 执行 then 被分发到微任务 Event Queue 中
- 遇到 setTimeout 分发到宏任务 Event Queue 中
- 第一轮宏任务执行结束，开始执行微任务 打印 6,8
- 第一轮微任务执行完毕，执行第二轮宏事件，执行 setTimeout
- 先执行宏任务主线程，在执行微任务，打印'2,4,3,5'
- 再执行第二个 setTimeout,同理打印 ‘9,11,10,12’

整段代码，共进行了三次事件循环，完整的输出为 1，7，6，8，2，4，3，5，9，11，10，12
