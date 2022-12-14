# this / 箭头函数 / 普通函数

## this 指向问题

> 在讲 this 之前，先得说说 环境 这个概念。一门语言在运行的时候，需要一个环境，叫做宿主环境。对于 JavaScript，宿主环境最常见的是 web 浏览器，另一个最为常见的就是 Node 了，同样作为宿主环境，node 也有自己的 JavaScript 引擎：V8（目前最快 JavaScript 引擎、Google 生产）

## 总结

- `普通函数` 中，`this` 永远指向最后调用他的那个对象
- `箭头函数` 中，`this` 指向是静态的，声明的时候就确定了下来。`定义位置所在作用域`的 `this` 是谁，箭头函数的 `this` 就指向谁
- `构造函数` 中，`this` 指向 `new` 出来的那个新的对象
- `call、apply、bind` 中的 `this` 被强绑定在指定的那个对象上，可以改变 `this` 的指向
- 如果没有调用者则默认指向 `window`，但在严格模式下 ，默认绑定全局对象是不合法的，`this` 被置为`undefined`

![](/img/20200722213136284.png)

## 全局中的 this

在浏览器里，在全局作用域内：

- `this` 等价于 `window` 对象

- 用 `var` 声明一个变量和给 `this` 或者 `window` 添加属性是等价的

- 如果你在声明一个变量的时候没有使用 `var` 或者 `let`，`const`，你就是在给 `全局的this` 添加或者改变属性值

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>

  <script>
    // 'use strict'

    console.log(this === window) //true

    var name = 'Jake'
    console.log(this.name) // "Jake"
    console.log(window.name) // "Jake"

    age = 23 // 没有用 var,let,const 声明，在"use strict"模式下会报错
    function testThis() {
      age = 18
    }
    console.log(this.age) // 23
    testThis()
    console.log(this.age) // 18

    acolor = 'red'
    console.log(this) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
  </script>
</html>
```

##### 结果如下

![](/img/微信截图_20220427112637.png)

> 总结起来就是：在全局作用域内 `this` 是大哥大，它等价于 `window` 对象（即指向 window），如果你声明一些全局变量(不管在任何地方)，这些变量都会作为 `this` 的属性

## 普通函数的 this

- 普通函数的 `this` 与其定义位置无关，谁调用这个函数，`this` 就指向谁
- 如果没有调用者则默认指向 `window`，但在严格模式下 ，默认绑定全局对象是不合法的，`this` 被置为`undefined`

###### 示例 1

```js
var name = 'windowsName'
function sayName() {
  var name = 'sayName'
  console.log(this.name) // windowsName
}
sayName()
```

##### 这里有几个点我们需要特别注意下：

- `var` 声明的变量会挂在全局对象 `window` 上
- `function` 声明的构造函数方法会挂在全局对象 `window` 上
- `function ` 声明的构造函数的优先级高于变量`var`
- 严格模式 `"use strict"` 下默认绑定全局对象是不合法的，`this` 会被置为 `undefined`

我们看最后调用 sayName 的地方 sayName()，前面没有调用的对象那么就是全局对象 window，这就相当于是 window.sayName()。因为 var 声明的变量作用域存在变量提升，相当于是在 window 对象添加了一个属性 name，相当于 `window.name='windowsName'`

!>需要注意的是，对于严格模式来说，默认绑定全局对象是不合法的，this 被置为 undefined。会报错 Uncaught TypeError: Cannot read property 'name' of undefined。

###### 示例 2

```js
var name = 'windowsName'
function sayName() {
  this.name = 'sayName'
  this.say = function () {
    console.log(this.name) // sayName
    console.log(this) // sayName {name: "sayName", say: ƒ}
  }
}
const obj = new sayName()
obj.say()
```

###### 示例 3

```js
function foo() {
  console.log(this.age)
}

const obj1 = {
  age: 23,
  foo: foo,
}

const obj2 = {
  age: 18,
  obj1: obj1,
  foo: foo,
}

obj2.obj1.foo() // 23
obj2.foo() // 18
```

## function 函数 和 var 变量提升优先级问题

function 函数提升优先级高于 var 变量提升，且不会被同名变量声明时覆盖，但是会被同名变量赋值后后覆盖

**案例一**

```js
var a = 4
function fn(){
    console.log(a)
    var 5
}
fn() // undefined
```

上面代码中有两个作用域，windows 全局作用域和 fn 函数作用域。在打印变量 a 时会现在 fn 函数作用域里面找，因为在执行 fn 函数时，在函数内部也会先进行变量提升，所有最终打印结果时 undefined。

**案例二**

```js
function a(){}
var a
console.log(typeof a) // function
```

**案例三**

```js
function a(){}
var a = 1
console.log(typeof a) // number
```

**案例四**

```js
console.log(typeof a) // function
function a(){}
var a = 1
```

## 箭头函数的 this

- 箭头函数的 `this` 跟调用者无关
- 箭头函数的 `this` 指向声明箭头函数时所在作用域的 `this` （箭头函数中的 `this` 一般指向它父级作用域的 `this`）
- `this` 的指向不能通过 `bind，call 和 apply `改变

###### 示例 1（在全局中）

```js
window.objname = 'windowName'
let arrowFunc = () => {
  console.log(this.objname)
}
arrowFunc() // windowName
let obj = {
  name: 'a',
  speak: arrowFunc,
}
obj.speak() // windowName
```

解析：`arrowFunc` 定义所在的作用域是`全局作用域`，而全局的 `this` 指向 `window`，所以无论是直接调用（使用 window 调用）还是用对象 `obj` 调用，最终 `this` 都是 `window`

###### 示例 2 （在对象属性中）

```js
window.name = 'windowName'
let obj1 = {
  name: 'obj1',
  speak1: () => {
    console.log(this.name)
  },
}
let obj2 = {
  name: 'obj2',
  speak2: obj1.speak1,
}
obj1.speak1() // windowName
obj2.speak2() // windowName
```

解析：箭头函数 `speak1` 定义在对象 `obj1` 中，但是对象 `obj1` 的 `this` 指向 `window`。所以无论是 `obj1` 调用还是 `obj2` 调用，最终 `this` 都是指向 `window`

!> 注意：字面量方式定义的对象，内部 `this` 指向 `window`

###### 示例 3（在类中）

## class 类的 this

```js
class Person {
  speak = () => {
    console.log(this.name)
  }
}

let p = new Person()
p.name = 'p'

let s = {
  name: 's',
}

p.speak() // p

s.speak = p.speak
s.speak() // p
```

解析：箭头函数 `speak` 定义在类 `Person` 中，`Person` 的 `this` 指向它的`实例化对象`，即`实例对象 p`。所以无论是使用 `p` 调用还是 `s` 调用，最终 `this` 都指向 `p`

## 普通函数和箭头函数混用的 this

- 普通函数是谁调用 `this`，`this` 就指向谁
- 而箭头函数的 `this` 指向定义所在作用域的 `this`
- 所以如果我们将 `箭头函数定义在普通函数内部`，那 `箭头函数中的this` 将指向 `普通的this`，即`谁调用普通函数就指向谁`

###### 示例 1

```js
window.name = 'windowName'
let demo = {
  name: 'demo',
  speak1: function () {
    console.log(this.name)
  },
  speak2: () => {
    console.log(this.name)
  },
  speak3: function () {
    // 箭头函数定义在普通函数内部
    return (() => {
      console.log(this.name)
    })()
  },
}
demo.speak1() // demo
demo.speak2() // windowName
demo.speak3() // demo
```

###### 示例 2

```js
var a = 200

let obj = {
  a: 100,
  fn: function () {
    // 普通函数谁调用，this指向谁
    console.log(this.a)
  },
  foo: () => {
    // 箭头函数的this指向定义所在作用域的this
    console.log(this.a)
  },
}

obj.fn() // 100
obj.foo() // 200
```

###### 示例 3（认真理解下）

```js
const obj = {
  num: 10,
  hello: function () {
    setTimeout(() => {
      console.log(this) // obj
    })
  },
}
obj.hello()
```

`setTimeout` 里的箭头函数是声明在 `hello` 函数作用域内的 ，因此 `setTimeout` 内箭头函数的 `this` 指向 `hello` 的 `this` ，`hello` 是普通函数，被 `obj` 调用，所以 `hello` 的 `this` 指向 `obj`，因此 `setTimeout` 箭头函数内的 `thi`s 也指向 `obj`

###### 示例 3 （这个例子认真体会下）

```js
var name = 'windowName'

let obj = {
  name: 'obj',
  sayName: function () {
    console.log(this.name)
  },
  func1: function () {
    setTimeout(() => {
      this.sayName()
    }, 100)
  },
  func2: function () {
    setTimeout(function () {
      this.sayName()
    }, 100)
  },
  func3: () => {
    this.sayName()
  },
}
obj.func1() // obj
obj.func2() // Uncaught TypeError: this.sayName is not a function
obj.func3() // Uncaught TypeError: this.sayName is not a function
```

解析 1：重点分析下 `obj.func1()` 这个，可能有点绕，如果说的不对，欢迎指正。

`this.sayName()` 调用在 `setTimeout 内的箭头函数`里，所以这里的 `this` 指向 `func1 的 this`，`func1` 是被 `obj` 调用的，而 `obj` 里定义了 `sayName 普通函数方法`，`sayName` 方法内部 调用了` this.name`，这里的 `this` 指向调用 `sayNme 方法的 this`，由于 `sayName` 是被 `func1` 调用的，也就是指向 `func1 的 this`，而 `func1 的 this` 是指向 `obj` 的，到这里就结束了。也就是最后 `this.name` 调用的相当于就是 `obj.name` ，于是输出 `"obj"`

解析 2：我们来分析下 `obj.func2()` 为什么会报错吧。`this.sayName()` 调用在 `setTimeout` 内的普通函数里 ，所以 `this.sayName()` 相当与 `window.sayName()`，故报错找不到这个 function。

解析 3：我们来分析下 `obj.func3()` 为什么会报错吧。`func3` 是个箭头函数，`func3` 是定义在字面量对象 `obj` 内的，因此 `func3` 内的 `this` 指向 `window`，所以 `this.sayName()` 相当与 `window.sayName()`，故报错找不到这个 function。

## 构造函数中的 this

函数如果用于创建新的对象，称之为对象的构造函数。

- 构造函数的调用会创建一个新的对象，新对象会继承构造函数的属性和方法
- 构造函数中 `this` 关键字没有任何的值，`this` 的值在函数调用实例化对象(new object)时创建
- 所谓 `构造函数`，就是通过 `普通函数` 生成一个新对象（object）
- 当一个函数作为构造器使用时(通过 new 关键字)，它的 `this` 值绑定到新创建的那个对象
- 如果一个函数没使用 `new ` 关键字, 那么他就只是一个普通的函数, `this` 将指向 `window` 对象

###### new 的过程

```js
var a = new Foo("zhang","jake")

new Foo{
    var obj = {}
    obj.__proto__ = Foo.prototype
    var result = Foo.call(obj,"zhang","jake")
    return typeof result === 'obj'? result : obj
}
```

若执行 new Foo()，过程如下：

1. 创建新对象 obj
2. 给新对象的内部属性赋值，构造原型链（将新对象的隐式原型指向其构造函数的显示原型）
3. 执行函数 Foo，执行过程中内部 this 指向新创建的对象 obj（这里使用了 call 改变 this 指向）
4. 如果 Foo 内部显式返回对象类型数据，则返回该数据，执行结束；否则返回新创建的对象 obj

###### 示例

```js
var name = 'Jake'
function testThis() {
  this.name = 'jakezhang'
  this.sayName = function () {
    return this.name
  }
}
console.log(this.name) // Jake

new testThis()
console.log(this.name) // Jake

var result = new testThis()
console.log(result.name) // jakezhang
console.log(result.sayName()) // jakezhang

testThis()
console.log(this.name) // jakezhang
```

很显然，谁被 new 了，this 就指向谁

## class 中的 this

在 es6 中，类，是 JavaScript 应用程序中非常重要的一个部分。类通常包含一个 constructor ， this 可以指向任何新创建的对象。
不过在作为方法时，如果该方法作为普通函数被调用， this 也可以指向任何其他值。与方法一样，类也可能失去对接收器的跟踪

```js
class Hero {
  constructor(heroName) {
    this.heroName = heroName
  }
  dialogue() {
    console.log(`I am ${this.heroName}`)
  }
}
const batman = new Hero('Batman')
batman.dialogue()
```

构造函数里的 this 指向新创建的 类实例。当我们调用 batman.dialogue()时， dialogue()作为方法被调用， batman 是它的接收器。
但是如果我们将 dialogue()方法的引用存储起来，并稍后将其作为函数调用，我们会丢失该方法的接收器，此时 this 参数指向 undefined

```js
const say = batman.dialogue
say()
```

出现错误的原因是 JavaScript 类是隐式的运行在严格模式下的。我们是在没有任何自动绑定的情况下调用 say()函数的。要解决这个问题，我们需要手动使用 bind()将 dialogue()函数与 batman 绑定在一起

```js
const say = batman.dialogue.bind(batman)
say()
```

## 箭头函数其它特性

箭头函数不存在变量提升

#### 箭头函数不能使用 new

不能作为构造函数，不能使用 new

```js
let fun = () => {
  console.log('我是箭头函数')
}
let funobj = new fun() // Uncaught TypeError: fun is not a constructor
```

#### 箭头函数内没有`arguments`，可以用展开运算符`...`解决

```js
// 普通函数使用 arguments
function fun(params) {
  console.log(arguments)
}
fun(1, 2, 4) // [1, 2, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// 箭头函数使用 ... 运算符
let arrowFun2 = (...params) => {
  console.log(params)
}
arrowFun2(1, 2, 4) // [1, 2, 4]

// 箭头函数错误使用 arguments
let arrowFun = params => {
  console.log(arguments)
}
arrowFun(1, 2, 4) // Uncaught ReferenceError: arguments is not defined
```

#### 箭头函数没有原型属性

```js
let fun = () => {
  console.log('我是箭头函数')
}
console.log(fun.prototype) // undefined
```

#### 箭头函数不能修改 this 指向

箭头函数不能通过`call() 、 apply() 、bind()`方法直接修改它的 this 指向。(`call、aaply、bind`会默认忽略第一个参数，但是可以正常传参)

```js
let obj = {
  a: 10,
  b: function (n) {
    let f = n => n + this.a
    return f(n)
  },
  c: function (n) {
    let f = n => n + this.a
    let m = {
      a: 20,
    }
    return f.call(m, n)
  },
}
console.log(obj.b(1)) // 11
console.log(obj.c(1)) // 11
```

## settimeout 回调函数的 this 问题

#### 为什么 settimeout 回调函数是普通函数时，函数内的 this 指向 window

因为 setTimeout 这个方法是挂载到 window 对象上的。setTimeout 执行时，执行回调函数，回调函数中的 this 指向调用 setTimeout 的对象，window

#### 箭头函数



**案例**

```js
var name = 'windowName'

let obj = {
  name: 'obj',
  sayName: function () {
    console.log(this.name)
  },
  func1: function () {
    setTimeout(() => {
      this.sayName()
    }, 100)
  },
  func2: function () {
    setTimeout(function () {
      this.sayName()
    }, 100)
  },
  func3: () => {
    this.sayName()
  },
}
obj.func1() // obj
obj.func2() // Uncaught TypeError: this.sayName is not a function
obj.func3() // Uncaught TypeError: this.sayName is not a function
```



[好文](https://zhuanlan.zhihu.com/p/34368455)
