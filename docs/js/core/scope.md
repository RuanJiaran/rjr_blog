# 变量作用域

## 作用域定义

> 变量作用域：就是一个变量可以使用的范围

## 作用域种类

- 全局作用域
- 局部作用域 （函数作用域，块级作用域）
- 块级作用域（ES6 新增）大括号，比如：if{},for(){},while(){}… es6 作用域,只适用于 const,let

!>全局变量拥有全局作用域，局部变量拥有局部作用域，全局变量是 `window` 对象，所有变量都属于 `window` 对象

## 变量生命周期

- 全局变量在页面关闭后销毁
- 局部变量在函数执行完毕后销毁

## 全局变量

- 定义在函数外的变量
- 在函数内没有声明的变量，严格模式下，变量必须声明，不推荐这种全局变量定义方式，作为了解

如果变量在函数内没有声明（没有使用 `var，let，const` 关键字），该变量为全局变量

```js
function myFunction() {
  carName = 'Volvo'
  console.log(carName) //	Volvo
}

console.log(carName) // Volvo
```

在严格模式 `use strict` 下，变量必须声明，变量没声明就调用会报错

```js
'use strict'
function myFunction() {
  carName = 'Volvo'
  console.log(carName) //	Uncaught ReferenceError: carName is not defined
}

console.log(carName) // Uncaught ReferenceError: carName is not defined
```

## 自由变量

> 当前作用域没有定义的变量

- 一个变量在当前作用域没有定义，但被使用了
- 向上级作用域，一层一层依次寻找，直到找到为止
- 如果到全局作用域都没找到，则报错 xx is not defined

###### 示例

```js
const a = 100
function f1() {
  const b = 200
  function f2() {
    const c = 300
    console.log(a) // a 是自由变量
    console.log(b) // b 是自由变量
    console.log(c)
  }
  f2()
}
f1()
```

## 作用域链

> 自由变量的向上级作用域一层一层查找，直到找到为止，最高找到全局作用域，就形成了作用域链。

## 变量提升（预解析）

- `var` 声明的变量会存在变量提升，只有声明的变量会提升，初始化的值不会提升
- `function` 声明的函数存在变量提升
- `function` 函数的优先级高于变量 `var`
- `let， const` 不会变量提升

###### 示例 1

javascript 中声明并定义一个变量时，会把声明提前，以下会先打印出 undefined，再打印出 10

```js
console.log(a)
var a = 10
console.log(a)

// 相当于下面

var a
console.log(a)；//undefined
a = 10
console.log(a) //10
```

###### 示例 2

函数声明也是，以下函数相当于把整个 `fn` 提到作用域的最上面，所以调用 `fn` 时会正常打印 jack

```js
fn('jack')；//jack
function fn (name){
	console.log(name)
}
```

注意：函数表达式不行，以下是一个函数表达式，JavaScript 会把 var fn 提到作用域最上面，没有吧函数提上去，所以会报错

```js
fn('jack') //报错
var fn = function (name) {
  console.log(name)
}
```

#### 经典示例

```js
var x = 30
function test() {
  alert(x)
  var x = 10
  alert(x)
  x = 20
  function x() {}
  alert(x)
}
test()
```

分析：

test 是函数，每个函数作用域也首先要进行预解析，var,function 声明的变量或者函数首先变量提升，但是函数的优先级高于变量，所以`预解析池`最终结果为`function x(){}`

第一个`alert(x)`中的 x 向上查找，直至找到预解析池，`function x(){}`, 弹出 `function x(){}`

第二个`alert(x)`中的 x 向上查找，找到 var x=10;, 弹出 10；

第三个`alert(x)`中的 x 向上查找，找到 x=10;, 弹出 20；



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

## 
