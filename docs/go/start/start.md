# 基本命令

## go version

查看版本

## go env

查看环境变量

## go build

go build命令是在当前目录编译生成可执行文件，保存在当前目录下。

注意：go build 指令会调用所有引用包的源码进行重新编译。

## go install

执行 go install 命令会完成类似 go build 的功能 ，但go install 命令执行生成的可执行文件是在【$GOPATH/bin】目录中

## go get

该命令可以理解为两个操作 git clone + go install , 执行会将远程代码clone 到【$GOPATH/src】 目录中

## go run

编译为一个临时文件然后执行，不会留下可执行文件不能用这种方式运行package，package需要先build后再run

## go fmt（代码格式化）

Go语言中代码有标准的风格。不按照此格式的代码将不能编译通过。

为了减少浪费在排版上的时间，go工具集中提供了一个gofmt命令它可以帮你格式化你写好的代码文件，只需要在写完之后执行go fmt <文件名>.go ，代码就会被修改成了标准格式。
