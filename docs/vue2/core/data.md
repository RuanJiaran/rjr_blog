# 组件的 data 为什么是函数

## 实例和组件定义 data 的区别

[视频解析](https://www.bilibili.com/video/BV1aq4y167Mr?spm_id_from=333.999.0.0&vd_source=c0cb6866911e79b68c9abaeabc75069c)

**vue 实例中的 data 属性既可以是一个对象，也可以是一个函数**

```js
const app = new Vue({
  el: '#app',
  // 对象格式
  data: {
    foo: 'foo',
  },
  // 函数格式
  data() {
    return {
      foo: 'foo',
    }
  },
})
```

**组件中定义 data 属性，`只能是一个函数`**

```js
Vue.component('component1', {
  template: `<div>组件</div>`,
  data() {
    return {
      foo: 'foo',
    }
  },
})
```

## 组件 data 定义函数与对象的区别

上面讲到组件 data 必须是一个函数，不知道大家有没有思考过这是为什么呢？

在我们定义好一个组件的时候，vue 最终都会通过 Vue.extend()构成组件实例

这里我们模仿组件构造函数，定义 data 属性，采用对象的形式

```js
function Component() {}
Component.prototype.data = {
  count: 0,
}
```

创建两个组件实例

```js
const componentA = new Component()
const componentB = new Component()
```

修改 componentA 组件 data 属性的值，componentB 中的值也发生了改变

```js
console.log(componentB.data.count) // 0
componentA.data.count = 1
console.log(componentB.data.count) // 1
```

产生这样的原因这是两者共用了同一个内存地址，componentA 修改的内容，同样对 componentB 产生了影响

如果我们采用函数的形式，则不会出现这种情况（函数返回的对象内存地址并不相同）

```js
function Component() {
  this.data = this.data()
}
Component.prototype.data = function () {
  return {
    count: 0,
  }
}
```

修改 componentA 组件 data 属性的值，componentB 中的值不受影响

```js
const componentA = new Component()
const componentB = new Component()

console.log(componentB.data.count) // 0
componentA.data.count = 1
console.log(componentB.data.count) // 0
```

vue 组件可能会有很多个实例，采用函数返回一个全新 data 形式，使每个实例对象的数据不会受到其他实例对象数据的污染

## 总结

- 根实例对象 data 可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
- 组件实例对象`data`必须为函数，目的是为了防止多个组件实例对象之间共用一个 data，产生数据污染。采用函数的形式，initData 时会将其作为工厂函数都会返回全新 data 对象
