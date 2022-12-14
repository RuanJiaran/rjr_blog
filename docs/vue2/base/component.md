# 组件通信

## 父组件传到子组件

父组件是通过 props 属性给子组件通信的，数据是单向流动 父—>子 （子组件中修改 props 数据，是无效的，会有一个红色警告）

**父组件`parent.vue`代码如下**

```vue
<template>
  <div class="parent">
    <h2>{{ msg }}</h2>
    <son :fa-msg="msg"></son>
    <!-- 子组件绑定faMsg变量,注意驼峰-->
  </div>
</template>
<script>
import son from './Son' //引入子组件
export default {
  name: 'HelloWorld',
  components: { son },
  data() {
    return {
      msg: '父组件',
    }
  },
}
</script>
```

**子组件 son 代码如下**

```vue
<template>
  <div class="son">
    <p>{{ sonMsg }}</p>
    <p>子组件接收到内容：{{ faMsg }}</p>
  </div>
</template>
<script>
export default {
    name: "son",
    // 方式一
    props:['faMsg'],
    // 方式二
    props: {
        childCom: String //这里指定了字符串类型，如果类型不一致会警告的哦
    },
    // 方式三
    props: {
        childCom: {
            type: String,		   // 指定类型
            default: 'sichaoyun'   // 设置默认值
        }
    }
    data(){
        return {
            sonMsg:'子组件',
        }
    },
}
</script>
```

## 父组件调用子组件方法

通过 ref 可以获取到子组件实例

```vue
//父组件中

<template>
  <div>
    <Button @click="handleClick">点击调用子组件方法</Button>
    <Child ref="child" />
  </div>
</template>

<script>
import Child from './child'

export default {
  methods: {
    handleClick() {
      const child = this.$refs.child //子组件实例
      child.sing() //调用子组件方法
    },
  },
}
</script>

//子组件中

<template>
  <div>我是子组件</div>
</template>
<script>
export default {
  methods: {
    sing() {
      console.log('我是子组件的方法')
    },
  },
}
</script>
```

## 子组件向父组件传值

通过绑定事件然后及 `$emit` 传值

**父组件 parent 代码如下**

父组件通过绑定自定义事件，接受子组件传递过来的参数

```vue
<template>
  <div class="parent">
    <h2>{{ msg }}</h2>
    <p>父组件接手到的内容：{{ username }}</p>
    <son psMsg="我是你爸爸" @transfer="getUser"></son>
    <!-- 监听子组件触发的transfer事件,然后调用getUser方法 -->
  </div>
</template>
<script>
import son from './Son'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '父组件',
      username: '',
    }
  },
  components: { son },
  methods: {
    getUser(msg) {
      this.username = msg
    },
  },
}
</script>
```

**子组件 son 代码如下**

子组件通过 `$emit` 触发父组件上的自定义事件，发送参数

```vue
<template>
  <div class="son">
    <p>{{ sonMsg }}</p>
    <p>子组件接收到内容：{{ psMsg }}</p>
    <!--<input type="text" v-model="user" @change="setUser">-->
    <button @click="setUser">传值</button>
  </div>
</template>
<script>
export default {
  name: 'son',
  data() {
    return {
      sonMsg: '子组件',
      user: '子传父的内容',
    }
  },
  props: ['psMsg'],
  methods: {
    setUser: function () {
      this.$emit('transfer', this.user) //触发transfer方法，this.user 为向父组件传递的数据
    },
  },
}
</script>
```

## 非父子传参 （事件总线）

假设你有两个 Vue 组件需要通信： A 和 B ，A 组件按钮上面绑定了点击事件，发送一则消息，B 组件接收。

!> 作为了解，不推荐下面这种写法，推荐用 vuex

**初始化，全局创建$bus**

直接在项目中的 main.js 初始化 $bus

```js
// main.js
window.$bus = new Vue()
```

**发送事件**

`$bus.$emit("aMsg", '来自A页面的消息')`

```vue
<!-- A.vue -->
<template>
  <button @click="sendMsg()">-</button>
</template>

<script>
//import $bus from "../bus.js";
export default {
  methods: {
    sendMsg() {
      $bus.$emit('aMsg', '来自A页面的消息')
    },
  },
}
</script>
```

**接收事件**

`$bus.$on("事件名",callback)`

```vue
<!-- IncrementCount.vue -->
<template>
  <p>{{ msg }}</p>
</template>

<script>
//import $bus  from "../bus.js";
export default {
  data() {
    return {
      msg: '',
    }
  },
  mounted() {
    $bus.$on('aMsg', msg => {
      // A发送来的消息
      this.msg = msg
    })
  },
}
</script>
```

**事件总线推荐下面写法**

集中式的事件中间件就是 Bus。我习惯将 bus 定义到全局

```js
// app.js
var eventBus = {
  install(Vue, options) {
    Vue.prototype.$bus = vue
  },
}
Vue.use(eventBus)
```

然后在组件中，可以使用`$emit， $on， $off` 分别来`分发、监听、取消监听事件`

**分发事件的组件**

```js
methods: {
    todo: function () {
    	this.$bus.$emit('todoSth', params);  //params是传递的参数
    }
}
```

**监听的组件**

```js
created() {
    this.$bus.$on('todoSth', (params) => {  //获取传递的参数并进行操作
    	//todo something
    })
},
// 最好在组件销毁前
// 清除事件监听
beforeDestroy () {
  	this.$bus.$off('todoSth');
}
```

如果需要监听多个组件，只需要更改 bus 的 eventName:

```js
created() {
    this.$bus.$on('firstTodo', this.firstTodo);
    this.$bus.$on('secondTodo', this.secondTodo);
},
// 清除事件监听
beforeDestroy () {
    this.$bus.$off('firstTodo', this.firstTodo);
    this.$bus.$off('secondTodo', this.secondTodo);
}
```
