# 生命周期

## 共八个阶段

- [beforeCreate](https://cn.vuejs.org/v2/api/#beforeCreate)

- [created](https://cn.vuejs.org/v2/api/#created)

- [beforeMount](https://cn.vuejs.org/v2/api/#beforeMount)

- [mounted](https://cn.vuejs.org/v2/api/#mounted)

- [beforeUpdate](https://cn.vuejs.org/v2/api/#beforeUpdate)

- [updated](https://cn.vuejs.org/v2/api/#updated)

- [beforeDestroy](https://cn.vuejs.org/v2/api/#beforeDestroy)

- [destroyed](https://cn.vuejs.org/v2/api/#destroyed)

  ![img](/img/5.png)

## 生命周期详解

先来一波代码总览一下

```vue
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>vue生命周期学习</title>
    <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>
  </body>
  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        message: 'Vue的生命周期',
      },
      beforeCreate: function () {
        console.group('------beforeCreate创建前状态------')
        console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
        console.log('%c%s', 'color:red', 'data   : ' + this.$data) //undefined
        console.log('%c%s', 'color:red', 'message: ' + this.message)
      },
      created: function () {
        console.group('------created创建完毕状态------')
        console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
        console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
        console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
      },
      beforeMount: function () {
        console.group('------beforeMount挂载前状态------')
        console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
        console.log(this.$el)
        console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
        console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
      },
      mounted: function () {
        console.group('------mounted 挂载结束状态------')
        console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
        console.log(this.$el)
        console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
        console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
      },
      beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》')
        console.log('%c%s', 'color:red', 'el     : ' + this.$el)
        console.log(this.$el)
        console.log('%c%s', 'color:red', 'data   : ' + this.$data)
        console.log('%c%s', 'color:red', 'message: ' + this.message)
      },
      updated: function () {
        console.group('updated 更新完成状态===============》')
        console.log('%c%s', 'color:red', 'el     : ' + this.$el)
        console.log(this.$el)
        console.log('%c%s', 'color:red', 'data   : ' + this.$data)
        console.log('%c%s', 'color:red', 'message: ' + this.message)
      },
      beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》')
        console.log('%c%s', 'color:red', 'el     : ' + this.$el)
        console.log(this.$el)
        console.log('%c%s', 'color:red', 'data   : ' + this.$data)
        console.log('%c%s', 'color:red', 'message: ' + this.message)
      },
      destroyed: function () {
        console.group('destroyed 销毁完成状态===============》')
        console.log('%c%s', 'color:red', 'el     : ' + this.$el)
        console.log(this.$el)
        console.log('%c%s', 'color:red', 'data   : ' + this.$data)
        console.log('%c%s', 'color:red', 'message: ' + this.message)
      },
    })
  </script>
</html>
```

#### 1、new Vue() 和 beforeCreate 之间

![clipboard.png](/img/6.png)

在 new Vue 实例化后会自动执行初始化函数，会初始化事件和生成 vue 实例的整个生命周期，这个时候就有整个生命周期，在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问。

#### 2、在 beforeCreate 和 created 钩子函数之间的生命周期

![clipboard.png](/img/7.png)

在这个生命周期之间，会初始化 data，methods 和 props，并且给数据绑定上对象劫持，进行数据的观测（放在 data 中的属性当值发生改变的同时，视图也会改变）。

初始化结束 **created** 这个时候，我们可以通过它获取到 data 数据了，并且可以得到一个“假”的 HTML，但不会在页面展示，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 updated 函数。可以做一些初始数据的获取，在当前阶段无法与 Dom 进行交互，如果非要想，可以通过 vm.$nextTick 来访问 Dom

注意看下：此时还是没有 el 选项

#### 3、created 钩子函数和 beforeMount 间的生命周期

![clipboard.png](/img/bVVUb9.png)

是否有 **el** 或 **template**，根据编译选项作为模板并且将数据和 compile 函数（编译函数）进行结合，创建出虚拟 DOM 对象。

首先会判断对象是否有**el 选项**。**如果有的话就继续向下编译，如果没有**el 选项**，则停止编译，也就意味着停止了生命周期，直到在该 vue 实例上调用 vm.$mount(el)。**此时注释掉代码中:

```
el: '#app',
```

然后运行可以看到到 created 的时候就停止了：

![clipboard.png](/img/bVVUB3.png)

如果我们在后面继续调用 vm.$mount(el),可以发现代码继续向下执行了

```
vm.$mount(el) //这个el参数就是挂载的dom节点
```

![clipboard.png](/img/bVVUCG.png)

然后，我们往下看，**template** 参数选项的有无对生命周期的影响。

1. 如果 vue 实例对象中有 template 参数选项，则将其作为模板编译成 render 函数
2. 如果没有 template 选项，则将外部 HTML 作为模板编译
3. 可以看到 template 中的模板优先级要高于 outer HTML 的优先级

修改代码如下, 在 HTML 结构中增加了一串 html，在 vue 对象中增加了 **template 选项**：

```vue
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>vue生命周期学习</title>
    <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <!--html中修改的-->
      <h1>{{ message + '这是在outer HTML中的' }}</h1>
    </div>
  </body>
  <script>
    var vm = new Vue({
      el: '#app',
      template: "<h1>{{message +'这是在template中的'}}</h1>", //在vue配置项中修改的
      data: {
        message: 'Vue的生命周期'
      }
  </script>
</html>
```

执行后的结果可以看到在页面中显示的是：

![clipboard.png](/img/bVVUJT.png)

那么将 vue 对象中 template 的选项注释掉后打印如下信息：

![clipboard.png](/img/bVVUJ3.png)

这下就可以想想什么 **el 的判断**要在 template 之前了~是因为 vue 需要通过 el 找到对应的 outer template

在 vue 对象中还有一个 **render 函数**，它是以 createElement 作为参数，然后做渲染操作，而且我们可以直接嵌入 JSX.

```vue
new Vue({ el: '#app', render: function(createElement) { return createElement('h1', 'this is
createElement') } })
```

可以看到页面中渲染的是：

![clipboard.png](/img/bVVUSo.png)

所以综合排名优先级：
render 函数选项 > template 选项 > outer HTML.

#### 4、beforeMount 和 mounted 钩子函数间的生命周期

![clipboard.png](/img/bVVUTK.png)

可以看到此时是给 vue 实例对象添加 **$el 成员**，并且替换掉挂载的 DOM 元素。因为在之前 console 中打印的结果可以看到 **beforeMount** 之前 el 上还是 undefined

#### 5、mounted

数据挂载后 **mounted** 将 HTML 显示到页面，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点，使用 $refs 属性对 Dom 进行操作

![clipboard.png](/img/bVVUYC.png)

在 mounted 之前 h1 中还是通过 **{{message}}** 进行占位的，因为此时还没有挂在到页面上，还是 JavaScript 中的虚拟 DOM 形式存在的。在 mounted 之后可以看到 h1 中的内容发生了变化

#### 6、beforeUpdate 钩子函数和 updated 钩子函数间的生命周期

![clipboard.png](/img/bVVU0E.png)

1. 当 data 里数据改变, 更新 DOM 之前，beforeUpdate – 生命周期钩子函数被执行`此时获取不到更新的真实dom`
2. Virtual DOM：虚拟 DOM 重新渲染, 打补丁到真实 DOM
3. updated – 生命周期钩子函数被执行，此时已经更新了真实 dom
4. 当有 data 数据改变 – 重复这个循环

#### 7、beforeDestroy 和 destroyed 钩子函数间的生命周期

![clipboard.png](/img/bVVU6C.png)

1. 当$destroy()被调用：比如组件 DOM 被移除(例 v-if)
2. beforeDestroy 生命周期钩子函数在实例销毁之前调用，在这一步，实例仍然完全可用。我们可以在这时进行善后收尾工作，比如清除计时器，销毁父组件对子组件的重复监听。beforeDestroy(){Bus.$off("saveTheme")}
3. 拆卸数据监视器、子组件和事件侦听器
4. 实例销毁后, 最后触发一个钩子函数
5. destroyed 生命周期钩子函数被执行

## 总结两个观点

- 除了 **beforeCreated** 无法获取到数据之外，其他钩子函数都可以获取到数据，而仅仅只有 **beforeUpdate **和 **updated**获取到的是最新的数据
- **beforeUpdate **和 **updated** 会在数据不断发生改变时重复触发（从而实现数据影响视图）

## 父子组件生命周期

加载渲染：父 beforeCreate —> 父 created —> 父 beforeMount —> 子 beforeCreate —> 子 created —> 子 beforeMount —> 子 mounted —> 父 mounted

更新数据：父 beforeUpdate —> 子 beforeUpdate —> 子 updated —> 父 updated

销 毁：父 beforeDestroy —> 子 beforeDestroy —> 子 destroyed —> 父 destroyed

###### 参考文章

https://zhuanlan.zhihu.com/p/82912814
