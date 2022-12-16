# BOM

浏览器对象模型 (BOM) 使 JavaScript 有能力与浏览器"对话"。

## 常用 bom 属性

![](/img/bom1.png)

## window 对象

所有浏览器都支持 window 对象。它表示浏览器窗口。

::: tip 特点
全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一：

window.document.getElementById("header") 与 document.getElementById("header") 是等效的
:::

##### window 尺寸

对于 Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

- window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
- window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)

对于 Internet Explorer 8、7、6、5：

- document.documentElement.clientHeight 或 document.body.clientHeight
- document.documentElement.clientWidth 或 document.body.clientWidth

:::info
document.documentElement 返回对象为 Html 元素。
document.documentElement 返回对象为 body 元素。
:::

兼容写法

```js
const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
```

##### window 方法

- window.open() - 打开新窗口
- window.close() - 关闭当前窗口
- window.moveTo() - 移动当前窗口
- window.resizeTo() - 调整当前窗口的尺寸

[window 其它属性](https://www.runoob.com/jsref/obj-window.html)

## window screen（屏幕对象）

window.screen 对象在编写时可以不使用 window 这个前缀。

![image-20221216105206871](/img/image-20221216105206871.png)

- screen.availWidth - 可用的屏幕宽度（不包括 Windows 任务栏）
- screen.availHeight - 可用的屏幕高度（不包括 Windows 任务栏）
- screen.width - 屏幕宽度
- screen.height - 屏幕高度

[screen 其它属性](https://www.runoob.com/jsref/obj-screen.html)

## window navigator（浏览器对象）

window.navigator 对象在编写时可不使用 window 这个前缀。

![image-20221216110408605](/img/image-20221216110408605.png)

[navigator 其它属性](https://www.runoob.com/jsref/obj-navigator.html)

## window history(历史对象）

window.history 对象在编写时可不使用 window 这个前缀。

![image-20221216112827190](/img/image-20221216112827190.png)

- history.go() - 前进或后退指定的页面数 history.go(num)，num 为负数表示后退，num 为 0 表示刷新页面
- history.back() - 后退一页
- history.forward() - 前进一页

[history 其它属性](https://www.runoob.com/jsref/obj-history.html)

## window location (地址对象)

window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面，编写时可不使用 window 这个前缀。

![image-20221216113325396](/img/image-20221216113325396.png)

```js
location.href-- 返回或设置当前文档的URL
location.search -- 返回URL中的查询字符串部分。例如 http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu 返回包括(?)后面的内容?id=5&name=dreamdu
location.hash -- 返回URL#后面的内容，如果没有#，返回空
location.host -- 返回URL中的域名部分，例如www.dreamdu.com
location.hostname -- 返回URL中的主域名部分，例如dreamdu.com
location.pathname -- 返回URL的域名后的部分。例如 http://www.dreamdu.com/xhtml/ 返回/xhtml/
location.port -- 返回URL中的端口部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回8080
location.protocol -- 返回URL中的协议部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回(//)前面的内容http:
location.assign() --  加载 URL 指定的新的 HTML 文档。
location.replace() -- 通过加载 URL 指定的文档来替换当前文档。
location.reload() -- 重载当前页面
```

::: warning 注意

location.assign() -- 加载 URL 指定的新的 HTML 文档。 就相当于一个链接，跳转到指定的 url，当前页面会转为新页面内容，**可以点击后退返回上一个页面**。

location.replace() -- 通过加载 URL 指定的文档来替换当前文档，并且在 history 对象的地址列表中移除这个 URL,这个方法是替换当前窗口页面，前后两个页面共用一个窗口，所以是**没有后退返回上一页的**

:::
