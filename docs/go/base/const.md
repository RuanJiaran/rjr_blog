# 常量（const）

## const 定义常量

```go
// 单行定义
const a int = 100

// 多行定义
const (
	b = "rjr"
    c = false
    d int = 300
)
```



## iota 关键字

iota，特殊常量，可以认为是一个可以被编译器修改的常量。

iota 在 const 关键字出现时将被重置为 0(const 内部的第一行之前)，const 中每新增一行常量声明将使 iota 计数一次(iota 可理解为 const 语句块中的行索引)。

iota 可以被用作枚举值：

```go
const (
	ONE = iota  // iota=0, ONE=0
    TWO			// iota=1, TWO=1
    THREE 		// iota=2, THREE=2
)

const (
	A = iota*10  // A=0
    B			 // B=10
)

const (
	a, b = iota + 1, iota + 2 // iota=0,a=1,b=2
	c, d                      // iota=1,a=2,b=3
	e, f                      //iota=2,a=3,b=4
	g, h = iota * 2, iota * 3 //iota=3,a=6,b=9
	i, k                      //iota=4,a=8,b=12
)
```

注意：iota 只能配合 const() 使用