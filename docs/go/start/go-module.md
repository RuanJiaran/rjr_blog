# Go 依赖管理

了解 go 的依赖管理，需要认识三个东西：GOPATH、GO111MODULE、go.mod

## GOPATH

最开始 go 使用 GOPATH 进行依赖管理。

## GOPATH 的位置

linux 默认在：~/go 下

windows 默认在：%USERPROFILE%\go 下

## GOPATH 目录

GOPATH 下有 src, pkg, bin 三个目录：

- src：存放 go 源代码；
- pkg：存放预编译的包文件；
- bin：存放可执行文件。

## GOPATH 存在的问题：

没有版本控制概念。系统在寻找 gopath 下的文件时，一定要通过 gopath/src 下去寻找，如果两个 project 都在 src 下所以第三方库路径一致，但是可能两个 project 要的第三方库的版本不一致，但同一路径只能有一种版本。

---

### GO111MODULE

输入 go env 命令，可以看到 `GO111MODULE="on"/"off"/"auto"`的条目，111 的意思就是纪念 go module 是在 go1.11 的时候诞生的。

GO111MODULE 是一个开关，通过它可以开启或关闭 go mod 模式。

它有三个可选值：off、on、auto，默认值是 auto。

1. GO111MODULE=off 禁用模块支持，编译时会从 GOPATH 和 vendor 文件夹中查找包。
2. GO111MODULE=on 启用模块支持，编译时会忽略 GOPATH 和 vendor 文件夹，只根据 go.mod 下载依赖。
3. GO111MODULE=auto，当**项目在 $GOPATH/src 外且项目根目录有 go.mod 文件**时，自动开启模块支持。

设置命令：`$ go env -w GO111MODULE="on"`

开启 go mod 模式后，go 文件夹下的子文件夹作用为：

- pkg：子文件夹 mod 用于存放各个 go mod 项目依赖的包；
- bin：存放编译后的可执行文件
- src：不再使用；

---

### go.mod

使用 `go mod init modname`命令后，会在当前目录下创建一个 go.mod 文件，用于位于当前目录项目的依赖管理。

go mod 模式导入的包，编译后会放在 `$GOPATH/pkg/mod` 目录下。

## 实例

```go
module github.com/BingmingWong/module-test

go 1.14

require (
    example.com/apple v0.1.2
    example.com/banana v1.2.3
    example.com/banana/v2 v2.3.4
    example.com/pear // indirect
    example.com/strawberry // incompatible
)

exclude example.com/banana v1.2.4
replace（
    golang.org/x/crypto v0.0.0-20180820150726-614d502a4dac => github.com/golang/crypto v0.0.0-20180820150726-614d502a4dac
    golang.org/x/net v0.0.0-20180821023952-922f4815f713 => github.com/golang/net v0.0.0-20180826012351-8a410e7b638d
    golang.org/x/text v0.3.0 => github.com/golang/text v0.3.0
)
```

- 第 1 行：模块的引用路径
- 第 3 行：项目使用的 go 版本
- require()：项目所需的直接依赖包及其版本
- exclude： 忽略指定版本的依赖包
- replace：由于在国内访问 golang.org/x 的各个包都需要 f.q，你可以在 go.mod 中使用 replace 替换成 github 上对应的库。

## 相关命令

```go
go mod init		 // 生成 go.mod ⽂文件
go mod download  // 下载 go.mod ⽂文件中指明的所有依赖
go mod tidy 	 //	整理理现有的依赖
go mod graph 	 // 查看现有的依赖结构
go mod edit 	 // 编辑 go.mod ⽂文件
go mod vendor	 // 导出项⽬目所有的依赖到vendor⽬目录
go mod verify	 // 校验⼀一个模块是否被篡改过
go mod why	     // 查看为什什么需要依赖某模块
```

---

# go.sum

在执行 go get 之后随着 go.mod 的更新，可以发现出现了一个 go.sum 文件，里面似乎是哈希值的一些看不懂的东西。

其实回过来看，go.mod 作为依赖管理的唯一文件是否可靠呢？显然是不可靠的，因为都是明文存储，容易被篡改。

## go.sum 的格式

```plain
github.com/go-playground/validator/v10 v10.4.1 h1:pH2c5ADXtd66mxoE0Zm9SUhxE20r7aM3F26W0hOn+GE=
github.com/go-playground/validator/v10 v10.4.1/go.mod h1:nlOn6nFhuKACm19sB/8EGNn9GlaMV7XkbRSipzJ0Ii4=
```

每个 gomodule 依赖由两条记录构成：

- `<gomodule 名 版本号 h1:哈希值>`
- `<gomodule 名 版本号/go.mod h1:哈希值>`

第一条表示整个依赖文件的哈希值；

第二条表示 mo.mod 文件中该条记录的哈希值；

h1 表示后面的哈希值是由算法 SHA-256 计算出来的；

## 如何保证依赖包的正确性？

1. 首先保证 go.sum 中哈希值的正确性：

在更新 go.sum 之前，为了确保下载的依赖包是真实可靠的，go 命令下载完依赖包后会查询 GOSUMDB 环境变量所指示的服务器，以得到一个权威的依赖包版本哈希值。如果 go 命令计算出的依赖包版本哈希值与 GOSUMDB 服务器给出的哈希值不一致，go 命令将拒绝向下执行，也不会更新 go.sum 文件。

1. 再来保证依赖包的正确性：

当构建一个项目时，go 命令会先在本地缓存中查找所有 go.mod 记录的依赖包，计算其哈希值，与 go.sum 中的哈希值对比。如果不一致，go 命令会判定为本地缓存的依赖包错误，因为一个新的依赖包版本在被添加到 go.sum 前是经过 GOSUMDB（校验和数据库）验证过的。

## 为什么 go.sum 条目比 go.mod 多那么多？

因为 go.mod 只记录直接依赖的包，go.sum 记录所有直接和间接依赖的包数据。
