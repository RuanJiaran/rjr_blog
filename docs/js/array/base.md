# 数组方法

## push()

可以接受一个或者多个参数，将参数追加到数组的尾部，返回添加后的数组的长度，原数组会发生改变。

## unshift()

可以接受一个或者多个参数，将参数放到数组的头部，返回添加后的数组的长度，原数组会发生改变。

## pop()

从数组尾部删除一个元素，返回这个被删除的元素，原数组发生改变。

## shift()

从数组头部删除一个元素，返回这个被删除的元素，原数组发生改变。

## slice()

截取类 如果不传参数，会返回原数组；如果一个参数，从该参数表示的索引开始截取，直至数组结束，返回这个截取数组，原数组不变；两个参数，从第一个参数对应的索引开始截取，到第二个参数对应的索引结束，但不包括第二个参数对应的索引上值，原数组不改变；最多接受两个参数。

## splice()

截取类 没有参数，返回空数组，原数组不变；一个参数，从该参数表示的索引位开始截取，直至数组结束，返回截取的 数组，原数组改变；两个参数，第一个参数表示开始截取的索引位，第二个参数表示截取的长度，返回截取的 数组，原数组改变；三个或者更多参数，第三个及以后的参数表示要从截取位插入的值。

## reverse()

不接受参数，数组翻转。

## sort()

排序

```js
arr.sort(function (a, b) {
  return a - b //从小到大排序
  return b - a //从大到小排序
})
```

## join()

参数来拼接；分隔符。

## concat()

连接两个或多个数组，原数组不变，返回被连接数组的一个副本

## isArray()

判断是否是数组

## toString()

数组转字符串

## indexOf() `es5`

从前往后遍历，返回 item 在数组中的索引位，如果没有返回-1；通常用来判断数组中有没有某个元素。可以接收两个参数，第一个参数是要查找的项，第二个参数是查找起点位置的索引

## lastIndexOf() `es5`

与 indexOf 一样，区别是从后往前找

## [forEach()](https://www.runoob.com/jsref/jsref-foreach.html) `es5`

forEach 方法与 map 方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach 方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用 map 方法，否则使用 forEach 方法；forEach 的用法与 map 方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。

## [map()](https://www.runoob.com/jsref/jsref-map.html) `es5`

将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回；map 方法接受一个函数作为参数。该函数调用时，map 方法向它传入三个参数：当前成员、当前位置和数组本身。

## [filter()](https://www.runoob.com/jsref/jsref-filter.html) `es5`

用于过滤数组成员，满足条件的成员组成一个新数组返回；它的参数是一个函数，所有数组成员依次执行该函数，返回结果为 true 的成员组成一个新数组返回。该方法不会改变原数组；可以接受三个参数：当前成员，当前位置和整个数组。

## [some()](https://www.runoob.com/jsref/jsref-some.html) `es5`

该方法对数组中的每一项运行给定函数，如果该函数对任何一项返回 true，则返回 true。（some 方法会在数组中任一项执行函数返回 true 之后，不在进行循环。）

## [every()](https://www.runoob.com/jsref/jsref-every.html) `es5`

该方法对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。

## [reduce()](https://www.runoob.com/jsref/jsref-reduce.html) `es5`

依次处理数组的每个成员，最终累计为一个值。reduce 是从左到右处理（从第一个成员到最后一个成员）

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

## reduceRight() `es5`

同 reduce 一样，只是从右往左处理

## [Array.from()](https://www.runoob.com/jsref/jsref-from.html) `es6`

用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组

## Array.of() `es6`

将一组值转变为数组

```js
let arr = Array.of('你好', 'hello')
console.log(arr) //["你好", "hello"]
```

## [find()](https://www.runoob.com/jsref/jsref-find.html) `es6`

用于找出第一个符合条件的数组成员。参数是个回调函数，所有数组成员依次执行该回调函数，直到找到第一个返回值为 true 的成员，然后返回该成员。如果没有符合条件的成员，就返回 undefined；可以接收 3 个参数，依次为当前值、当前位置、原数组。

## [findIndex()](https://www.runoob.com/jsref/jsref-findindex.html) `es6`

用于找出第一个符合条件的数组成员的位置。参数是个回调函数，所有数组成员依次执行该回调函数，直到找到第一个返回值为 true 的成员，然后返回该成员。如果没有符合条件的成员，就返回 undefined；可以接收 3 个参数，依次为当前值、当前位置、原数组。

## [fill()](https://www.runoob.com/jsref/jsref-fill.html) `es6`

用于将一个固定值替换数组的元素

```js
array.fill(value, start, end)
```

## [entries()](https://www.runoob.com/jsref/jsref-entries.html) `es6`

返回一个对键值对 (key/value)遍历的遍历器对象。迭代对象中数组的索引值作为 key， 数组元素作为 value

## values() `es6`

返回一个对键遍历的遍历器对象

## keys() `es6`

返回一个对键值遍历的遍历器对象

## [copyWithin()](https://www.runoob.com/jsref/jsref-copywithin.html) `es6`

从数组的指定位置拷贝元素到数组的另一个指定位置中

```js
array.copyWithin(target, start, end)
```

## [includes()](https://www.runoob.com/jsref/jsref-includes.html) `es7`

判断某个数组是否包含给定的值，如果包含则返回 true，否则返回 false。可以接收两个参数：要搜索的值和搜索的开始索引。当第二个参数被传入时，该方法会从索引处开始往后搜索（默认索引值为 0）。若搜索值在数组中存在则返回 true，否则返回 false。
