# null 和 undefined

- undefined 表示缺少值，即此处应该有值，但没有定义
- null 是一个只有一个值的特殊类型，表示一个空对象引用，可能将来要赋值一个对象。
- null 和 undefined 的值相等，但类型不等

```js
console.log(typeof undefined); //"undefined"
console.log(typeof null); //"object"
console.log(null == undefined); //true  因为两者都默认转换成了false
console.log(null === undefined); //false   "==="表示绝对相等，null和undefined类型是不一样的，所以输出“false”
```

## if 语句中如何使用

```js
const obj = { name: 'lisi' };
if (obj.name == null) {
}
// 相当于下面
if (obj.name === null || obj.name === undefined) {
}
```

::: warning
在 if 语句中 null 和 undefined 都会转为 false

除了 == null 之外，其它一律用 ===
:::

## null 用法

- 作为函数的参数，表示该函数的参数不是对象
- 作为对象原型链的终点

## undefined 用法

- 定义了形参，没有传实参，显示 undefined
- 对象属性名不存在时，显示 undefined
- 函数没有写返回值，即没有写 return，拿到的是 undefined
- 写了 return，但没有赋值，拿到的是 undefined
