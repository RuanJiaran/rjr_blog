# 环境变量

## windows

##### 查看环境变量

运行命令

```go
go env
```

![img](/img/webp.webp)

##### 配置 GOPATH 变量

![image-20221208155026428](/img/image-20221208155026428.png)

![img](/img/webp-16704858823323.webp)

##### 配置 `GO 指令`的环境变量

因为`GOROOT=C:\Users\Administrator\sdk\go1.13.3`，所以我们直接进入此文件夹查看

![img](/img/webp-16704864269576.webp)

由此可知，go 的环境变量是 `C:\Users\Administrator\sdk\go1.13.3\bin`,选择 `Administrator 的用户变量`，然后点击 新建，添加此变量即可

![img](/img/webp-16704864440529.webp)

![img](/img/webp-167048646279312.webp)

现在我们执行 `win+r`,输入`cmd`来进入终端,随便一个文件夹下面输入 `go`指令，会发现都可以执行

![img](/img/webp-167048647400315.webp)
