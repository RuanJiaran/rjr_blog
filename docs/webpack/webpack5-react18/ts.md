# 配置 Typescript 环境

## 1.安装 npm 包

```
npm install -D @babel/preset-typescript
```

## 2.修改 `App.jsx` 和 `main.js` 文件

##### 2.1 修改文件名

- 将 `App.jsx` 修改为 `App.tsx`
- 将 `main.js` 修改为 `main.tsx`

##### 2.2 修改 `main.tsx` 文件内容

```tsx{5}
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('app') as Element).render(<App />)
```

## 3.修改 `config/webpack.common.js`

```js{6,12,33-41}
const path = require('path')
const { getStyleLoaders } = require('./utils.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [path.resolve(__dirname, '../src/main.tsx')],
  output: {
    filename: 'js/[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader'),
      },
      {
        test: /.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
}
```
