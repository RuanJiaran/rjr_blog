# 闭包

## 闭包的定义

闭包是指可以访问另一个函数作用域中变量的函数，可以简单理解为 `定义在一个函数内部的函数`

```js
// 这就是一个闭包，变量 a 保存被保存在 foo 函数内，并且 bar 函数可以访问变量 a
function foo() {
  const a = 2
  function bar() {
    console.log(a)
  }
  bar()
}
foo()
```

## 闭包的优点

- 可以重复使用变量，并且不会造成变量污染
- 变量长期驻扎在[内存](https://so.csdn.net/so/search?q=内存&spm=1001.2101.3001.7020)中

## 闭包的两种表现形式

- 函数作为返回值被返回

- 函数作为参数被传递

```js
// 函数作为返回值被返回
function create() {
  const a = 100
  return function () {
    console.log(a)
  }
}
const fn = create()
const a = 200
fn() // 100

// 函数作为参数被传递
function print(fn) {
  const a = 200
  fn()
}
const a = 100
function fn() {
  console.log(a)
}
print(fn) // 100
```

> 函数中的自由变量，取决于函数定义的地方，跟执行的地方没关系

## 闭包的应用场景

- 函数作为参数被传递
- 函数作为返回值被返回
- 隐藏数据
- 函数防抖、函数节流
- 单例模式

## 用个经典案例理解下闭包

```js
function fn() {
  const num = 3
  return function () {
    const n = 0
    console.log(++n)
    console.log(++num)
  }
}
const fn1 = fn()
fn1() // 1 4
fn1() // 1 5
```

一般情况下，在函数 `fn` 执行完后，就应该连同它里面的变量一同被销毁。但是在这个例子中，匿名函数作为 `fn` 的返回值被赋值给了 `fn1` ，这时候相当于`fn1 = function(){var n = 0 … }`，并且匿名函数内部引用着 `fn` 里的变量 `num`，所以变量 `num` 无法被销毁，而变量 `n` 是每次被调用时新创建的，所以每次 `fn1` 执行完后它就把属于自己的变量连同自己一起销毁，于是乎最后就剩下孤零零的 `num`，于是这里就产生了内存消耗的问题

## 闭包有什么用处

首先来看一个例子，我们来实现一个计数器

```js
let counter = 0

function add() {
  return (counter += 1)
}

add()
add()
add() // 计数器现在为 3
console.log(counter) // 3
```

现在我们已经达到了目的，可是问题来了，代码中的任何一个函数都可以随意改变 counter 的值，所以这个计数器并不完美。那我们把 counter 放在 add 函数里面不就好了么？

```js
function add() {
  let counter = 0
  counter++
  console.log(counter)
  return counter
}
add()
add()
add() // 本想输出 3, 但输出的是 1
```

所以这样做的话，每次调用 add 函数，counter 的值都要被初始化为 0，还是达不到我们的目的。

#### 如何使用闭包

这时候我们就可以用闭包来解决这个问题了，先看代码。

```js
const add = (function () {
  let counter = 0
  return function () {
    counter++
    console.log(counter)
    return counter
  }
})()
add()
add()
add() // 计数器现在为 3
```

这时候我们完美实现了计数器。这段非常精简，可以拆分成如下等价代码。

```js
function outAdd() {
  let counter = 0
  function innerAdd() {
    counter++
    console.log(counter)
    return counter
  }
  return innerAdd
}

const add = outAdd()
add()
add()
add() // 计数器现在为 3
```

这时候的 add 就形成了一个闭包。一个闭包由两部分组成，函数和创建该函数的环境。环境是由环境中的局部变量组成的。对于闭包 add 来说，它由函数 innerAdd 和变量 counter 组成，所以这时候 add 是可以访问变量 counter 的。

## 使用闭包应注意的问题

由于闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。因此可以手动解除对匿名函数的引用，以便释放内存。

```js
function fn() {
  let num = 0

  const add = function () {
    num++
  }

  return function () {
    return {
      num: num,
      add: add,
    }
  }
}

//retFn 就是创建了一个匿名函数
let retFn = fn()

//调用函数
console.log(retFn())
retFn().add()
console.log(retFn())

//解除对匿名函数的引用，以便释放内存
retFn = null
```

## 闭包的几个示例

###### 示例 1

```js
for (var i = 0; i < 5; i++) {
  ;(function (i) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  })(i)
}
// 0 1 2 3 4
```

###### 示例 2

```js
const num = 15
const fn1 = function (x) {
  if (x > num) {
    console.log(x)
  }
}
void (function (fn) {
  const num = 100
  fn(30)
})(fn1)
// 30
```

###### 示例 3

```js
var name = 'The Window'

const object = {
  name: 'My Object',
  getNameFunc: function () {
    return function () {
      return this.name
    }
  },
}

alert(object.getNameFunc()()) // The Window
```

函数中的自由变量，取决于函数定义的地方，跟执行的地方没关系。匿名函数没有直接调用者 this 指向 window，但是如果是在严格模式下 this 为 undefined，会报错 `Uncaught TypeError: Cannot read property 'name' of undefined`

###### 示例 4

```js
var name = 'The Window'

const object = {
  name: 'My Object',
  getNameFunc: function () {
    const that = this
    return function () {
      return that.name
    }
  },
}

alert(object.getNameFunc()()) // My Object
```

## 闭包好文

[深入理解闭包](https://zhuanlan.zhihu.com/p/22486908)

[闭包的定义](https://m.php.cn/article/408137.html)
