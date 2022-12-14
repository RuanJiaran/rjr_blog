# 事件修饰符

| 事件修饰符 | 作用                                                                          |
| ---------- | ----------------------------------------------------------------------------- |
| .stop      | 阻止事件继续传播                                                              |
| .prevent   | 阻止标签默认行为                                                              |
| .capture   | 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 |
| .self      | 只当在 event.target 是当前元素自身时触发处理函数                              |
| .once      | 事件将只会触发一次                                                            |
| .passive   | 告诉浏览器你不想阻止事件的默认行为                                            |

**示例**

```vue
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

!>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用`v-on:click.prevent.self`会阻止所有的点击，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

## v-model 的修饰符

| 修饰符  | 作用                                                                                     | 用法示例                     |
| ------- | ---------------------------------------------------------------------------------------- | ---------------------------- |
| .lazy   | 默认情况下，v-model 同步输入框的值和数据。可以通过这个修饰符，转变为在 change 事件再同步 | <input v-model.lazy="msg">   |
| .number | 自动将用户的输入值转化为数值类型                                                         | <input v-model.number="msg"> |
| .trim   | 自动过滤用户输入的首尾空格                                                               | <input v-model.trim="msg">   |

## element 的修饰符

对于 elementUI 的 input，我们需要在后面加上`.native`, 因为 elementUI 对 input 进行了封装，原生的事件不起作用

```vue
<input v-model="form.name" placeholder="昵称" @keyup.enter="submit">

<el-input v-model="form.name" placeholder="昵称" @keyup.enter.native="submit"></el-input>
```

## 键盘事件的修饰符

在我们的项目经常需要监听一些键盘事件来触发程序的执行，而 Vue 中允许在监听的时候添加关键修饰符

```vue
<input v-on:keyup.13="submit">
```

对于一些常用键，还提供了按键别名

```vue
<input v-on:keyup.enter="submit">
```

**全部的按键别名：**

`.enter` `.tab` `.delete (捕获“删除”和“退格”键)` `.esc` `.space` `.up` `.down` `.left` `.right`

**修饰键：**

`.ctrl` `.alt` `.shift` `.meta`

**示例**

```vue
<!-- Alt + C -->
<input @keyup.alt.67="clear">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

与按键别名不同的是，修饰键和 keyup 事件一起用时，事件引发时必须按下正常的按键。换一种说法：如果要引发 keyup.ctrl，必须按下 ctrl 时释放其他的按键；单单释放 ctrl 不会引发事件

```vue
<!-- 按下Alt + 释放C触发 -->
<input @keyup.alt.67="clear">

<!-- 按下Alt + 释放任意键触发 -->
<input @keyup.alt="other">

<!-- 按下Ctrl + enter时触发 -->
<input @keydown.ctrl.13="submit">
```
