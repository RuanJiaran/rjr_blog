# 插槽

## 匿名插槽

```vue
<script>
import Vue from 'vue'
// 定义组件componentOne
const compoentOne = {
    template: `
        <div :style="style1">
            <slot></slot> // 定义插槽
        </div>
    `,
    data () {
        return {
            style1: {
                width: '200px',
                height: '200px'
                border: '1px solid #ccc'
            }
        }
    }
}
</script>
```

调用组件

```vue
<script>
new Vue({
  components: {
    ComOne: componentOne,
  },
  el: '#id',
  data() {
    return {
      val1: '123',
    }
  },
  template: `
        <div>
            <com-one>
                <span>{{val1}}</span> // 使用插槽
            </com-one>
        </div>
    `,
})
</script>
```

## 具名插槽

给具体的插槽命名，并在使用的时候传入插槽的名称

```vue
<script>
import Vue from 'vue'

// 定义组件componentOne
const compoentOne = {
    template: `
        <div :style="style1">
            <div>
                <slot name="header"></slot> // 定义一个名称为header的插槽
            </div>
            <div>
                <slot name="body"></slot> // 定义一个名称为body的插槽
            </div>
        </div>
    `,
    data () {
        return {
            style1: {
                width: '200px',
                height: '200px'
                border: '1px solid #ccc'
            }
        }
    }
}
</script>
```

调用组件

```js
new Vue({
  components: {
    ComOne: componentOne,
  },
  el: '#id',
  data() {
    return {
      val1: '123',
      val2: '456',
    }
  },
  template: `
        <div>
            <com-one>
                <span slot="header">{{val1}}</span> // 使用插槽'header**重点内容**'
                <span slot="body">{{val2}}</span> // 使用插槽'body'
            </com-one>
        </div>
    `,
})
```

## 作用域插槽

将定义插槽的变量使用到插槽中，插槽内可以使用插槽定义的变量

```js
import Vue from 'vue'

// 定义组件componentOne
const compoentOne = {
    template: `
        <div :style="style1">
            <slot :aa="val1" :bb="val2"></slot> // 给插槽传入变量
        </div>
    `,
    data () {
        return {
            style1: {
                width: '200px',
                height: '200px'
                border: '1px solid #ccc'
            },
            val1: 'slot1',
            val2: 'slot2'
        }
    }
}
```

调用

```js
// 调用组件
new Vue({
  components: {
    ComOne: componentOne,
  },
  el: '#id',
  data() {
    return {
      val1: '123',
    }
  },
  template: `
        <div>
            <com-one>
                <span slot-scope="props">{{props.aa}}{{props.bb}}{{val1}}</span> // 定义插槽传入的对象props,并使用
            </com-one>
        </div>
    `,
})
```

!>vue2.6 以后对具名插槽和作用域插槽做了修改，但任然没有废弃之前语法

## 具名插槽（2.6 以后）

```vue
<template>
  <div>
    {{ age }}
    <div>
      <slot name="footer" />
      //这里name的值就是这个插槽的名称。
    </div>
  </div>
</template>

// 调用
<MyFooter>
  //这里v-slot：后边的值与组件内的slot的name属性对应，也就是插槽的名称。
  <template v-slot:footer>
      <div>list</div>
  </template>
</MyFooter>
```

## 作用域插槽（vue2.6 以后）

作用域插槽的主要作用是在书写插槽内容时可以获取到插槽作用域的值

```vue
<template>
  <li>
    <slot name="footer" :aa="title"></slot>
  </li>
</template>

//调用
<ul>
   <myli>
   <template v-slot:footer="message">
       <div>{{message.aa}}</div>
   </template>
   </myli>
 </ul>
```
