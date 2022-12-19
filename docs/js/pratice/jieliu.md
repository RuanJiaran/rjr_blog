# 节流防抖

## 节流

保证一个事件一定时间内只执行一次。过了这段时间，还有操作的话，继续执行操作。

#### 应用场景

- DOM 元素的拖拽（mousemove/drag），滑块（Slider）滑动和数值联动
- 滚动事件（scroll），只要页面滚动就会间隔一段时间判断一次。（图片懒加载）
- 计算鼠标移动的距离（mousemove）
- mousedown / keydown/click 事件（单位时间只能请求一次接口）
- 搜索联想（keyup）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>节流</title>
  </head>
  <body>
    <button onclick="send()">发送请求</button>
  </body>
</html>

<script>
  let timer = 0
  function send() {
    const nowTime = Date.now()
    // 2 秒内只能执行一次操作
    if (nowTime - timer > 2000) {
      console.log('发送请求')
      timer = Date.now()
    }
  }
</script>
```

#### 用闭包封装节流函数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>rem</title>
  </head>
  <body>
    <button id="send">发送请求</button>
  </body>
</html>

<script>
  // 监听按钮点击事件，3秒触发一次
  document.getElementById('send').addEventListener('click', throttle(sendHttp, 3000))

  function sendHttp() {
    console.log('发送请求')
  }

  /**
   * 节流函数，是一个闭包
   * @fn函数
   * @delay 间隔执行时间
   */
    function throttle(fn, delay, scope) {
        let prevTime = 0;
        return function () {
            const context = scope || this, args = arguments;
            const nowTime = Date.now();
            if (nowTime - prevTime > delay) {
                prevTime = nowTime;
                fn.apply(context, args);
            }
        }
    }
</script>
```

多次点击发送请求后控制台打印出来的效果

![image-20220621161019507](/img/image-20220621161019507.png)

## 防抖

把多个顺序的调用合并成一次（如果一个事件被频繁触发多次，并且触发的时间间隔过短，只执行最后触发的一次）。

原理是维护一个定时器，规定在 delay 后触发函数，如果在此之前触发函数，则取消之前的计时重新计时，只有最后一次操作能被触发。

#### 应用场景

- 手机号，邮箱输入检测
- 搜索框搜索输入（只需最后一次输入完后，再请求api接口），输入六位密码后自动提交。
- 窗口大小 resize（只需窗口调整完成后，计算窗口大小，防止重复渲染）
- 滚动事件（scroll），只需执行触发的最后一次滚动事件的处理程序。（是否滚动到底部自动加载更过）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>防抖</title>
  </head>
  <body>
    <input type="text" id="send" />
  </body>
</html>

<script>
  // 监听input框的内数据的变化，输入完 1 秒后才执行动作
  document.getElementById('send').addEventListener('input', debounce(changeVal, 1000))

  function changeVal(e) {
    console.log(e.target.value)
  }

  /**
   * 防抖函数，是一个闭包
   * @func 函数
   * @wait 等待执行时间
   */
    function debounce(fn, delay, scope) {
        let timer = null;
        // 返回函数对debounce作用域形成闭包
        return function () {
            // setTimeout()中用到函数环境总是window,故需要当前环境的副本；
            const context = scope || this, args = arguments;
            // 如果事件被触发，清除timer并重新开始计时
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    }
</script>
```

上面只是最简单的防抖函数，我们再优化下，加入首次立即触发执行和取消执行的功能

#### 首次立即执行和取消防抖

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>防抖</title>
  </head>
  <body>
    <input type="text" id="send" />
  </body>
</html>

<script>
  // 监听input框的内数据的变化，输入完 1 秒后才执行动作
  document.getElementById('send').addEventListener('input', debounce(changeVal, 1000, true))

  function changeVal(e) {
    console.log(e.target.value)
  }

  /**
   * 防抖函数，是一个闭包
   * @func 函数
   * @wait 等待执行时间
   * @immediate 首次是否立即执行
   */
  function debounce(func, wait, immediate = false) {
    let timer, result
    function debounced() {
      const context = this
      const args = arguments

      if (timer) {
        clearTimeout(timer)
      }

      if (immediate) {
        const callNow = !timer
        // 第一次立即执行
        if (callNow) {
          result = func.apply(context, args)
          timer = setTimeout(function () {
            timer = null
          }, wait)
        } else {
          timer = setTimeout(function () {
            timer = null
            result = func.apply(context, args) // 执行func函数，并绑定func的this和参数
          }, wait)
        }
      } else {
        timer = setTimeout(function () {
          result = func.apply(context, args) // 执行func函数，并绑定func的this和参数
        }, wait)
      }

      return result //返回值
    }
    // 取消防抖
    debounced.cancel = function () {
      cleatTimeout(timer)
      timer = null
    }

    return debounced
  }
</script>
```

## 区别

防抖只会在最后一次事件后执行触发函数。节流不管事件多么的频繁，都会保证只在规定时间段内触发事件函数，不在规定时间不会触发。
