# 数据类型

## 数据类型有哪些

- 值类型（基本类型） ：`String`，`Number`，`Boolean`，`Undefined`，`Null`，`Symbol（ES6新增）`， `BigInt（ES10新增）`
- 引用类型（对象类型）：`Object`，`Array`， `Function`，`Date`，`RegExp`

## 堆栈存储

#### 值类型栈存储

主要针对（Number、String、Boolean）三种数据。直接存储在栈（stack）中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储

###### 示例

```js
const a = 100
const b = 100
a = 200
```

![](/img/20201023101209172.png)

#### 引用类型堆栈存储

主要针对 Object、Array 这两种引用数据以及 null， 同时存储在栈（stack）和堆（heap）中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

###### 示例

```js
const a = { age: 20 }
const b = a
b.age = 21
```

![](/img/20201023101838307.png)

#### 备注：

!>由于引用类型的变量只存指针，而对象本身存储在堆中 。因此，当把一个对象赋值给多个变量时，就相当于把同一个对象地址赋值给了每个变量指针 。这样，每个变量都指向了同一个对象，当通过一个变量修改对象，其他变量也会同步更新。因此产生了`浅拷贝`，`深拷贝`

## typeof 检测数据类型

```js
// 基本类型（值类型）
const a					typeof a  // 'undefined'
const str = 'abc'		typeof str// 'string'
const n = 100			typeof n  // 'number'
const b = true			typeof b  // 'boolean'
const s = Symbol('s')   typeof s  // 'symbol'

// 引用类型
typeof null 		// 'object'
typeof function(){} //'function'
typeof {} 			// 'object'
typeof [1,2] 		// 'object'
```

!>typeof 能有效检测基本类型，检测引用类型都返回 object,其中 null 属于特殊的引用类型返回 object,function 属于特殊引用类型类型不用于存储数据，typeof 检测返回 function

## 变量计算/类型转换

#### 字符串拼接

```js
const a = 100 + 200 // 200
const b = 100 + '200' // '100200'
const c = true + '100' // 'true100'
```

> 结论：+运算中有字符串，结果就是字符串拼接

#### ==与===

```js
0 == '' // true
0 == false // true
false == '' // true
null == undefined // true
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

> `===`三等表示全等，判断左右两边对象或值是**否类型相同**且**值相等**
>
> `==`二等表示值相等。判断操作符两边对象或值是否相等类型可以不同，类型不同时，使用 Number()转换成 Number 类型在进行判断。例外规则,null==undefined，null/undefined 进行运算时不进行隐式类型转换。通常把值转为 Boolean 值，进行条件判断。Boolean(null)===Boolean(undefined) >> false===false 结果为 true

!>所有基本类型中 Boolean 值是 false 的只有 6 个，分别是 : `0 NaN ' ' null undefined false`
引用类型 Boolean 值全是 true
