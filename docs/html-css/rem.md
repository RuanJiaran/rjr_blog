# 移动端适配

## 三行 js 代码搞定移动端适配

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>rem</title>
    <style>
      .box {
        width: 1rem;
        height: 1rem;
        background: rosybrown;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>

<script>
  // 375/100 表示我们拿到的设计稿是iphone6的设计稿，iphone6屏幕宽度是375px,这样得到 1vw=3.75px, 100/3.75 表示 100px 占iphone6屏幕宽度的比例
  const fontSize = 100 / (375 / 100) + 'vw'
  const _html = document.getElementsByTagName('html')[0]
  // 设置 html 的font-size 为 100/(375/100)+'vw' = 26.6667vw;
  _html.style.fontSize = fontSize
</script>
```

在 iphone6 下我们可以看到 1rem = 100px

![image-20220615111751377](/img/image-20220615111751377.png)

在 iphone12 下我们可以看到 1rem = 104px

![image-20220615111905730](/img/image-20220615111905730.png)

在 iphone5 下我们可以看到 1rem = 85.328px

![image-20220615112026787](/img/image-20220615112026787.png)

## 原理

#### vw

相对视口宽度的单位，100vw 就是 100%视口的宽度，例如 iphone6 的视口宽度是 375px，那么 100vw 就是 375px，1vw 就是 3.75px

#### rem

相对于根字体大小的单位，也就是相对于 html 的 font-size 字体大小的单位。html 默认 font-size 是 16px，那么 1rem 就是 16px，10rem 就是 160px

**那么 rem 配合 vw，很简单就能实现移动端适配方案**

假设我们拿到的设计稿是以 iphone6 为原型设计的，那么设计稿的最大宽度就是 375px。假设我们定义 html 的 font-size 是 100px 的话，在写 css 的时候，我们只需要将数值除以 100 ，再把 px 单位换成 rem 就行了。

现在我们完全按照 iphone6 的原型来写 css，那么在 iphone6 下肯定是没问题的。但如果换成是别的分辨率的手机的话，就会有问题了。因为我们是定死的 html 为 100px。如果需要解决这个问题，就需要动态设置 html 的 font-size 再配合 vw。

我们可以计算 100px 占屏幕宽度的比例 1vw = 375px/100 = 3.75px。这样我们可以算得 100px 占屏幕宽度的比例 100px/3.75px=26.6667vw，这下不管是在何种分辨率下都可以兼容了。
