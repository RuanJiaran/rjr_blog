# 双向数据绑定原理

> vue.js 是采用`数据劫持`结合`发布者-订阅者模式`的方式，通过`Object.defineProperty()`来劫持各个属性的`setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的[监听](https://so.csdn.net/so/search?q=监听&spm=1001.2101.3001.7020)回调来渲染视图

![在这里插入图片描述](/img/8.png)

## 自定义 vue 类

- vue 最少需要两个参数：模板和 data
- 创建 Compiler 对象，将数据渲染到模板后，挂载到指定跟节点中

```js
class MyVue {
  // 1，接收两个参数：模板（根节点），和数据对象
  constructor(options) {
    // 保存模板，和数据对象
    if (this.isElement(options.el)) {
      this.$el = options.el
    } else {
      this.$el = document.querySelector(options.el)
    }
    this.$data = options.data
    // 2.根据模板和数据对象，渲染到根节点
    if (this.$el) {
      // 监听data所有属性的get/set
      new Observer(this.$data)
      new Compiler(this)
    }
  }
  // 判断是否是一个dom元素
  isElement(node) {
    return node.nodeType === 1
  }
}
```

## 实现数据首次渲染到页面

**Compiler**

1. node2fragment 函数将模板元素提取到内存中，方便将数据渲染到模板后，再一次性挂载到页面中
2. 模板提取到内存后，使用 buildTemplate 函数遍历该模板元素

- 元素节点
  - 使用 buildElement 函数检查元素上以 v- 开头的属性
- 文本节点
  - 用 buildText 函数检查文本中有无 {{}} 内容

3. 创建 CompilerUtil 类，用于处理 vue 指令和 {{}}，完成数据的渲染
4. 到此就完成了首次数据渲染，接下来需要实现数据改变时，自动更新视图

```js
class Compiler {
  constructor(vm) {
    this.vm = vm
    // 1.将网页上的元素放到内存中
    let fragment = this.node2fragment(this.vm.$el)
    // 2.利用指定的数据编译内存中的元素
    this.buildTemplate(fragment)
    // 3.将编译好的内容重新渲染到网页上
    this.vm.$el.appendChild(fragment)
  }

  node2fragment(app) {
    // 1.创建一个空的文档碎片对象
    let fragment = document.createDocumentFragment()
    // 2.编译循环取到每一个元素
    let node = app.firstChild
    while (node) {
      // 注意点: 只要将元素添加到了文档碎片对象中, 那么这个元素就会自动从网页上消失
      fragment.appendChild(node)
      node = app.firstChild
    }
    // 3.返回存储了所有元素的文档碎片对象
    return fragment
  }

  buildTemplate(fragment) {
    let nodeList = [...fragment.childNodes]
    nodeList.forEach(node => {
      // 需要判断当前遍历到的节点是一个元素还是一个文本
      if (this.vm.isElement(node)) {
        // 元素节点
        this.buildElement(node)
        // 处理子元素
        this.buildTemplate(node)
      } else {
        // 文本节点
        this.buildText(node)
      }
    })
  }

  buildElement(node) {
    let attrs = [...node.attributes]
    attrs.forEach(attr => {
      // v-model="name" => {name:v-model  value:name}
      let { name, value } = attr
      // v-model / v-html / v-text / v-xxx
      if (name.startsWith('v-')) {
        // v-model -> [v, model]
        let [_, directive] = name.split('-')
        CompilerUtil[directive](node, value, this.vm)
      }
    })
  }

  buildText(node) {
    let content = node.textContent
    let reg = /\{\{.+?\}\}/gi
    if (reg.test(content)) {
      CompilerUtil['content'](node, content, this.vm)
    }
  }
}
```

```js
let CompilerUtil = {
  getValue(vm, value) {
    // 解析this.data.aaa.bbb.ccc这种属性
    return value.split('.').reduce((data, currentKey) => {
      return data[currentKey.trim()]
    }, vm.$data)
  },
  getContent(vm, value) {
    // 解析{{}}中的变量
    let reg = /\{\{(.+?)\}\}/gi
    let val = value.replace(reg, (...args) => {
      return this.getValue(vm, args[1])
    })
    return val
  },

  // 解析v-model指令
  model: function (node, value, vm) {
    // 在触发getter之前，为dom创建Wather，并为Watcher.target赋值
    new Watcher(vm, value, (newValue, oldValue) => {
      node.value = newValue
    })
    let val = this.getValue(vm, value)
    node.value = val
  },

  // 解析v-html指令
  html: function (node, value, vm) {
    // 在触发getter之前，为dom创建Wather，并为Watcher.target赋值
    new Watcher(vm, value, (newValue, oldValue) => {
      node.innerHTML = newValue
    })
    let val = this.getValue(vm, value)
    node.innerHTML = val
  },

  // 解析v-text指令
  text: function (node, value, vm) {
    // 在触发getter之前，为dom创建Wather，并为Watcher.target赋值
    new Watcher(vm, value, (newValue, oldValue) => {
      node.innerText = newValue
    })

    let val = this.getValue(vm, value)
    node.innerText = val
  },

  // 解析{{}}中的变量
  content: function (node, value, vm) {
    let reg = /\{\{(.+?)\}\}/gi
    let val = value.replace(reg, (...args) => {
      // 在触发getter之前，为dom创建Wather，并为Watcher.target赋值
      new Watcher(vm, args[1], (newValue, oldValue) => {
        node.textContent = newValue
      })
      return this.getValue(vm, args[1])
    })
    node.textContent = val
  },
}
```

## 实现数据驱动视图

**Observer**

1. 使用 defineRecative 函数对 data 做 Object.defineProperty 处理，使得 data 中的每个数据都可以进行 get/set 监听
2. 接下来将考虑如何在监听到 data 值改变后，更新视图内容呢？使用观察者设计模式，创建 Dep 和 Wather 类

```js
class Observer {
  constructor(data) {
    this.observer(data)
  }

  observer(obj) {
    if (obj && typeof obj === 'object') {
      // 遍历取出传入对象的所有属性, 给遍历到的属性都增加get/set方法
      for (let key in obj) {
        this.defineRecative(obj, key, obj[key])
      }
    }
  }

  // obj: 需要操作的对象
  // attr: 需要新增get/set方法的属性
  // value: 需要新增get/set方法属性的取值
  defineRecative(obj, attr, value) {
    // 如果属性的取值又是一个对象, 那么也需要给这个对象的所有属性添加get/set方法
    this.observer(value)
    // 第三步: 将当前属性的所有观察者对象都放到当前属性的发布订阅对象中管理起来
    let dep = new Dep() // 创建了属于当前属性的发布订阅对象
    Object.defineProperty(obj, attr, {
      get() {
        // 在这里收集依赖
        Dep.target && dep.addSub(Dep.target)
        return value
      },

      set: newValue => {
        if (value !== newValue) {
          // 如果给属性赋值的新值又是一个对象, 那么也需要给这个对象的所有属性添加get/set方法
          this.observer(newValue)
          value = newValue
          dep.notify()
          console.log('监听到数据的变化')
        }
      },
    })
  }
}
```

## 使用观察者设计模式，创建 Dep 和 Wather 类

1. 使用观察者设计模式的目的是:

- 解析模板，收集 data 中某个数据在模板中被使用的 dom 节点集合，当该数据改变时，更新该 dom 节点集合就实现了数据更新。
- Dep：用于收集某个 data 属性依赖的 dom 节点集合，并提供更新方法
- Watcher：每个 dom 节点的包裹对象
  - attr：该 dom 使用的 data 属性
  - cb：修改该 dom 值的回调函数，在创建的时候会接收

2. 到这里感觉思路是没问题了，已经是胜券在握了。那 Dep 和 Watcher 该怎么使用呢？

- 为每个属性添加一个 dep，用来收集依赖的 dom
- 因为页面首次渲染的时候会读取 data 数据，这时候会触发该 data 的 getter，所以在此收集 dom
- 具体如何收集呢，在 CompilerUtil 类解析 v-model，{{}} 等命令时，会触发 getter，我们在触发之前创建 Wather，为 Watcher 添加一个静态属性,指向该 dom，然后在 getter 函数里面获取该静态变量，并添加到依赖中，就完成了一次收集。因为每次触发 getter 之前都对该静态变量赋值，所以不存在收集错依赖的情况。

```js
class Dep {
  constructor() {
    // 这个数组就是专门用于管理某个属性所有的观察者对象的
    this.subs = []
  }

  // 订阅观察的方法
  addSub(watcher) {
    this.subs.push(watcher)
  }

  // 发布订阅的方法
  notify() {
    this.subs.forEach(watcher => watcher.update())
  }
}
```

```js
class Watcher {
  constructor(vm, attr, cb) {
    this.vm = vm
    this.attr = attr
    this.cb = cb
    // 在创建观察者对象的时候就去获取当前的旧值
    this.oldValue = this.getOldValue()
  }

  getOldValue() {
    Dep.target = this
    let oldValue = CompilerUtil.getValue(this.vm, this.attr)
    Dep.target = null
    return oldValue
  }

  // 定义一个更新的方法, 用于判断新值和旧值是否相同
  update() {
    let newValue = CompilerUtil.getValue(this.vm, this.attr)
    if (this.oldValue !== newValue) {
      this.cb(newValue, this.oldValue)
    }
  }
}
```

3. 到这里就实现了数据绑定时，视图自动更新，本来想代码一步步实现的，但是发现不好处理，就把完整的 class 贴出来了。

## 实现视图驱动数据

其实就是监听输入框的 input、change 事件。修改 CompilerUtil 的 model 方法。具体代码如下

```js
model: function (node, value, vm) {
    new Watcher(vm, value, (newValue, oldValue)=>{
        node.value = newValue;
    });
    let val = this.getValue(vm, value);
    node.value = val;
    // 看这里
    node.addEventListener('input', (e)=>{
        let newValue = e.target.value;
        this.setValue(vm, value, newValue);
    })
},
```

## 总结

**vue 双向绑定原理**

vue 接收一个模板和 data 参数

1. 首先将 data 中的数据进行递归遍历，对每个属性执行 Object.defineProperty，定义 get 和 set 函数。并为每个属性添加一个 dep 数组。当 get 执行时，会为调用的 dom 节点创建一个 watcher 存放在该数组中。当 set 执行时，重新赋值，并调用 dep 数组的 notify 方法，通知所有使用了该属性 watcher，并更新对应 dom 的内容。
2. 将模板加载到内存中，递归模板中的元素，检测到元素有 v- 开头的命令或者双大括号的指令，就会从 data 中取对应的值去修改模板内容，这个时候就将该 dom 元素添加到了该属性的 dep 数组中。这就实现了数据驱动视图。在处理 v-model 指令的时候，为该 dom 添加 input 事件（或 change），输入时就去修改对应的属性的值，实现了页面驱动数据。
3. 将模板与数据进行绑定后，将模板添加到真实 dom 树中。

**如何将 watcher 放在 dep 数组中？**

在解析模板的时候，会根据 v- 指令获取对应 data 属性值，这个时候就会调用属性的 get 方法，我们先创建 Watcher 实例，并在其内部获取该属性值，作为旧值存放在 watcher 内部，我们在获取该值之前，在 Watcher 原型对象上添加属性 Watcher.target = this; 然后取值，将讲 Watcher.target = null；这样 get 在被调用的时候就可以根据 Watcher.target 获取到 watcher 实例对象。

**methods 的原理**

创建 vue 实例的时候，接收 methods 参数

在解析模板的时候遇到 v-on 的指令。会对该 dom 元素添加对应事件的监听，并使用 call 方法将 vue 绑定为该方法的 this：`vm.$methods[value].call(vm, e);`

**computed 的原理**

创建 vue 实例的时候，接收 computed 参数。初始化 vue 实例的时候，为 computed 的 key 进行 Object.defineProperty 处理，并添加 get 属性。
