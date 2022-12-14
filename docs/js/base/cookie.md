# Cookie/Storage

## Cookie 概念

**_Cookie 由服务器生成，发送给浏览器_**。浏览器把 cookie 以 KV 形式存储到某个目录下的文本文件中，下一次请求同一网站时会把该 cookie 发送给服务器。由于 cookie 是存在客户端上的，所以浏览器加入了一些限制确保 cookie 不会被恶意使用，同时不会占据太多磁盘空间。所以每个域的 cookie 数量是有限制的。

cookie 的内容主要包括：名字 name，值 value，过期时间 expires，路径 path 和域 domain。**_路径和域一起构成 cookie 的作用范围_**。**_一般 cookie 储存在内存里，若设置了过期时间则储存在硬盘里_**，浏览器页面关闭也不会失效，直到设置的过期时间后才失效。若不设置 cookie 的过期时间，则有效期为浏览器窗口的会话期间，关闭浏览器窗口就失效。

## Cookie 原理

_客户端请求服务器时，如果服务器需要记录该用户状态，服务端就使用 response 向客户端浏览器颁发一个 Cookie。而客户端浏览器会把 Cookie 保存起来。当浏览器再请求服务器时，浏览器把请求的网址连同该 Cookie 一同提交给服务器。_

## Cookie 设置

客户端设置 cookie

`document.cookie = "name=rjr;path=/;expires=2022-12-01T08:47:41.427Z" `

## Cookie 的使用场景

##### 单点登录（sso）

用户的一次登录能够得到其它所有系统的信任，便可在其它所有系统中得到授权而无需再次登录。登录成功后设置 cookie 的 domain 为主域名，设置 path 为 `/` 根路径。

比如：oa.tencent.com，hr.tencent.com，code.tencent.com 这几个域名的主域名都是 .tencent.com

注意：只有主域名相同，浏览器在访问时才会携带对应的 cookie

## Cookie 缺点

- 存储大小，最大 4KB
- http 请求时需要发送到服务端，增加请求数据量
- 只能用 document.cookie = '...' 来修改，太过简陋

## LocalStorage，SessionStorage

> 在 HTML5 中，新加入了一个`localStorage/sessionStorage`特性，这个特性主要是用来作为本地存储来使用的，解决了 cookie 存储空间不足的问题(cookie 中每条 cookie 的存储空间为 4k)，localStorage 中一般浏览器支持的是 5M 大小，只支持 string 类型存储

## LocalStorage，SessionStorage 与 Cookie 相比

![详解 Cookie，Session，Token_服务器](/img/resize,m_fixed,w_1184.webp)

## Localstorage，SesstionStorage 不同点

- localStorage 数据会永久存储，除非代码或手动删除
- sessionStorage 数据只存在当前会话，浏览器关闭则清空
- 一般用 localStorage 会更多一些

[cookie 使用场景](https://blog.51cto.com/u_15490526/5554681)

[cookie 名字解释](https://www.zhihu.com/question/445784456/answer/2352702788)
