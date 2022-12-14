# null 和 undefined

## 相同点

在 if 语句中 null 和 undefined 都会转为 false 两者用相等[运算符](https://so.csdn.net/so/search?q=运算符&spm=1001.2101.3001.7020)比较也是相等

```js
console.log(null == undefined) //true  因为两者都默认转换成了false
console.log(typeof undefined) //"undefined"
console.log(typeof null) //"object"
console.log(null === undefined) //false   "==="表示绝对相等，null和undefined类型是不一样的，所以输出“false”
```

## null

> null 表示没有对象，可能将来要赋值一个对象，即该处不应该有值

- 作为函数的参数，表示该函数的参数不是对象

- 作为对象原型链的终点

## undefined

> undefined 表示缺少值，即此处应该有值，但没有定义

- 定义了形参，没有传实参，显示 undefined
- 对象属性名不存在时，显示 undefined
- 函数没有写返回值，即没有写 return，拿到的是 undefined
- 写了 return，但没有赋值，拿到的是 undefined
