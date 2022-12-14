# 数据类型

## 数据类型有哪些

- 值类型（基本类型） ：`String`，`Number`，`Boolean`，`Undefined`，`Null`，`Symbol（ES6新增）`， `BigInt（ES10新增）`
- 引用类型（对象类型）：`Object`，`Array`， `Function`，`Date`，`RegExp`

## 堆栈概念

####  栈(stack)

由操作系统自动分配内存空间，自动释放，存储的是基础变量以及一些对象的引用变量，占据固定大小的空间。

#### 堆(heap)

由操作系统动态分配的内存，大小不定也不会自动释放，一般由程序员分配释放，也可由垃圾回收机制回收。

## 堆栈存储

#### 栈存储（值类型）

- String
- Number
- Boolean
- Undefined
- Null
- Symbol

以上数据类型存储在栈（stack）中，占据空间小、大小固定。

###### 示例

```js
const a = 100
const b = 100
a = 200
```

![](/img/20201023101209172.png)

#### 堆存储（引用类型）

- Object
- Array 
- Function
- Date
- RegExp

以上数据类型同时存储在栈（stack）和堆（heap）中，占据空间大、大小不固定。

在栈中存储指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

###### 示例

```js
const a = { age: 20 }
const b = a
b.age = 21
```

![](/img/20201023101838307.png)


::: warning 注意
由于引用类型的变量只存指针，而对象本身存储在堆中 。因此，当把一个对象赋值给多个变量时，就相当于把同一个对象地址赋值给了每个变量指针 。这样，每个变量都指向了同一个对象，当通过一个变量修改对象，其他变量也会同步更新。因此产生了`浅拷贝`，`深拷贝`
:::

## 检测数据类型

#### typeof
可以使用 typeof 操作符来检测变量的数据类型。
```js
// 基本类型（值类型）
const a					typeof a  // 'undefined'
const str = 'abc'		typeof str// 'string'
const n = 100			typeof n  // 'number'
const b = true			typeof b  // 'boolean'
const s = Symbol('s')   typeof s  // 'symbol'
typeof undefined 				  // 'undefined'

// 引用类型
typeof null 		// 'object'
typeof function(){} //'function'
typeof {} 			// 'object'
typeof [1,2] 		// 'object'
```
#### constructor

**constructor** 属性返回所有 JavaScript 变量的构造函数。

```js
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
function () {}.constructor         // 返回函数 Function(){ [native code] }
```

使用 constructor 判断数据类型

```js
// 判断数组
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

// 判断日期
function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}
```

#### undefined 和 null 的区别

undefined 是一个没有设置值的变量，null是一个只有一个值的特殊类型。表示一个空对象引用。

null 和 undefined 的值相等，但类型不等

```js
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true
```

::: warning
typeof 能有效检测基本类型，检测引用类型都返回 object。其中 null 属于特殊的引用类型返回 object,function 属于特殊引用类型类型不用于存储数据，typeof 检测返回 function
:::

## 变量计算/类型转换

#### 字符串拼接

```js
const a = 100 + 200 // 200
const b = 100 + '200' // '100200'
const c = true + '100' // 'true100'
```
::: warning 结论
+运算中有字符串，结果就是字符串拼接
:::

#### ==与===

```js
0 == '' // true
0 == false // true
false == '' // true
true == 1   // true
true == '1' // true
null == undefined // true

null === undefined // false
[123] == [123] // false  内存地址不一样
[123] === [123]// false  内存地址不一样
```

除了 == null 之外，其它一律用 ===

```js
const obj = { name: 'lisi' }
if (obj.name == null) {
}
// 相当于下面
if (obj.name === null || obj.name === undefined) {
}
```
::: info
`===`三等表示全等，判断左右两边对象或值是**否类型相同**且**值相等**
`==`二等表示值相等。
:::

::: warning
所有基本类型中 Boolean 值是 false 的只有 6 个，分别是 : `0` `NaN` `' '` `null` `undefined` `false`
引用类型 Boolean 值全是 true
:::
