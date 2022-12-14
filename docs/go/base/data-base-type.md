# 基本数据类型和语法

## 基本数据类型

```go
bool

//有符号整型
int（取决于计算机位数）  int8  int16  int32  int64

//无符号整形（一般用于位运算等）
uint（取决于计算机位数） uint8 uint16 uint32 uint64 uintptr（取决于计算机位数）
byte // uint8 的别名
rune // int32 的别名，用于表示一个 Unicode 码点(UTF-8 字符)

// 浮点数
float32 float64

// 复数
complex64 complex128
```

![image-20221213111114921](/img/image-20221213111114921.png)

## 强制类型转换

```go
// 不同类型之间赋值需要显示的类型转换（不支持默认类型转换）

var i int = 42
var f float64 = float64(i) // 注意与C的区别：float64(i)和(float)i
```

## 短变量声明和默认类型

```go
i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```

关于**var 和:=两种赋值方式**：var 定义如果没有初始化则为该类型（无论是基础类型还是结构体）的零值，**如果要定义一个结构体的零值，:=将做不到。**

## nil

go 中的数据类型都有默认的零值，每个类型对应的零值为：

```go
bool		-> false
numbers		-> 0
string  	-> ""

pointers 	-> nil
slices 		-> nil
maps 		-> nil
channels	-> nil
functions 	-> nil
interfaces 	-> nil
```

下面清一色的 nil 就是这些数据类型对应的零值。

**nil 的特点：**

- 两个 nil 不可比较，因为 nil 没有默认类型；

- 不同类型的 nil 指针是一致的，都是指向 0x0；
- 不同类型的 nil 值占用的内存大小不一致，因为不同数据类型的零值大小不同；
- nil 是且仅是 Pointer、chan、func、slice、map、interface 的预定义的零值，是一个标识符，并不是关键字，甚至可以自己改变 nil 的值（不推荐）；

## 转换字符（conversion character）

一般用于格式化输出

```go
%d          十进制整数
%x, %o, %b  十六进制，八进制，二进制整数。
%f, %g, %e  浮点数： 3.141593 3.141592653589793 3.141593e+00
%t          布尔：true或false
%c          字符（rune） (Unicode码点)
%s          字符串
%q          带双引号的字符串"abc"或带单引号的字符'c'
%v          变量的自然形式（natural format）
%T          变量的类型
%%          字面上的百分号标志（无操作数）
```
