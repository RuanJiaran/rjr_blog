# 深浅拷贝

#### 浅拷贝

只拷贝一层。浅拷贝是拷贝后两个对象地址不相等，但两个对象的部分属性地址相等，新对象并没有拷贝所有的属性，而是复用原对象中的值。

- `Object.assign()` 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。`Object.assign()` 拷贝的是对象的属性的引用，而不是对象本身。

```js
const obj = { base: { name: 'Jack' } }

const obj2 = Object.assign({}, obj) // 浅拷贝

obj2.base.name = 'Tom'

console.log(obj.base.name, obj2.base.name) //Tom Tom
```

- for ... in

```js
function copy(obj) {
  const newObj = {}
  for (const key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}
```

- Object.keys()

```js
function cloneObj(obj) {
  let clone = {}
  for (let i of Object.keys(obj)) {
    clone[i] = obj[i]
  }
  return clone
}
```

- Object.entries()

```js
function cloneObj(obj) {
  let clone = {}
  for (let [key, value] of Object.entries(obj)) {
    clone[key] = value
  }
  return clone
}
```

#### 深拷贝

深拷贝是拷贝后两个对象不仅地址不相等，两个对象的所有属性地址都不相等。新对象和原对象不共享内存，修改新对象不会改变原对象。

**JSON 转换**

```js
let newObj = JSON.parse(JSON.stringify(obj))
```

缺点：

- 如果对象有函数，函数无法被拷贝下来
- 无法拷贝对象原型链上的属性和方法
- 当数据的层次很深，会栈溢出

**递归**

```js
/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    // obj 是 null ，或者不是对象和数组，直接返回
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证 key 是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用！！！
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result
}
```

缺点：

- 无法保存引用
- 当数据层次很深，会栈溢出
