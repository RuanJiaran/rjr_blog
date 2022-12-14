# 修改数据页面不更新

## 问题

当直接修改了对象的属性后，页面并不重新渲染

**示例**

```vue
<template>
  <div>
    <p v-for="(value, key) in item" :key="key">
      {{ value }}
    </p>
    <button @click="addProperty">动态添加新属性</button>
  </div>
</template>

<script>
export default {
  data() {
    item: {
      oldProperty: '旧值'
    }
  },
  methods: {
    addProperty() {
      this.item.newProperty = '新值' // 为items添加新属性
      console.log(this.items) // 输出带有newProperty的items
    },
  },
}
</script>
```

点击按钮，发现结果不及预期，数据虽然更新了（console 打印出了新属性），但页面并没有更新

## 原理分析

vue2 是用过 Object.defineProperty 实现数据响应式

```js
const item = {}
Object.defineProperty(obj, 'oldProperty', {
  get() {
    console.log(`get oldProperty:${val}`)
    return val
  },
  set(newVal) {
    if (newVal !== val) {
      console.log(`set oldProperty:${newVal}`)
      val = newVal
    }
  },
})
```

原因：组件初始化时，对 data 中的 item 进行递归遍历，对 item 的每一个属性进行劫持，添加 set,get 方法。我们后来新加的 newProperty 属性，并没有通过 Object.defineProperty 设置成响应式数据，修改后不会视图更新

## 解决方案

Vue 不允许在已经创建的实例上动态添加新的响应式属性

若想实现数据与视图同步更新，可采取下面三种解决方案：

- Vue.set()
- Object.assign()
- $forcecUpdated()

#### Vue.set()

`Vue.set( target, propertyName/index, value )`

参数：

- target：要修改的对象或数组
- propertyName/index：属性或下标
- value：修改后的 value 值

```js
this.$set(this.item, 'newProperty', '新值')
```

vue 源码：

```js
function set (target: Array<any> | Object, key: any, val: any): any {
    ...
    defineReactive(ob.value, key, val)
    ob.dep.notify()
    return val
}
```

这里无非再次调用 defineReactive 方法，实现新增属性的响应式。关于 defineReactive 方法，内部还是通过 Object.defineProperty 实现属性拦截，大致代码如下：

```js
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log(`get ${key}:${val}`)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log(`set ${key}:${newVal}`)
        val = newVal
      }
    },
  })
}
```

#### Object.assign()

直接使用 Object.assign()添加到对象的新属性不会触发更新

应创建一个新的对象，合并原对象和混入对象的属性

```js
this.item = Object.assign({}, this.item, { newProperty: '新值' })
```

#### $forceUpdate

$forceUpdate 迫使 Vue 实例重新渲染，仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

```js
this.item.newProperty = '新值'
this.$forceUpdate()
```

## 总结

- 如果为对象添加少量的新属性，可以直接采用 Vue.set()
- 如果需要为新对象添加大量的新属性，则通过 Object.assign()创建新对象
- 如果你需要进行强制刷新时，可采取$forceUpdate() (不建议)

!>vue3 是用过 proxy 实现数据响应式的，直接动态添加新属性仍可以实现数据响应式
