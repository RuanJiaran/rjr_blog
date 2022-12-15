# 数据类型检测

## 总结

- null 用`===null` 检测
- 引用数据类型 Function 可以同时用 `typeof` 和 `instanceof` 检测
- 基本数据类型：Number，String，Boolean，Symbol，BigInt，undefined 用 `typeof` 检测
- 引用数据类型：Array，Object，Date，RegExp 用 `instanceof `检测
- 所有类型都可以用 constructor 属性和 toString() 方法来检测

## isArray 判断是否为数组

```js
Array.isArray([]); //true
Array.isArray(new Array()); //true
```

## typeof

```js
console.log(
  typeof 100, //"number"
  typeof 'abc', //"string"
  typeof false, //"boolean"
  typeof undefined, //"undefined"
  typeof Symbol('s'), //"symbol"
  typeof BigInt(100), //"bigInt"
  typeof function () {
    console.log('aaa');
  }, //"function"

  typeof null, //"object"
  typeof [1, 2, 3], //"object"
  typeof { a: 1, b: 2, c: 3 }, //"object"
  typeof new Date(), //"object"
  typeof /^[a-zA-Z]{5,20}$/, //"object"
  typeof new Error(), //"object"

  typeof new Number(100), //"object"
  typeof new String('abc'), //"object"
  typeof new Boolean(true) //"object"
);
```

::: warning 注意
typeof 能有效检测基本数据类型

基本数据类型中：null，及所有引用数据类型（除了 Function）不可以用 typeof 检测。都会返回小写的 object

null 属于特殊的引用类型返回 object,function 属于特殊引用类型类型不用于存储数据

用 typeof 检测构造函数创建的 Number，String，Boolean，及其它数据类型都会返回 object
:::

## instanceof

instanceof 运算符需要指定一个构造函数，或者说指定一个特定的类型，它用来判断这个构造函数的原型是否在给定对象的原型链上

```js
console.log(
  100 instanceof Number, //false
  'dsfsf' instanceof String, //false
  false instanceof Boolean, //false

  undefined instanceof Object, //false
  null instanceof Object, //false

  [1, 2, 3] instanceof Array, //true
  { a: 1, b: 2, c: 3 } instanceof Object, //true
  function () {
    console.log('aaa');
  } instanceof Function, //true
  new Date() instanceof Date, //true
  /^[a-zA-Z]{5,20}$/ instanceof RegExp, //true
  new Error() instanceof Error //true
);
```

::: danger 注意
null 和 undefined 都返回了 false，这是因为它们的类型就是自己本身，并不是 Object 创建出来它们，所以返回了 false
:::

::: info
基本数据类型中：Number，String，Boolean。字面量值不可以用 instanceof 检测，但是构造函数创建的值可以，如下：
:::

```js
console.log(
  new Number(100) instanceof Number, //true
  new String('dsfsf') instanceof String, //true
  new Boolean(false) instanceof Boolean //true
);
```

## constructor

constructor 属性返回所有 JavaScript 变量的构造函数。

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
  return myArray.constructor.toString().indexOf('Array') > -1;
}

// 判断日期
function isDate(myDate) {
  return myDate.constructor.toString().indexOf('Date') > -1;
}
```

## toString()

toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为[object Xxx] ，其中 Xxx 就是对象的类型。所以利用 Object.prototype.toString()方法可以对变量的类型进行比较准确的判断。

该类型针对不同不同变量的类型返回的结果如下所示：
![20211110100422920](/img/20211110100422920.jpg)
