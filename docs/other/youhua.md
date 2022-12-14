# 性能优化

#### 开发时构建速度的优化

- npm run start 敲下的一瞬间到呈现结果的时间
  - webpack 在这方面下了很多功夫，cache-loader，tread-loader，开启多线程
  - vite 是浏览器按需加载的，不需要关心这方面

#### 构建优化 vite(rollup)，webpack

- 体积优化

  压缩，treeshaking，图片资源压缩，cdn 加载，分包

- 动态导入（代码分割）

​		`import './index.less'`  写成这种函数导入形式  `import('./index.less')`

- gzip 压缩
- cdn（内容分发网络） 加速
  - vite-plugin-cdn-import
- 分包
  - vite.config.ts 分包

```js
build: {
        rollupOptions: {
            output: {
                // 分包
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        // 把 node_modules 文件里面的文件都打包到 verdor.js 中
                        return 'verdor'
                    }
                },
            },
        },
	}
```



#### 页面性能指标

- 首屏渲染时间（fcp）
  - 懒加载
- http 优化
  - 协商缓存
    - 是否使用缓存要跟服务端商量一下，当服务端给我们打上协商缓存的标记以后，客户端在下次刷新页面，需要重新请求资源时会发送一个协商请求给服务端，服务端如果说需要变化，则会响应具体内容，如果服务端觉得没变化则会响应304
  - 强缓存
    - 服务端给响应头追加一些字段（expires），客户端会记住这些字段，再 expires （截至失效时间）没达到之前，无论怎么刷新页面，浏览器都不会重新请求页面，而是从缓存里取

#### js 代码逻辑

- 注意副作用的清除

  组件是会频繁的挂载和卸载（切换路由的时候），比如我们在某个组件有个计时器（setTimeout，setInterval），如果我们在组件卸载的时候不清除这个计时器，那么在下次组件挂载的时候组件会再开启一个计时器，这时候就会有两个计时器。这样组件每次被重新挂载时计时器就会加一个，这样就会造成内存泄漏。

- 使用 lodash 库

  节流，防抖，forEeach 等这些可以 lodash 库的方法，这个库的方法做了优化

- 对作用域的控制

```js
const arr = [1,2,3]

// 这种写法性能不好
for(let i=0;i<arr.length;i++){}

// 这种写法性能比上面的好,因为 length 把arr的长度再for的快作用域内存起来了，后面的循环就不需要每次取 arr.length 的长度了
for(let i=0,let length=arr.length;i<length;i++){}
```

- requestAnimationFrame，requestIdleCallback

  这两个是卡浏览器帧率的，要对浏览器的渲染原理，重排重绘有较深了解。

#### css 写法优化

- 可以继承的样式不需要写
- 尽量避免太深的 css 嵌套

