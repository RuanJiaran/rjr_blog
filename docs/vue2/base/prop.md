# prop

## prop 写法

```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
<!-- 父组件中 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

## 单项数据流

所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。
每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop

```js
<!-- 测试单向数据流 -->
//父组件
<h1>{{msg}}</h1>
<test-single-data-flow :msg="msg"></test-single-data-flow>


子组件  通过prop接受父组件msg
Vue.component('test-single-data-flow', {
    props: ['msg'],
    data() {
        return {

        }
    },
    // 子组件 不可以修改prop中的值
    template: `<span><input type="text" v-model="msg"/></span>`
})
var app = new Vue({
    el: "#app",
    data: {
        msg: 'Single_Data_Flow'
    }
})
```

单项数据流不允许修改，`在组件中修改 prop 传递过来的数据 Vue 会发出警告`，所以有两种常见的用法去修改 prop 传递过来的值

**1.本地 data 中定义属性，并将 prop 作为初始值**

```js
data() {
    return {
        msg_data: this.msg
    }
}
```

**2.使用 computed 将 prop 的值进行处理**

```js
computed:{
    msg_computed(){
        return this.msg + " Computed"
    }
}
```

## prop 验证

```js
<test-prop-validate :prop-a="1" :prop-b="2" :prop-c="'3'" :prop-f="'success'"></test-prop-validate>
Vue.component('test-prop-validate', {
    props: {
        // 基础的类型检查 (`null` 匹配任何类型)
        propA: Number,
        // 多个可能的类型
        propB: [String, Number],
        // 必填的字符串
        propC: {
            type: String,
            required: true
        },
        // 带有默认值的数字
        propD: {
            type: Number,
            default: 100
        },
        // 带有默认值的对象
        propE: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { message: 'hello' }
            }
        },
        // 自定义验证函数
        propF: {
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    },
    data() {
        return {

        }
    },
    template: `
        <div>
            {{propD}}{{propE}}
        </div>
        `
})
```

type 可以是下列原生构造函数中的一个：String，Number，Boolean，Array，Object，Date，Function，Symbol

## 非 prop 特性

```js
<style>
.colorRed {
    color: red;
}

.defineSize {
    font-size: 20px;
}
</style>
<!-- 非prop属性 -->
<test-not-prop class="colorRed" my-self-define></test-not-prop>
Vue.component('test-not-prop', {
    data() {
        return {

        }
    },
    template: `<div style="font-weight:bold;" class="defineSize">Test Not Prop</div>`
})
<!-- 渲染为 -->
<div class="defineSize colorRed" my-self-define="" style="font-weight: bold;">Test Not Prop</div>
```

对于绝大多数特性来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 type=“text” 就会替换掉 type=“date” 并把它破坏！庆幸的是，class 和 style 特性会稍微智能一些，即两边的值会被合并起来，从而得到最终的值：defineSize colorRed。

## 总结

- prop 数据单项传递，父影响子，子不影响父
- 不能在组件中直接修改 prop 传递过来的值，Vue 会给出警告
- prop 验证时，会在实例创建之前进行验证，所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的
- 非 prop 特性，组件可以接受任意的特性，而这些特性会被添加到这个组件的根元素上。
