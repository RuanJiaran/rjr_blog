# vue-router 原理

[Vue Router 官方文档](https://router.vuejs.org/zh/introduction.html)

## 前端路由概念

通过改变 URL，在不重新请求页面的情况下，更新页面视图。

## Vue-Router 两种模式

更新视图但不重新请求页面，是前端路由原理的核心之一，目前在浏览器环境中这一功能的实现主要有 2 种方式：

1. [Hash](https://so.csdn.net/so/search?q=Hash&spm=1001.2101.3001.7020) — 默认值，利用 URL 中的 hash("#")
2. history-- 利用 URL 中的路径（/home）

**如何设置路由模式**

```js
const router=new VueRouter({
    mode:'history',
    routes:[...]
})
```

**mode 区别：**

1. mode:“hash” 多了 “#” `http://localhost:8080/#/login`
2. mode:“history”没有“#” `http://localhost:8080/home`

## HashHistory

`hash("#")`的作用是加载 URL 中指示网页中的位置。**#** 号后面的 hash 值，可通过 window.location.hash 获取

**特点：**

1. hash 不会被包括在 http 请求中，对服务器端完全无用，因此，改变 hash 不会重新加载页面
2. 可以为 hash 的改变添加监听事件：`window.addEventListener("hashchange",funcRef,false)`
3. 每一次改变 `hash(window.localtion.hash)`，都会在浏览器访问历史中增加一个记录

利用 hash 的以上特点，就可以来实现前端路由"更新视图但不重新请求页面"的功能了

**HashHistory 拥有两个方法，一个是 push， 一个是 replace**

```
HashHistory.push() 和 HashHistory.replace()
```

**`HashHistory.push()` 将新路由添加到浏览器访问历史的栈顶**

![在这里插入图片描述](/img/9.png)

从设置路由改变到视图更新的流程：

```
$router.push() --> HashHistory.push() -->History.transitionTo() --> History.updateRoute() --> {app._route = route} --> vm.render()
```

解释：

```
$router.push() //调用方法
HashHistory.push() //根据 hash 模式调用,设置 hash 并添加到浏览器历史记录（添加到栈顶）（window.location.hash= XXX）
History.transitionTo() //监测更新，更新则调用History.updateRoute()
History.updateRoute() //更新路由
{app._route= route} //替换当前app路由
vm.render() //更新视图
```

**HashHistory.replace()**

```
replace() 方法与 push() 方法不同之处在于，它并不是将新路由添加到浏览器访问历史的栈顶，而是替换掉当前的路由
```

![在这里插入图片描述](/img/10.png)

## HTML5History

早期 History 通过 back()、forward()、go()等方法，我们可以读取浏览器历史记录栈的信息，从 HTML5 开始 History 提供了 2 个新的方法：pushState()、replaceState()，使得我们可以对浏览器历史记录栈进行修改

```
window.history.pushState(data, title, targetURL);
@状态对象：传给目标路由的信息,可为空
@页面标题：目前所有浏览器都不支持,填空字符串即可
@可选url：目标url，不会检查url是否存在，且不能跨域。如不传该项,即给当前url添加data
```

```
window.history.replaceState(data, title, targetURL);
@类似于pushState,但是会直接替换掉当前url,而不会在history中留下记录
```

假定当前网址是 example.com/1.html，使用 pushState() 方法在浏览记录（History 对象）中添加一个新记录

```
var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
```

添加新记录后，浏览器地址栏立刻显示 example.com/2.html，但并不会跳转到 2.html，甚至也不会检查 2.html 是否存在，它只是成为浏览历史中的最新记录。

!>这 2 个方法有个共同的特点：当调用他们修改浏览器历史栈后，虽然当前 url 改变了，但浏览器不会立即发送请求该 url，这就为单页应用前端路由，更新视图但不重新请求页面提供了基础

更多操作：

```js
history.pushState({ page: 1 }, 'title 1', '?page=1')
// URL 显示为 http://example.com/example.html?page=1
history.pushState({ page: 2 }, 'title 2', '?page=2')
// URL 显示为 http://example.com/example.html?page=2
history.replaceState({ page: 3 }, 'title 3', '?page=3')
// URL 显示为 http://example.com/example.html?page=3
history.back()
// URL 显示为 http://example.com/example.html?page=1
history.back()
// URL 显示为 http://example.com/example.html
history.go(2)
// URL 显示为 http://example.com/example.html?page=3
```

**监听地址变化**

在 HTML5History 的构造函数中监听 `popState（window.onpopstate）`

popstate 事件会在点击后退、前进按钮 (或调用 history.back()、history.forward()、history.go() 方法) 时触发。前提是不能真的发生了页面跳转,而是在由 history.pushState() 或者 history.replaceState() 形成的历史节点中前进后退

**注意: 用 history.pushState() 或者 history.replaceState() 不会触发 popstate 事件。**

```js
window.onpopstate = function(event) {
  console.log(event.state);
  console.log(window.history.state;);
};
```

以上两种方式皆可获取之前在`pushState`和`replaceState`中传入的 data

注意，页面第一次加载的时候，浏览器不会触发 popstate 事件。

## 两种模式比较

1. pushState 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改#后面的部分，故只可设置与当前同文档的 URL
2. pushState 通过 stateObject 可以添加任意类型的数据到记录中；而 hash 只可添加短字符串
3. pushState 可额外设置 title 属性供后续使用
4. history 模式则会将 URL 修改得就和正常请求后端的 URL 一样,如后端没有配置对应 /user/id 的路由处理，则会返回 404 错误

辅助学习代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>pushState</title>
    <style type="text/css">
      .hidden {
        display: none;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
  </head>

  <body>
    <section id="step1" class="step-contain" step="1">
      <p>第1步</p>
      <button class="step-btn" step="1">下一步</button>
    </section>
    <section id="step2" class="step-contain hidden" step="2">
      <p>第2步</p>
      <button class="step-btn" step="2">下一步</button>
    </section>
    <section id="step3" class="step-contain hidden" step="3">
      <p>第3步</p>
    </section>
    <script type="text/javascript">
      $(function () {
        stepProgress()

        function stepProgress() {
          var options = {
            curStep: 1,
            nextStep: null,
          }
          var defaultState = {
            step: options.curStep,
            url: '#step=' + options.curStep,
          }
          window.history.pushState(defaultState, '', defaultState.url)
          $('.step-btn').on('click', function () {
            var step = parseInt($(this).attr('step'))
            options.nextStep = step + 1
            var state = {
              step: options.nextStep,
              url: '#step=' + options.nextStep,
            }
            window.history.pushState(state, '', state.url)
            console.log(state.step)
            swapStaus(options.nextStep)
          })

          function swapStaus(step) {
            $('.step-contain').each(function () {
              var tmpStep = $(this).attr('step')
              if (parseInt(tmpStep) == step) {
                $('#step' + tmpStep).removeClass('hidden')
              } else {
                $('#step' + tmpStep).addClass('hidden')
              }
            })
            options.curStep = step
          }

          $(window).on('popstate', function () {
            var currentState = history.state
            goStep = currentState.step ? currentState.step : 1
            swapStaus(goStep)
          })
        }
      })
    </script>
  </body>
</html>
```
