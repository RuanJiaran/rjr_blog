# sum(1,2) 和 sum(1)(2)

写一个 `sum` 函数使 `sum(1,2)` 和 `sum(1)(2)`  都返回 3

```js
function sum(...args) {
    let result = args.reduce((total, item) => total + item, 0)

    if (args.length > 1) return result

    return function (...args) {
        return args.reduce((total, item) => total + item, result)
    }
}

console.log(sum(1, 2))  // 3
console.log(sum(1)(2))	// 3
console.log(sum(1)(2,3))// 6
```

#### 扩展

写一个 `sum` 函数使 `sum(1,2,3)` ， `sum(1)(2,3)` 和  `sum(1)(2)(3)`   都返回 6