# for...in 和 for...of

## 总结

- for...in 取 key，for...of 取 value
- for...in 可以遍历对象，for...of 不能遍历对象

从[遍历](https://so.csdn.net/so/search?q=遍历&spm=1001.2101.3001.7020)数组角度来说，for···in 遍历出来的是 key(即下标)，for···of 遍历出来的是 value(即数组的值)；

```js
var arr = [99, 88, 66, 77]
for (let i in arr) {
  console.log(i) //0,1,2,3
}
for (let i of arr) {
  consoel.log(i) //99,88,66,77
}
```

从遍历[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)的角度来说，同数组一样

从遍历对象的角度来说，for···in 会遍历出来的为对象的 key，但 for···of 会直接报错。

```js
var obj = { name: 'Bob', age: 25 }
for (var i in obj) {
  console.log(i) // name age
}
for (var i of obj) {
  console.log(i) //报错
}
```

如果要使用 for…of 遍历普通对象，需要配合 Object.keys()一起使用

```js
var person = {
  name: 'coco',
  age: 22,
  locate: {
    country: 'China',
    city: 'beijing',
  },
}
for (var key of Object.keys(person)) {
  //使用Object.keys()方法获取对象key的数组
  console.log(key + ': ' + person[key]) //name: coco,age: 22,locate: [object Object]
}
```
