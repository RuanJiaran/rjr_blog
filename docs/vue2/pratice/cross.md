# 本地开发跨域请求设置

在根目录创建`vue.config.js`

在 module.exports 中配置 devserver 的内容

```js
module.exports{
    devServer: {
        host:'0.0.0.0',
        port: 8080,//端口号
        open: true,//运行项目自启
        proxy:{
           '/api':{
                target:'http://localhost:3000/',//跨域请求资源地址
                ws:false,//是否启用websockets
                changeOrigin:true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite:{
                    '^/api':''//注册全局路径
                }
            }
        }
    }
}
```

因为顺手注册了全局路径，取资源就可以使用/[api](https://so.csdn.net/so/search?q=api&spm=1001.2101.3001.7020)，例如：

this.$ajax.get(`/api/personalized?limit=6`,{})
