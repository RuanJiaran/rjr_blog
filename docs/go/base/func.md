# 函数

## 多个返回值写法

##### 匿名返回

```go
func f1() (int, int) {
	return 1, 2
}

func main() {
	ret1, ret2 := f1()

	fmt.Println(ret1, ret2)
}
```

##### 形参返回

```go
func f1() (r1 int, r2 int) {
	// 给有名称的形参返回值赋值
	r1 = 1
	r2 = 2
	return
}

func main() {
	ret1, ret2 := f1()

	fmt.Println(ret1, ret2)
}

// 上面 f1() 函数返回值形参都是同一种数据类型，可以像定义变量一样合并，只在最后一个写数据类型
func f1() (r1, r2 int) {}
```

