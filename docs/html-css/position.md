# position 定位

## position:sticky（黏性定位,吸顶效果）

position 属性中最有意思的就是 sticky 了，设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。

```css
.sticky {
  width: 100%;
  height: 100px;
  position: sticky;
  top: 0;
  background-color: green;
}
```

## position:inherit

继承父元素的`position`属性，但需要注意的是 IE8 以及往前的版本都不支持`inherit`属性

## position:fixed

可以简单说`fixed`是特殊版的`absolute`，fixed 元素总是相对于`body`定位的

## position:static

static(没有定位)是 position 的默认值，元素处于正常的文档流中，会忽略 left、top、right、bottom 和 z-index 属性。

## position:relative

relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响。

## position: absolute

absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：

1. 设置了 absolute 的元素如果存在有祖先元素设置了 position 属性为`relative`或者`absolute`，则这时元素的定位对象为此已设置`position`属性的祖先元素。
2. 如果并没有设置了`position`属性的祖先元素，则此时相对于`body`进行定位
