# 理解什么是 go runtime

## go runtime 本身是什么？ 

go runtime 其实就是 go SDK（Software Developm Kit）中的一个包。

## go runtime 和 JVM 有什么区别？ 

- JVM 是 java 程序运行时所需要的环境，JVM 在不同平台和版本使用不同的语言实现，.java 源码需要编译为 .class 的字节码后再到 JVM 中运行。

- go runtime 其实就是 go 源代码，只不过是官方写的，在 go 编译时自己写的 go 代码和 go runtime 代码一起编译为一个整体的二进制文件。

## go runtime 有什么作用？ 

- 负责内存管理

- 提供 GC

- 负责协程调度

- 为 go 提供跨平台性（屏蔽了一些不同平台的不同系统调用）

- 在编译时将一些 go 关键字翻译为对 runtime 包的函数调用（比如 ：go, make, new 等）