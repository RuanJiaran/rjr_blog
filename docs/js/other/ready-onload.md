# ready 和 onload 的区别

一般情况下window的load()都是用来设置body标签的onload事件.但onload事件是要在页面的元素全部加载完了才触发的,这也包括页面上的图片，以及大的表格数据。如果页面上图片较多或图片太大,加载需要较多时间，就会导致页面无响应，或者用户做了其它操作了。

而Jeuery中的ready()则是在页面的dom(节点)加载完后就可以做相应的操作,而不用等待全部元素加载完成.比如只知道页面某处有一张图片，而不一定要等它显示出来就可以为它绑定点击方法。


#### jquery 的ready() 与window.onload()的区别

1. $(document).ready() 在 DOM 结构绘制完毕后就执行，不必等到加载完毕。
2. window.onload 必须等到页面内包括图片的所有元素加载完毕后才能执行。
3. $(document).ready() 比 windos.onload 先执行
4. $(document).ready() 可以执行多个，window.onload 只执行最后一个
5. $(document).ready(function(){}) 可以简写成 $(function(){})