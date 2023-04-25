# Src&Href 区别

href 是指向网络资源所在位置，建立和当前元素（[锚点](https://so.csdn.net/so/search?q=锚点&spm=1001.2101.3001.7020)）或当前文档（链接）之间的链接，用于超链接

src 是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置
在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将 js 脚本放在底部而不是头部