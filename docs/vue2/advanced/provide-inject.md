# provide 和 inject(依赖注入)

> 在开发过程中，我们往往有这样一个场景，就是在子孙组件里想使用祖先组件的资源，如果用 props 一层层传递，这样太麻烦了。这时候我们可以使用 provide 和 inject，这对选项是成对使用的。

## 语法

```
provide：Object | () => Object

inject：Array<string> | { [key: string]: string | Symbol | Object }
```

`provide：`提供依赖是一个对象，或者是一个返回对象的函数。里面呢就包含要给子孙后代的东西，也就是属性和属性值。

`inject：` `注入依赖`一个[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)数组，或者是一个对象。属性值可以是一个对象，包含 from 和 default 默认值

## 示例

parent.vue

```vue
<template>
  <div>这是一代组件</div>
</template>

<script>
export default {
  components: {
    MergeTipDialog,
    BreakNetTip,
  },
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    this.getList()
  },
  // 父组件中返回要传给下级的数据
  provide() {
    return {
      test: '这是一代组件的数据',
      data: this.list,
      onChange: () => {},
    }
  },
  methods: {
    getList() {
      // 伪代码获取数据
      this.list = axios.get('xxxxx')
    },
  },
}
</script>
```

child.vue

```vue
<template>
  <div>这是父组件传递的{{ test }}</div>
</template>

<script>
import PopupAssign from '../PopupAssign'
export default {
  // 写法一
  inject: ['test'],
  // 写法二
  inject: {
    test: {
      from: 'test', // 如果它需要从一个不同名字的属性注入，则使用 from 来表示其源属性
      default: 'xxxx',
    },
    _change: {
      // 命名与子组件冲突可以更改别名
      from: 'onChange',
    },
  },
  methods: {
    onChange() {},
  },
}
</script>
```

在这里要注意，祖先组件不知道哪些后代组件使用它提供的属性 后代组件不知道被注入的属性来自哪里，这里可能会导致数据比较难追踪定位，所以不推荐随便使用这个
