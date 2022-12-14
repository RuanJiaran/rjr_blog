# watch 深度监听

watch 可以让我们监控一个值的变化，从而做出相应的反应

```vue
<div id="app">
    用户名：<input type="text" v-model='name'>
    <p>你的名字是：{{name}}</p>
</div>

<!-- 引入vue -->
<script src="/node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
const app = new Vue({
  el: '#app',
  data: {
    name: '',
  },
  watch: {
    //监控name属性
    name(newName, oldName) {
      //newName:当前数入的值
      //oldName:上一次输入的值
      console.log(newName, oldName)
    },
  },
})
</script>
```

如果监控的是一个对象，需要进行[深度](https://so.csdn.net/so/search?q=深度&spm=1001.2101.3001.7020)监控，才能监控到对象中属性的变化

```vue
<div id="app">
    用户名：<input type="text" v-model='person.name'>
    <button @click='person.age++'>+</button>
    <p>你的名字是：{{person.name}}</p>
    <p>你的年龄是：{{person.age}}</p>
</div>

<!-- 引入vue -->
<script src="/node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
const app = new Vue({
  el: '#app',
  data: {
    person: {
      name: '',
      age: 18,
    },
  },
  watch: {
    //监控name属性
    person: {
      deep: true, //开启深度监听
      handler(newPerson, oldPerson) {
        console.log(newPerson.namge, newPerson.age)
      },
    },
  },
})
</script>
```

现在定义监控时，person 是一个对象，并且要指定两个属性：

deep：代表深度监控，不仅监控 person 变化，也监控 person 中属性变化。
handler：就是以前的监控处理函数。
通过 newPerson.name 和 newPerson.age 获取对象中具体的值。
