# bind/call/apply

三者都可以改变函数的 this 对象指向。第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。

## 区别

- `apply` 的所有参数都必须放在一个数组里面传进去
- `call` 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔

- `call` 和 `apply` 只是临时改变一次this指向，并立即执行

- `bind` 的参数和 `call` 一样，但它改变this指向后不会立即执行，而是返回一个永久改变this指向的函数。且参数可以多次传入。

## 什么时候用

```js
const a = {
  b: function () {
    console.log(this.c) //hello
    var func = function () {
      console.log(this.c) //undefined
    }
    func()
  },
  c: 'hello',
}
a.b()
```

大家可以打印看下，这个就是因为**fun()这个函数执行**的时候他的函数上下文为 window，而 a.b()的这个函数的执行的时候函数上下文 this 为 a 对象是什么意思呢？

这里有关于 this 指向的问题的解析那么问题来了当我们希望 func() 他的输出的值就是为 hello 怎么办

方法一：常用方法

```js
const a = {
  b: function () {
    var _this = this // 通过赋值的方式将this赋值给that
    var func = function () {
      console.log(_this.c)
    }
    func()
  },
  c: 'hello',
}
a.b() // hello
console.log(a.c) // hello
```

方法二：绑定 this 的值发生改变

```js
// 使用bind方法一
var a = {
  b: function () {
    var func = function () {
      console.log(this.c)
    }.bind(this)
    func()
  },
  c: 'hello',
}
a.b() // hello
console.log(a.c) // hello
```

## 其它示例

```js
var name = 'lucy'
let obj = {
    name: 'martin',
    say: function () {
        console.log(this.name)
    },
}
obj.say() //martin，this指向obj对象
setTimeout(() => obj.say(), 0) //martin，this指向obj对象
setTimeout(obj.say, 0) //lucy，this指向window对象
```

可以观察到，正常情况下 say 方法中的 this 是指向调用它的 obj 对象的，而最后一个定时器 setTimeout 中的 say 方法中的 this 是指向window对象的(在浏览器中)，这是因为 say 方法在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，但我们需要的是 say 方法中 this 指向obj对象，因此我们需要修改 this 的指向。

## 用法技巧

**示例1**

```js
const arr = [1, 10, 5, 8, 3]
console.log(Math.max.apply(null, arr)) //10
```

其中Math.max函数的参数是以参数列表，如：Math.max(1,10,5,8,3)的形式传入的，因此我们没法直接把数组当做参数，但是apply方法可以将数组参数转换成列表参数传入，从而直接求数组的最大值。

## call/bind/apply 传参对比

```js
const arr=[1,10,5,8,3];
// apply
console.log(Math.max.apply(null, arr)); //10

// call
console.log(Math.max.call(null,arr[0],arr[1],arr[2],arr[3],arr[4])); //10

//bind
const max=Math.max.bind(null,arr[0],arr[1],arr[2],arr[3])
console.log(max(arr[4])); //12，分两次传参
console.log(max(20,22)); // 22
```

从上面可以看出:

- `call` 、`bind` 、 `apply` 这三个函数的第一个参数都是 this 的指向对象

- `apply` 的所有参数都必须放在一个数组里面传进去

- `call` 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔

- `call` 和 `apply` 只是临时改变一次this指向，并立即执行

- `bind` 的参数和 `call` 一样，但它改变this指向后不会立即执行，而是返回一个永久改变this指向的函数。且参数可以多次传入。
