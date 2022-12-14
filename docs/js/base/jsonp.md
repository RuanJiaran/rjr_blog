# jsonp 原理

ajax 请求受同源策略影响，不允许进行跨域请求，我们利用 script 标签的 src 属性不受同源策略的约束

## 实现步骤

1. 动态创建 `<script></script>`( `document.createElement('script')` )
2. 设置 src 属性，(src 中要包含参数 `callback=fn` )进行跨域请求
3. 将 `<script></script> ` 添加到页面中执行 （ `body.appendChild('script')` ）
4. 页面要提前定义好 callback
5. 后端会返回回调函数执行并包裹参数 `callback(data)`

## 实现示例

前端代码

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
</head>
<body>
    <script>
        function showInfo(data) {
            console.log(data)
        }
	</script>
	<script src="http://127.0.0.1:3000/getscript?callback=showInfo"></script>
	<button id="btn">jsonp</button>
</body>
</html>
<script>
    $('#btn').click(function(){
        var frame = document.createElement('script')
        frame.src = 'http://localhost:3000/getscript?callback=showInfo'
        $('body').append(frame)
    })
</script>
```

后端代码

```js
// 导入 http 内置模块
const http = require('http')

// 这个核心模块，能够帮我们解析 URL地址，从而拿到  pathname  query
const urlModule = require('url')

// 创建一个 http 服务器
const server = http.createServer()

// 监听 http 服务器的 request 请求
server.on('request', function (req, res) {
  // const url = req.url
  const { pathname: url, query } = urlModule.parse(req.url, true)

  if (url === '/getscript') {
    // 拼接一个合法的JS脚本，这里拼接的是一个方法的调用
    // var scriptStr = 'show()'

    var data = {
      name: 'xjj',
      age: 18,
      gender: '女孩子',
    }

    var scriptStr = `${query.callback}(${JSON.stringify(data)})`
    // res.end 发送给 客户端， 客户端去把 这个 字符串，当作JS代码去解析执行
    res.end(scriptStr)
  } else {
    res.end('404')
  }
})

// 指定端口号并启动服务器监听
server.listen(3000, function () {
  console.log('server listen at http://127.0.0.1:3000')
})
```

备注：服务端不再返回 JSON 格式的数据，而是返回回调函数包裹数据（`showInfo({name:'tom',age:18}`），在 src 中进行了调用，这样实现了跨域
