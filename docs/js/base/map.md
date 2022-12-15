# map() 和 forEach()

:::warning 主要不同
forEach() 方法不会返回执行结果，而是返回 undefined。map() 方法会分配内存空间存储新数组，并返回新数组。

forEach 遍历通常都是直接引入当前遍历数组的内存地址，生成的数组的值发生变化，当前遍历的数组对应的值也会发生变化。map 遍历后的数组通常都是生成一个新的数组，新的数组的值发生变化，当前遍历的数组值不会变化。
:::

:::info 其它特点
匿名函数中的 this 都是指向 window

都只能遍历数组，map 的速度大于 forEach

每次执行匿名函数都支持三个参数，参数分别为 item(当前每一项)，index(索引值)，arr(原数组)
:::

## map() 结合 filter() 组合使用

```js
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((num) => num * 2).filter((num) => num > 5);
// arr2 = [6, 8, 10]
```

## map() 和 forEach() 正确用法

> forEach 遍历通常都是直接引入当前遍历数组的内存地址，生成的数组的值发生变化，当前遍历的数组对应的值也会发生变化。map 遍历后的数组通常都是生成一个新的数组，新的数组的值发生变化，当前遍历的数组值不会变化。
> **_对于这一点可能存在疑惑，没关系，通过下面案例可以让你豁然开朗。_**

这里我为什么都说遍历后通常是引入当前遍历数组的内存地址和生成一个新的数组，因为按 forEach 和 map 创作思想，forEach 遍历基本引入遍历数组内存地址、map 遍历而是生成一个新的数组，**_但是有些人写的时候不按 map 和 forEach 的常规语法来，导致使用 map 遍历数组时，返回的值是直接把当前遍历数组的每个元素的内存地址给了另外一个数组，本质还是引用遍历数组中每个元素的内存地址，这样生成的数组已经不能称作为一个新的数组同样也把 map 最大的一个特性给舍弃了_**，同理如果 map 和 forEach 本质没区别的话，开发人员没必要把他们封装成两个函数，封装成一个就好了。

下面带着代码一步步发现真相

案例一：

```js
let arr = [
  {
    title: '雪碧',
    price: 2.5,
  },
  {
    title: '可乐',
    price: 2.5,
  },
];

let a = arr.forEach((item, index) => {
  return item;
});

let b = arr.map((item, index) => {
  return item;
});

console.log(arr); //打印arr数组
console.log(a); //undefined
console.log(b); //打印arr数组
```

![img](/img/1719104-20210428151859745-105702474.png)

从案例一可以看出来，map 方法是有返回值的，而 forEach 方法没有返回值，但是如果用 map 方法想让 b 获取 arr 的数组的值，不建议案例一中的写法，因为上面我们已经说到了 map 方法主要是生成一个新的数组，而不是直接引入 arr 数组内存地址，如果有不明白的我们来看下面的案例你就会懂了。

案例二：

```js
let arr = [
  { title: '雪碧', price: 2.5 },
  { title: '可乐', price: 2.5 },
];

let list = [
  { title: '雪碧', price: 2.5 },
  { title: '可乐', price: 2.5 },
];

let a = [];
let b = [];

arr.forEach((item, index) => {
  a[index] = item;
});

b = list.map((item, index) => {
  return item;
});

console.log(a);
console.log(b);
```

![img](/img/1719104-20210428155029134-829957729.png)

到这里我们可以看到，a 和 b 都已经成功的接收了 arr 和 list 的数组的数据，上面我一直强调 map 一定不要直接 return item，这里这么写主要是为了让你们区分生成新数组和内存地址的区别

```js
a[0].price = 3;
b[0].price = 3;

console.log(a);
console.log(b);

console.log(arr);
console.log(list);
```

![img](/img/1719104-20210428160930636-492498211.png)

从这里我们看到只更改了 a 和 b 中 price 值，但是 arr 和 list 数组 price 的值也发生了变化，arr 发生变化属于正常现象，因为在上述中已经说过 forEach 方法遍历通常都是引入遍历数组的内存地址，不管是 arr 发生改变还是 a 发生改变，其实都是直接改变同一个内存地址，所以他们的值会一直同步，**_但是 map 方法不是说生成的是一个新的数组，为什么 b 的值发生改变，list 值同样发生改变呢_**，这里就是上述说的内存地址引入问题。

#### map 的正确使用方式

```js
b = list.map((item, index) => {
  // 正确用法，返回新对象
  return {
    title: item.title,
    price: item.price,
  };

  // 错误用法，返回的是对象的地址。这样用生成的新对象和原对象相当于是浅拷贝
  return item;
});

b[0].price = 3;

console.log(b);
console.log(list);
```

![img](/img/1719104-20210428163304990-657663839.png)

在这里我们改变一下写法，就会发现现在在改变 b 值的，list 的就不会发生变化了，案例二中改变 b 的值，list 的值发现变化是因为虽说 map 遍历后生成的是一个新的数组，但是在遍历的过程还是引入旧数组的内容地址，而在案例三中我们通过 map 遍历的时候自己定义一下想要参数名，只复制一下旧数组的值，遍历完后会生成新的内存空间去存储 b 的值，所以我们在改变 b 的值时候也只是改变了 b 内存中的值，而没有改变 list 内存的值，同样的在改变 list 的值，b 的值也不会发现改变，所以说 map 方法遍历后会生成一个新的数组。
