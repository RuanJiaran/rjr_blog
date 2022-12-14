# 常用指令

| 指令         | 格式                                                                                                          | 用途                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| v-model      |                                                                                                               | 多用于表单元素实现双向数据绑定                                              |
| v-for        | v-for="（item,index) in/of 数组 json"                                                                         | 循环数组或 json                                                             |
| v-show       |                                                                                                               | 显示内容 ,通过 display=block/none 来控制元素隐藏出现                        |
| v-hide       |                                                                                                               | 隐藏内容 同上                                                               |
| v-bind       |                                                                                                               | 动态绑定 作用： 及时对页面的数据进行更改                                    |
| v-on:click   |                                                                                                               | 给标签绑定函数，可以缩写为@，例如绑定一个点击函数 函数必须写在 methods 里面 |
| v-text       |                                                                                                               | 解析文本                                                                    |
| v-html       |                                                                                                               | 解析 html 标签                                                              |
| v-bind:class | 1、对象型 ‘{red:isred}’ <br />2、三元型 ‘isred?“red”:“blue”’<br />3、数组型 ‘[{red:“isred”},{blue:“isblue”}]’ | 绑定样式                                                                    |
| v-once       |                                                                                                               | 进入页面时 只渲染一次 不在进行渲染                                          |
| v-pre        |                                                                                                               | 把标签内部的元素原位输出                                                    |
| v-if         |                                                                                                               | 显示与隐藏，dom 元素的删除添加                                              |
| v-else-if    | 必须和 v-if 连用                                                                                              |                                                                             |
| v-else       |                                                                                                               | 必须和 v-if 连用 不能单独使用 否则报错 模板编译错误                         |
| v-cloak      |                                                                                                               | 防止闪烁 该属性需配合 样式使用                                              |

**v-cloak 用法示例**

```js
<style>
    [v-cloak]{display:none}
</style>

<div id="app" v-cloak>
    <div>
    {{message}}
        </div>
</div>
<script type="text/javascript">
    new Vue({
    el:'#app',
    data:{
        message:'hello world'
    }
})
</script>
```
