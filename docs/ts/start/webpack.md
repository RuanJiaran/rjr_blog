# 使用 webpack 打包 ts

## 配置 package.json 文件

使用 `npm init -y` 命令生成 `package.json` 文件

修改`package.json`文件如下：

```js
{
    "name": "ts",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
        "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
    },
    "devDependencies": {
        "clean-webpack-plugin": "^3.0.0",
        "cross-env": "^7.0.2",
        "html-webpack-plugin": "^4.5.0",
        "ts-loader": "^8.0.11",
        "typescript": "^4.5.2",
        "webpack": "^4.41.5",
        "webpack-cli": "^3.3.10",
        "webpack-dev-server": "^3.10.2"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

## 配置 tsconfig.json 文件

使用 `tsc --init` 命令生成 `tsconfig.json` 文件

修改 `tsconfig.json` 文件如下：

```js
{
    "compilerOptions": {
        "target": "es5",
        "lib": [
            "DOM",
            "ES2015"
        ],
        "module": "commonjs",
        "rootDir": "./src",
        "sourceMap": true,
        "outDir": "./dist",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
    }
}
```

## 配置 public/index.html 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack & ts</title>
  </head>

  <body>
    <h1>main入口主页面</h1>
  </body>
</html>
```

## 配置 build/webpack.config.js 文件

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //每次打包时，删除上次打包的残留文件，保证打出的包整洁，非必须
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' //是否是生产环境

function resolve(dir) {
  return path.resolve(__dirname, '..', dir) // 生成绝对路径
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/main.ts',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:8].js',
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader', include: [resolve('src')] }],
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  devServer: {
    host: 'localhost', //主机名
    stats: 'errors-only', // 打包日志输出错误信息
    port: 8081,
    open: true,
  },
}
```

## 新建主入口文件 src/main.ts

```
import './index'
```

## 新建 src/index.ts 文件

```js
console.log(1)
```

## 启动

先进入项目根目录 `npm install` 安装 npm 包，再使用 `npm run dev` 启动项目，打包可以使用 `npm run build` 命令。

好啦，这样我们就配置好了 webpack 自动打包 ts 啦。我们可以在 index.ts 文件里写 ts 代码啦
