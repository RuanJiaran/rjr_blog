# 跨域

- 端口，域名，协议三部分只要有一部分不同都会形成跨域
- 跨域是浏览器的行为

## 跨域形成汇总

| 说明                           | 示例                                                  |
| ------------------------------ | ----------------------------------------------------- |
| 同一域名，不同端口             | http://www.a.com:8000/a.js<br/>http://www.a.com/b.js  |
| 同一域名，不同协议             | http://www.a.com/a.js<br/>https://www.a.com/b.js      |
| 域名和域名对应 ip              | http://www.a.com/a.js<br/>http://70.32.92.74/b.js     |
| 主域相同，子域不同             | http://www.a.com/a.js<br/>http://script.a.com/b.js    |
| 同一域名，不同二级域名（同上） | http://www.a.com/a.js<br/>http://a.com/b.js           |
| 不同域名                       | http://www.cnblogs.com/a.js<br/>http://www.a.com/b.js |

## 解决跨域

1. 后端指定允许跨域 `'Access-Control-Allow-Origin:*'//或指定域`
2. jsonp
3. nginx 转发

## 后端服务能不能接收到跨域的请求？

虽然网页在请求后端服务接口的时候跨域了，但是后端是可以接收到请求的。跨域是浏览器单方面为安全考虑，而限制不接收数据的行为。

**下面来看看**

![image-20221117212409212](/img/image-20221117212409212.png)

![image-20221117212526791](/img/image-20221117212526791.png)

![image-20221117212431327](/img/image-20221117212431327.png)

可以看到 http://127.0.0.1:5000/api/kol/recommends 这个请求跨域了，但是请求返回状态码是 200 是成功，那么我们看看后端有没有响应呢。

查看后端服务我们可以看到，后端服务是接收都了 http://127.0.0.1:5000/api/kol/recommends 这个 http 请求的，并且做出了回应，打印了 recommends。

![image-20221117212842296](/img/image-20221117212842296.png)
