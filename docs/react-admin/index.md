## 使用 [Create React App](https://www.html.cn/create-react-app/) 创建 react 项目

创建`ts`版本

```
npx create-react-app react-ts-antd-demo --template typescript
```

创建`js`版本

```
npx create-react-app react-js-antd-demo
```

## 启动项目

```
npm run start
```

## 问题

#### Chrom 浏览器报错

在 chrom 浏览器打开时，我们会看到下面这样`warning`警告。出现这样的警告是因为 React 18 不再支持 ReactDOM.render

其实在 index.js 入口文件中改用 createRoot 即可消除警告

修改`index.tsx`文件内容

```ts
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)
```

#### QQ 浏览器报错

在`publi/index.html`文件 header 内加入如下代码

```html
<script>
  this.globalThis || (this.globalThis = this)
</script>
```
