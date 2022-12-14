# WebSocket

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Websocket</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Don't use this in production: -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const createWebSocket = {
      url: null,
      ws: null,
      pingStr: 'ping',
      pongStr: 'pong',
      wsConnect: false, // ws 是否连上
      reconnectLock: true, // 是否可以重连
      reconnectTime: 10000, // 重连间隔时间
      heartCheckTimerID: null, // 心跳检测定时器
      heartCheckTime: 5000, // 心跳检测间隔时间
      heartCheckServerTimeoutID: null, // 心跳检测服务端超时定时器
      heartCheckServerTimeout: 3000, // 心跳检测服务端超时时间
      // 初始化一个 ws 连接
      init(url) {
        this.url = url
        if (!this.ws) {
          this.ws = new WebSocket(url)
        }

        this.ws.onopen = () => {
          this.wsConnect = true
          // 开启心跳检测
          this.heartCheck()
        }
        this.ws.onmessage = e => {
          const msg = e.data
          if (msg === this.pongStr) {
            console.log('心跳正常')
          }
          console.log(`收到消息：${msg}`)

          // 重置心跳检测
          this.heartCheck()
        }
        this.ws.onclose = () => {
          console.log('连接已关闭。。。')
          this.wsConnect = false
          this.reconnect()
        }
        this.ws.onerror = e => {
          console.log(`error：${e}`)
          this.wsConnect = false
          this.reconnect()
        }
      },
      // 重连
      reconnect() {
        if (!this.reconnectLock) return
        this.reconnectLock = false
        setTimeout(() => {
          console.log('重新连接')
          this.ws = null // 重新连接时将之前的连接清空，这样才能生成新的连接
          this.reconnectLock = true
          this.init(this.url)
        }, this.reconnectTime)
      },
      // 心跳检测
      heartCheck() {
        const _this = this
        this.heartCheckTimerID && clearTimeout(this.heartCheckTimerID)
        this.heartCheckServerTimeoutID && clearTimeout(this.heartCheckServerTimeoutID)
        this.heartCheckTimerID = setTimeout(() => {
          // 只有在连接上的情况下才做心跳检测
          this.wsConnect && this.ws.send(this.pingStr)
          _this.heartCheckServerTimeoutID = setTimeout(() => {
            _this.ws.close()
          }, _this.heartCheckServerTimeout)
        }, this.heartCheckTime)
      },
    }

    function App() {
      React.useEffect(() => {
        createWebSocket.init('ws://82.157.123.54:9010/ajaxchattest')
      }, [])
      return 'App'
    }
  </script>
</html>

<script type="text/babel">
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)
</script>
```



| 日期 | 天气 | 日程                                               |
| ---- | ---- | -------------------------------------------------- |
| 10.1 | 阵雨 | 东门买衣服                                         |
| 10.2 | 阴天 | 亲子（阿菠萝小猪王国/观澜湖生态运动公园）          |
| 10.3 | 晴天 | 荷兰花卉小镇（上午），陌上花公园（下午）           |
| 10.4 | 晴天 | 海边（玫瑰海岸/南澳/金沙湾/桔钓湾/柚柑湾）         |
| 10.5 | 晴天 | 凤凰山/人才公园/海边公园（早上），欢乐田园（晚上） |
| 10.6 | 小雨 |                                                    |
| 10.7 | 晴天 | 甘坑客家小镇                                       |

