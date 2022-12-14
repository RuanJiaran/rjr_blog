# 数组扁平化处理

## 什么是数组扁平化？

数组扁平化就是将一个[多维数组](https://so.csdn.net/so/search?q=多维数组&spm=1001.2101.3001.7020)转换为一个一维数组

## 实现基本方式

1、对数组的每一项进行[遍历](https://so.csdn.net/so/search?q=遍历&spm=1001.2101.3001.7020)。

2、判断该项是否是数组。

3、如果该项不是数组则将其直接放进新数组。

4、是数组则回到 1，继续迭代。

5、当数组遍历完成，返回这个新数组。

## 方法一、递归处理

```js
Array.prototype.flatten = function () {
  var resultArr = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    if (Array.isArray(this[i])) {
      resultArr = resultArr.concat(this[i].flatten())
    } else {
      resultArr.push(this[i])
    }
  }
  return resultArr
}
var arr = [1, 2, 3, [4, 5, 'hello', ['world', 9, 666]]]
console.log(arr.flatten()) //[1, 2, 3, 4, 5, "hello", "world", 9, 666]
```

## 方法二、使用 reduce 方法

```js
Array.prototype.flatten = function () {
  return this.reduce(function (prev, cur, curIndex, arr) {
    return Array.isArray(cur) ? prev.concat(cur.flatten()) : prev.concat(cur)
  }, [])
}
```

## 方法三、yield\*的用法（天才级别的扁平化方式）

```js
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree(tree[i])
    }
  } else {
    yield tree
  }
}
let arr1 = [1, 2, ['a', 'b', ['中', '文', [1, 2, 3, [11, 21, 31]]]], 3]
let list = []
for (const x of iterTree(arr1)) {
  list.push(x)
}
console.log(list) //[1, 2, "a", "b", "中", "文", 1, 2, 3, 11, 21, 31, 3]
```

## 方法四、es6 中的 flat 函数也可以实现数组的扁平化

```js
let arr1 = [1, 2, ['a', 'b', ['中', '文', [1, 2, 3, [11, 21, 31]]]], 3]
console.log(arr1.flat(Infinity))
```

## 方法五、扩展运算符

```js
//ES6 增加了扩展运算符，用于取出参数对象的所有可遍历属性，拷贝到当前对象之中：

var arr = [1, [2, [3, 4]]]
console.log([].concat(...arr)) // [1, 2, [3, 4]]
//我们用这种方法只可以扁平一层，但是顺着这个方法一直思考，我们可以写出这样的方法：

// 改进
var arr = [1, [2, [3, 4]]]

function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}

console.log(flatten(arr))
```
