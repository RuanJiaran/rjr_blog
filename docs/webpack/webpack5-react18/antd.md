# 集成 Ant Design

[Ant Design 官网](https://ant.design/components/overview-cn)

## 1.安装 antd 包

```
npm install antd
```

## 2.修改 `src/App.tsx` 文件内容

直接使用 antd 看是否生效

```tsx{5}
import React from 'react'
import { Button } from 'antd'

const App = () => {
  return <Button type="primary">webpack react ts</Button>
}

export default App
```
