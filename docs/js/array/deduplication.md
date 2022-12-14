# 数组去重

## 方法一、set

使用 ES6 中的 set 是最简单的去重方法。该方法可以说是最完美的方法，就是需要环境支持 ES6

```js
const arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
]

function arr_unique(arr) {
  return [...new Set(arr)]
  //或者
  //return  Array.from(new Set(arr))
}
arr_unique(arr) // (13)[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

## 方法二、Map 数据结构去重

创建一个空 Map 数据结构，遍历需要去重的数组，把数组的每一个元素作为 key 存到 Map 中。由于 Map 中不会出现相同的 key 值，所以最终得到的就是去重后的结果。

```js
const arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
]
function arr_unique(arr) {
  let map = new Map()
  let array = new Array() // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      // 如果有该key值
      map.set(arr[i], true)
    } else {
      map.set(arr[i], false) // 如果没有该key值
      array.push(arr[i])
    }
  }
  return array
}

console.log(arr_unique(arr)) //(13) [1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined
```
