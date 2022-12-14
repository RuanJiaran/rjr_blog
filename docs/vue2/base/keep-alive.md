# keep-alive

## 概念

keep-alive 是 Vue 的内置组件，当它包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 transition 相似，keep-alive 是一个抽象组件：它自身不会渲染成一个 DOM 元素，也不会出现在父组件链中。

## 作用

在组件切换过程中 把切换出去的组件保留在[内存](https://so.csdn.net/so/search?q=内存&spm=1001.2101.3001.7020)中，防止重复渲染 DOM，减少加载时间及性能消耗，提高用户体验性

## 原理

在 created 钩子函数调用时将需要缓存的 VNode 节点保存在 this.cache 中／在 render（页面渲染） 时，如果 VNode 的 name 符合缓存条件（可以用 include 以及 exclude 控制），则会从 this.cache 中取出之前缓存的 VNode 实例进行渲染。

> **VNode**：虚拟 DOM，其实就是一个 JS 对象

## 参数（Props）

- include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
- exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
- max - 数字。最多可以缓存多少组件实例

## 对生命周期函数变化

被包含在 keep-alive 中创建的组件，会多出两个生命周期的钩子: `activated` 与 `deactivated`

- `activated`：在 keep-alive 组件激活时调用
- `deactivated`：在 keep-alive 组件离开时调用

```
正常生命周期：beforeRouteEnter --> created --> mounted --> updated -->destroyed

使用keepAlive后生命周期：
首次进入缓存页面：beforeRouteEnter --> created --> mounted --> activated --> deactivated
再次进入缓存页面：beforeRouteEnter --> activated --> deactivated

注：
1、这里的activated非常有用，因为页面被缓存时，created,mounted等生命周期均失效，你若想进行一些操作，那么可以在activated内完成(下面会举个栗子：列表页回到上次浏览位置)
2、activated   keep-alive组件激活时调用，该钩子在服务器端渲染期间不被调用。
3、deactivated   keep-alive组件停用时调用，该钩子在服务端渲染期间不被调用。
```

**缓存整个项目**

在 App.vue 里面

```vue
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```

**结合 Router，缓存部分页面**

```vue
//1、在App.vue中设置：（根据是否需要缓存切换模式）
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>

<script>
//2、在router.js路由页设置：
new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'goods',
      children: [
        {
          path: 'goods',
          name: 'goods',
          component: Goods,
          meta: {
            keepAlive: false, // 不需要缓存
          },
        },
        {
          path: 'ratings',
          name: 'ratings',
          component: Ratings,
          meta: {
            keepAlive: true, // 需要缓存
          },
        },
        {
          path: 'seller',
          name: 'seller',
          component: Seller,
          meta: {
            keepAlive: true, // 需要缓存
          },
        },
      ],
    },
  ],
})
</script>
```

!>配置了 keepAlive 的页面，在再次进入时不会重新渲染，该页面内的组件同理不会再次渲染。而这可能会导致该组件内的相关操作（那些每次都需要重新渲染页面的操作：如父子组件间的传值）不再生效。 这一点可能会导致一些莫名其妙而又无从查证的 bug

**使用新增属性 include/exclude,缓存部分页面**

```vue
//vue2.1.0
新增了include，exclude俩个属性，允许组件有条件的缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示。
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
    <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (需要 `v-bind`绑定) -->
<keep-alive :include="/a|b/">
    <component :is="view"></component>
</keep-alive>

<!-- 数组 (需要 `v-bind`绑定) -->
<keep-alive :include="['a', 'b']">
    <component :is="view"></component>
</keep-alive>
```

**动态判断，使用 v-bind:include**

```vue
<keep-alive :include="includedComponents">
    <router-view></router-view>
</keep-alive>
//includedComponents动态设置即可
```

**使用 beforeRouteLeave 或者 afterEach 中进行拦截处理**

```vue
<script>
//如在项目在Category组件中的设置：
beforeRouteLeave(to,from,next){
    if(to.name=='DemoIndex'){
        if(!from.meta.keepAlive){
            from.meta.keepAlive=true
        }
        next()
    }else{
        from.meta.keepAlive=false
        to.meta.keepAlive=false
        next()
    }
},
//在beforeRouteLeave中to.name根据具体的路由进行动态缓存设置。
</script>
```

**列表页回到上次浏览位置**

```vue
<script>
method:{
    //条件：1、列表页不可使用懒加载延迟加载数据，2、列表页需要使用keepAlive缓存

    //离开页面之前将高度存储到sessionStorage。这里不建议用localStorage，因为session在关闭浏览器时会自动清除，而local则需要手动清除，有点麻烦。
    beforeRouteLeave(to,from,next){
        sessionStorage.setItem('scrollH',document.getElementById('demo').scrollTop)
        next()
    },
    activated(){   //在activated生命周期内，从sessionStorage中读取高度值并设置到dom
        if(sessionStorage.getItem('scrollH')){
             document.getElementById('demo').scrollTop=sessionStorage.getItem('scrollH')
        }
    },
}
</script>
```
