# offset、client、scroll 区别

## offset

元素相对带有定位父元素的元素偏移量

![img](/img/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAc3VwZXLnoIHlips=,size_13,color_FFFFFF,t_70,g_se,x_16.png)

![img](/img/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAc3VwZXLnoIHlips=,size_20,color_FFFFFF,t_70,g_se,x_16.png)

## client

元素的边框宽高、元素内容宽高

![img](/img/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAc3VwZXLnoIHlips=,size_13,color_FFFFFF,t_70,g_se,x_16-16699489900065.png)

![img](/img/2308e282dcbc48a98dd11d67a21f4587.png)

## scroll

滚动距离

![img](/img/3f54a67803f044c9bb88b8dc035b23ba.png)

![img](/img/5a1dc3a0961c4f1d87b6ecd5edc30dad.png)

## 总结

![img](/img/282192f341dc408387730b78ba06e350.png)

**主要用法：**

1.offset 系列 经常用于获得元素位置 offsetLeft offsetTop

2.client 经常用于获取元素大小 clientWidth clientHeight

3.scroll 经常用于获取滚动距离 scrollTop scrollLeft

4.注意页面滚动的距离通过 window.pageXOffset 获得
