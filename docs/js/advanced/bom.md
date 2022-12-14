# BOM 操作

## 常用 bom 属性

![](/img/bom1.png)

#### navigator（浏览器对象）

```js
//如何检测是否为Chrome浏览器
var ua = navigator.userAgent
console.log(ua)
var isChrome = ua.indexOf('Chrome')
console.log(isChrome) // true为是，false为不是
```

#### screen（屏幕对象）

```js
screen.width //屏幕宽度
screen.height //屏幕高度
```

#### location (地址对象)

```js
location.href-- 返回或设置当前文档的URL
location.search -- 返回URL中的查询字符串部分。例如 http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu 返回包括(?)后面的内容?id=5&name=dreamdu
location.hash -- 返回URL#后面的内容，如果没有#，返回空
location.host -- 返回URL中的域名部分，例如www.dreamdu.com
location.hostname -- 返回URL中的主域名部分，例如dreamdu.com
location.pathname -- 返回URL的域名后的部分。例如 http://www.dreamdu.com/xhtml/ 返回/xhtml/
location.port -- 返回URL中的端口部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回8080
location.protocol -- 返回URL中的协议部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回(//)前面的内容http:
location.assign -- 设置当前文档的URL
location.replace() -- 设置当前文档的URL，并且在history对象的地址列表中移除这个URL location.replace(url);
location.reload() -- 重载当前页面
```

#### history(历史对象）

```js
history.go() //前进或后退指定的页面数 history.go(num);
history.back() // 后退一页
history.forward() // 前进一页
```
