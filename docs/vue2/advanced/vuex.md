# vuex

## Vuex 是什么

这里不做介绍，直接去看 [官网](https://vuex.vuejs.org/zh/)

## vuex 由五部分组成

- state: 数据
- actions: 可以包含异步操作
- mutations: 唯一可以修改 state 数据的场所
- getters: 类似于 vue 组件中的计算属性，对 state 数据进行计算（会被缓存）
- modules: 模块化管理 store（仓库），每个模块拥有自己的 state、mutation、action、getter

## 如何使用

store—>index.js

```js
import vue from 'vue'
import Vuex from 'vuex'
Vue.use(vuex)

const state = () => {
  token: ''
}

const actions = {
  set_token({ commit }, val) {
    commit('to_token', val)
  },
}
const mutations = {
  to_token(state, val) {
    state.token = val
  },
}
const getters = {}
let store = new Vuex.store({
  state,
  actions,
  mutations,
  getters,
})

module.export = store
```

home.vue 调用

```vue
<template>
    <div>
        {{$store.state.token}}
    </div>
</template>
<script>
    export default={
        name: 'Home',
        data() {
            return {
                tel: '',
            }
        },
        created(){
            //调用acionts中的方法
            this.$store.dispatch('set_token',12345);
            //调用mutations中的方法
            this.$store.commit('to_token',123456)
        }
    }
<script>
```

## 数据持久化

问题：存储在 vuex 中的状态，刷新页面，会丢失。
为了解决刷新页面数据丢失，才有了数据持久化，最简单的做法就是利用插件 `vuex-persistedState`

**安装依赖**

`cnpm install vuex-persistedState -S`

**使用**

```js
import createPersistedState from 'vuex-persistedstate'

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createPersistedState({
      storage: sessionStorage,
      key: 'token',
    }),
  ], //会自动保存创建的状态。刷新还在
})
```

!> storage:存储方式。（sessionStorage，localStarage） key: 定义本地存储中的 key

## 模块化管理数据 （modules）

项目庞大，数据信息量特别大的时候，我们可以考虑分模块形式管理数据，比如 user 模块管理用户信息数据，cart 模块管理购物车数据，shop 模块管理商品信息数据

```js
import vue from 'vue'
import Vuex from 'vuex'
Vue.use(vuex)

const state = () => {
  token: ''
}
const actions = {
  set_token({ commit }, val) {
    commit('to_token', val)
  },
}
const mutations = {
  to_token(state, val) {
    state.token = val
  },
}
const getters = {}

//user模块
let user = {
  namespaced: true, //一定要开始命名空间。
  state: { userid: 1234 },
  actions: {},
  mutations: {
    SET_USERID(state, val) {
      state.userid = val
    },
  },
  getters: {},
}

//购物车数据的模块
let cart = {
  namespaced: true,
  state: { userid: 567 },
  actions: {},
  mutations: {},
  getters: {},
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user,
    cart,
  },
  plugins: [
    createPersistedState({
      storage: sessionStorage,
      key: 'token',
    }),
  ], //会自动保存创建的状态。刷新还在
})

export default store
```

!> 上面的 user，cart 模块我们可以放在单独文件中，这样避免单个文件太大不利于维护

home.vue 如何使用

```js
// 获取user模块的`userid`
this.$store.state.user.userid
this.$store.commit('user/SET_USERID', 12345) // 前面是指定模块user 中的SET_USERID 方法，后面是传参 可以是对象、数组、字符串等
```

## 辅助函数（语法糖）高级用法

辅助函数可以把`vuex`中的数据和方法映射到`vue组件`中。达到简化操作的目的

- `mapState`
- `mapActions`
- `mapMutations`
- `mapGetters`

**如何使用**

```vue
<template>
  <div id="">
    {{ token }}
    {{ token - x }}
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const {
  mapState: mapStateUser,
  mapActions: mapActionUser,
  mapMutations: mapMutaionuser,
} = createNamespacedHelpers('user')
const {
  mapState: mapStateCart,
  mapActions: mapActionCart,
  mapMutations: mapMutaionCart,
} = createNamespacedHelpers('cart')

export default {
  name: '',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      token: 'token',
    }),
    ...mapGetters(['token-x']),
    ...mapSateUser(['userid']),
    ...mapStateCart({ cartid: 'userid' }),
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.setToken('123456')
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    ...mapActions({
      setToken: 'setToken',
    }),
    ...mapMutations(['SET_TOKEN']),
    ...mapMutaionUser({
      setId: 'setToken',
    }),
  },
}
</script>
```
