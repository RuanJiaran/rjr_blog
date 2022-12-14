# reduce 方法

## 用法

`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

| 参数                                      | 描述                                                                                                                                                                                                                                |
| :---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _function(total,currentValue, index,arr)_ | 必需。用于执行每个数组元素的函数。<br /> 函数参数:参数描述<br />_total_ 必需。_初始值_, 或者计算结束后的返回值。<br />*currentValue*必需。当前元素<br />*currentIndex*可选。当前元素的索引<br />*arr*可选。当前元素所属的数组对象。 |
| _initialValue_                            | 可选。传递给函数的初始值                                                                                                                                                                                                            |

## 数组累加

```js
const arr = [3, 5, 9, 5]

/*
	arr.reduce((上次返回的结果,当前循环的 item)=>{
		return 上次结果 + item
	},初始值)
*/
// 对数组进行累加
const sum = arr.reduce((sum, item) => sum + item, 0)
```

## 对象的链式取值

```js
const obj = {
  name: '地区',
  info: {
    address: {
      location: '北京顺义',
    },
  },
}

// 获取 obj 对象 location 属性的值
const local = obj.info.address.location
console.log(local) // 北京顺义

const attrs = ['info', 'address', 'location']

const val = attrs.reduce((newObj, item) => newObj[item], obj)
console.log(val) // 北京顺义
```
