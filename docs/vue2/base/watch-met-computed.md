# Computed/Methods/Watch 区别

## 总结

- computed 属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用
- methods 方法表示一个具体的操作，主要书写业务逻辑
- watch 一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作；可以看作是 computed 和 methods 的结合体

## 计算属性 Computed

模板内使用 js[表达式](https://so.csdn.net/so/search?q=表达式&spm=1001.2101.3001.7020)是很方便的，设计的目的只是为了简单运算。`在模板中放入太多的逻辑会让模板过重且难以维护。`所以，`对于任何复杂逻辑，你都应当使用计算属性`。

```vue
<!-- 复杂运算 -->
<div>{{message.split('').reverse().join('')}}</div>
<!-- 计算属性代替复杂运算 -->
<div>{{reverseMessage}}</div>
computed: {
<!-- 计算属性的getter -->
reverseMessage: function () { return this.message.split('').reverse().join(''); } }
```

**计算属性的 getter 与 Setter**

计算属性默认只有 get，在需要的时候也可以设置 set 方法

```js
fullName: {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (val) {
        this.firstName = val.split(' ')[0];
        this.lastName = val.split(' ')[1];
    }
}
```

## Computed 与 methods 对比

- computed 是`属性调用`，而 methods 是`函数调用`
- computed`带有缓存功能`，而 methods`不会被缓存`

**属性调用**

- computed 定义的方法我们是以属性访问的形式调用，`{{computedTest}}`

- methods 定义的方法，我们必须要加上()来调用，`{{methodTest()}}`

**缓存功能**

计算属性具有缓存：只有当计算属性所依赖的属性发生改变时，才会重新去计算

methods 不会被缓存：方法每次都会去重新计算结果

**computed 其实是既可以当做属性访问也可以当做方法访问**

## watch

Vue 的 watch 属性可以用来监听 data 属性中数据的变化

```vue
<div id="app">
    <input type="text" v-model="firstname" />
</div>
<script type="text/javascript">
var vm = new Vue({
  el: '#app',
  data: {
    firstname: '',
    lastname: '',
  },
  methods: {},
  watch: {
    firstname: function (newValue, OldValue) {
      console.log(this.firstname)
      console.log(newValue)
      console.log(OldValue)
    },
  },
})
</script>
```

可以从上述代码中实践得知，输入框内的值变化多少次，控制台就会打印多少次。同时还可以直接在监听的 function 中使用参数来获取新值与旧值

**同时 Watch 还可以被用来监听路由 router 的变化，只是这里的监听的元素是固定的**

```vue
<div id="app">
    <!--由于Vue-router的hash匹配原则所以我们需要在原定义的路径上加一个#号-->
    <!--  <a href="#/login" rel="external nofollow" >登录</a>
	<a href="#/register" rel="external nofollow" >注册</a>-->
    <router-link to="/login" tag="span">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>
</div>
</body>
<script>
    var login={
        template:'<h1>登录组件</h1>'
    }
    var register={
        template:'<h1>注册组件</h1>'
    }
    var routerObj = new VueRouter({
        routes:[
            //此处的component只能使用组件对象，而不能使用注册的模板的名称
            {path:"/login",component:login},
            {path:"/register",component:register}
        ]
    })
    var vm = new Vue({
        el:'#app',
        data:{
        },
        methods:{

        },
        router:routerObj,//将路由规则对象注册到VM实例上
        watch:{
            '$route.path':function(newValue,OldValue){
                console.log(newValue);
                console.log(OldValue);
            }
        }
    })
</script>
```

`watch是观察某一个属性的变化，重新计算属性值。computed 是通过所依赖的属性的变化重新计算属性值。在这里插入代码片`
大部分情况下 watch 和 computed 几乎没有差别。`但如果要在数据变化的同时进行异步操作或者是比较大的开销`，那么 watch 为最佳选择
