# 结构体（struct）

结构体定义需要使用 type 和 struct 语句。struct 语句定义一个新的数据类型，结构体中有一个或多个成员。type 语句设定了结构体的名称。

## 定义结构体

```go
type Books struct {
   title string
   auth string
}
```

**示例 1**

```go
type Book struct {
	title string
	auth  string
}

func main() {
    // 示例1
	b1 := Book{title: "go", auth: "菜鸟"} // {title:go auth:菜鸟}
	fmt.Printf("%+v", b1)

    // 示例2
	b2 := Book{"php", "菜鸟"}
	fmt.Printf("%+v", b2)  				// {title:php auth:菜鸟}

    // 示例3
	var b3 Book
	b3.title = "js"
	fmt.Printf("%+v", b3)  				// {title:js auth:}
}
```

忽略的字段为 0 或 空

**示例 2**

```go
// 结构体创建
type Employee struct {
    ID        int
    Name      string
    Address   string
    DoB       time.Time
    Position  string
    Salary    int
    ManagerID int
}



// 结构体访问
var dilbert Employee
dilbert.Salary -= 5000
var employeeOfTheMonth *Employee = &dilbert
employeeOfTheMonth.Position += " (proactive team player)"
// 等价于 (*employeeOfTheMonth).Position += " (proactive team player)"

// 初始化
type Point struct{ X, Y int }
p := Point{1, 2} 	// 方式1
p := Point{Y:1} 	// 方式2，X自动为0值
```

## 匿名成员

只声明一个成员对应的数据类型而不指名成员的名字；这类成员就叫匿名成员。匿名成员的数据类型必须是命名的类型或指向一个命名的类型的指针。下面的代码中，Circle 和 Wheel 各自都有一个匿名成员。我们可以说 Point 类型被嵌入到了 Circle 结构体，同时 Circle 类型被嵌入到了 Wheel 结构体。

```go
type Point struct {
    X, Y int
}

type Circle struct {
    Point
    Radius int
}

type Wheel struct {
    Circle
    Spokes int
}

// 得益于匿名嵌入的特性，我们可以直接访问叶子属性而不需要给出完整的路径
var w Wheel
w.X = 8            // equivalent to w.Circle.Point.X = 8
w.Y = 8            // equivalent to w.Circle.Point.Y = 8
w.Radius = 5       // equivalent to w.Circle.Radius = 5
w.Spokes = 20
```

## 空结构体

就是内容为空的结构体，举例：

```go
type cat struct {}
```

**空结构体大小是多少？如何存储？**

```go

type cat struct{}

func main() {
	c0, c1 := cat{}, cat{}
	fmt.Println(unsafe.Sizeof(c0), unsafe.Sizeof(c1))
	fmt.Printf("%p\n%p\n", &c0, &c1)
}
```

运行结果：

![image.png](/img/1655710860948-5a164bf3-8df0-4b42-8b0b-508b96ded50b.png)

说明空结构体大小为 0，且统一使用一个地址。事实上，所有大小为 0 的变量的地址都为同一个，即 `runtime/malloc.go`中的：

```go
// base address for all 0-byte allocations
var zerobase uintptr
```

**空结构体什么时候使用？**

空结构体的主要用途为节约空间，比如用 go map 实现一个类似 set 的结构（go 没有 set）：

```go
m := make(map[int]struct{})
m[1], m[0] = struct{}{}, struct{}{}
```

空结构体任何时候地址都是 zerobase 吗？

不是的，空结构体如果作为结构体成员，地址跟随其他的兄弟成员。
