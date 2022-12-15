# 深浅拷贝

深拷贝和浅拷贝是只针对 Object 和 Array 这样的引用数据类型的。

## 对象赋值

当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。

## 浅拷贝

浅拷贝是按位拷贝对象，它会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址（引用类型），拷贝的就是内存地址。

#### 浅拷贝方法

##### Object.assign()

- `Object.assign()` 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。`Object.assign()` 拷贝的是对象的属性的引用，而不是对象本身。

```js
const obj = { base: { name: 'Jack' } };

const obj2 = Object.assign({}, obj); // 浅拷贝

obj2.base.name = 'Tom';

console.log(obj.base.name, obj2.base.name); //Tom Tom
```

##### slice()

```js
let arr = [1, 3, { name: 'kobe' }];
let arrcopy = arr.slice();
arrcopy[2].name = 'copy';

console.log(arr[2].name); // copy
```

##### concat()

```js
let arr = [1, 3, { name: 'kobe' }];
let arrcopy = arr.concat();
arrcopy[2].name = 'copy';

console.log(arr[2].name); // copy
```

##### for ... in

```js
function copy(obj) {
  const newObj = {};
  for (const key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}
```

#### Object.keys()

```js
function cloneObj(obj) {
  let clone = {};
  for (let i of Object.keys(obj)) {
    clone[i] = obj[i];
  }
  return clone;
}
```

##### Object.entries()

```js
function cloneObj(obj) {
  let clone = {};
  for (let [key, value] of Object.entries(obj)) {
    clone[key] = value;
  }
  return clone;
}
```

## 深拷贝

深拷贝是拷贝后两个对象不仅地址不相等，两个对象的所有属性地址都不相等。新对象和原对象不共享内存，修改新对象不会改变原对象。

#### JSON 转换

```js
let newObj = JSON.parse(JSON.stringify(obj));
```

缺点：

- 如果对象有函数，函数无法被拷贝下来
- 无法拷贝对象原型链上的属性和方法
- 当数据的层次很深，会栈溢出

#### 递归实现

```js
/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    // obj 是 null ，或者不是对象和数组，直接返回
    return obj;
  }

  // 初始化返回结果
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    // 保证 key 是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用！！！
      result[key] = deepClone(obj[key]);
    }
  }

  // 返回结果
  return result;
}
```

缺点：

- 无法保存引用
- 当数据层次很深，会栈溢出

#### lodash 库

使用 [lodash](https://www.lodashjs.com/docs/lodash.cloneDeep#_clonedeepvalue) 库提供的 cloneDeep 实现深拷贝
