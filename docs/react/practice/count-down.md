# 倒计时

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Don't use this in production: -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function CountDown({ max, text }) {
      const [time, setTime] = React.useState(0)
      const [timerID, setTimerID] = React.useState(null)

      React.useEffect(() => {
        if (time > 0) {
          const timerID = setTimeout(() => {
            console.log(time)
            setTime(time - 1)
          }, 1000)
          setTimerID(timerID)
        }

        return () => {
          timerID && clearTimeout(timerID)
        }
      }, [time])

      return (
        <div>
          <button onClick={() => setTime(max)}>{time <= 0 ? text : `${time}s`}</button>
        </div>
      )
    }

    function App() {
      const [status, setStatus] = React.useState(true)

      return (
        <div>
          <button onClick={() => setStatus(false)}>卸载下面组件</button>
          <button onClick={() => setStatus(true)}>加载下面组件</button>
          <hr />
          {status && <CountDown max={10} text="发送验证码" />}
        </div>
      )
    }
  </script>
</html>

<script type="text/babel">
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)
</script>
```

