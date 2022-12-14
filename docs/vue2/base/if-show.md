# v-if 与 v-show 的区别

## 相同点

都可以动态控制着 dom 元素的显示隐藏

## 区别

**`v-if`:** 控制 DOM 元素的显示隐藏是`将DOM元素整个添加或删除`

**`v-show`:** 控制 DOM 的显示隐藏是为 DOM 元素添加 css 的样式`display`，设置`none`或者是`block`，`DOM元素是还存在的`

## 性能对比

`v-if` 有更高的切换消耗
`v-show`有更高的初始渲染消耗

## 使用场景

`v-if` 适合运营条件不大可能改变的场景下
`v-show ` 适合频繁切换

**例如**

**v-if**

在请求后台接口，用接口返回数据渲染生成多个元素的时候，由于网速太慢，导致数据刚开始没有值，此时我们页面也会进行渲染空数据就会报错。
我们可以把一个元素作为包装元素，并使用 v-if 进行条件判断，如果有值，才会显示内部元素。最终的渲染不会包含这个元素，v-show 是不支持这么做的

```js
<div class="supports-count">
    <span class="count">{{seller.supports.length}}个</span>
	<i class="icon-keyboard_arrow_right"></i>
</div>

export default {
    data() {
        return {
            seller:null
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        this.$axios.get('http://www.test.com').then(res=>{
            this.seller=res.data
        })
    },
}
```

![在这里插入图片描述](/img/1.png)

组件刚创建，渲染完成后，请求未必能完成。所以一开始的 `seller.supports` 只是一个空值，必须在之前加上 v-if，确保有值以后再开始计算 length

```js
<div class="supports-count" v-if="seller.supports">
    <span class="count">{{seller.supports.length}}个</span>
	<i class="icon-keyboard_arrow_right"></i>
</div>
```

**v-show**

商品分类选项卡，频繁切换；

![在这里插入图片描述](/img/2.jpeg)
