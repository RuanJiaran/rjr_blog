# 原生 ajax

#### 创建 xhr 核心对象

```js
var xhr = new XMLHttpRequest()
```

#### 调用 open 准备发送

```js
// 	参数三：true异步，false 同步
xhr.open('post', 'http://www.baidu.com/api/search', true)
```

#### 如果是 post 请求，必须设置请求头

```js
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
```

#### 调用 send 发送请求 （如果不需要参数，就写 null）

```js
xhr.send('user=tom&age=10&sex=女')
```

#### 监听异步回调 onreadystatechange

- 判断 readyState 为 4 表示请求完成
- 判断 status 状态码 为 200 表示接口请求成功

```js
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
      let res = JSON.parse(xhr.responseText)
      console.log(res)
    }
  }
}
```

#### 如果是 post 请求，想要传 json 格式数据

```js
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.open({ _id: xxx, user: xxxx, age: xxxx })
```
