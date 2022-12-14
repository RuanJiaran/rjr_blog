# 切片（slice）

Go 语言切片是对数组的抽象。

Go 数组的长度不可改变，在特定场景中这样的集合就不太适用，Go 中提供了一种灵活，功能强悍的内置类型切片("动态数组")，与数组相比切片的长度是不固定的，可以追加元素，在追加时可能使切片的容量增大。

## 定义方式

##### 声明切片

声明一个未指定大小的数组来定义切片

```go
// 声明 s 切片，但并未给 s 分配空间，是一个空切片
var s []int
```

##### make 创建切片并初始化

```go
// 声明 s 是一个切片，同时给 s 分配3个空间，初始值是0
var s []int = make([]int,3)

fmt.Print(s) // [0,0,0]
```

简写方式

```go
s := make([]int,3)
```

指定容量

```go
// 声明 s 是一个切片，同时给 s 分配3个空间，初始值是0,容量是5
s := make([]int,3,5)
```

##### 定义并初始化（常用）

注意：这种定义方式，cap=len，即容量大小是切片的长度

```go
// 声明 s 切片，并初始化。默认值是 1，2，3。长度len是3，容量默认是切片len的长度3
s := []int{1, 2, 3}

fmt.Print(len(s),cap(s) s) // 3 3 [1,2,3]
```

##### 引用初始化（不建议使用）

引用别的切片或数组进行初始化。特别需要注意的是，这种方式是指针传递，两个切片中任何一个改变，另一个都会相应的改变。

```go
s := make([]int, 2, 3)

cs := s[:]
fmt.Printf("len=%d cap=%d slice=%v\n", len(cs), cap(cs), cs) // len=2 cap=3 slice=[0 0]

s[1] = 1
fmt.Printf("len=%d cap=%d slice=%v\n", len(cs), cap(cs), cs) // len=2 cap=3 slice=[0 1]

cs[0] = 222
fmt.Printf("len=%d cap=%d slice=%v\n", len(s), cap(s), s)    // len=2 cap=3 slice=[222 1]
```

```go
s := make([]int, 2, 3)

cs := s[1:2]

fmt.Printf("len=%d cap=%d slice=%v\n", len(s), cap(s), s)
fmt.Printf("len=%d cap=%d slice=%v\n", len(cs), cap(cs), cs)

s[0] = 1

fmt.Printf("len=%d cap=%d slice=%v\n", len(s), cap(s), s)
fmt.Printf("len=%d cap=%d slice=%v\n", len(cs), cap(cs), cs)

cs[0] = 222

fmt.Printf("len=%d cap=%d slice=%v\n", len(s), cap(s), s)
fmt.Printf("len=%d cap=%d slice=%v\n", len(s), cap(cs), cs)

// 打印结果

```



更多语法

```go
s := arr[:] // 初始化切片 s，是数组 arr 的引用。

s := arr[startIndex:endIndex] // 将 arr 中从下标 startIndex 到 endIndex-1 下的元素创建为一个新的切片。

s := arr[startIndex:] // 默认 endIndex 时将表示一直到arr的最后一个元素。

s := arr[:endIndex]  // 默认 startIndex 时将表示从 arr 的第一个元素开始。

s1 := s[startIndex:endIndex]  // 通过切片 s 初始化切片 s1。
```

## 空(nil)切片

一个切片在未初始化之前默认为 nil，长度为 0，实例如下：

```go
var s []int

if s == nil {
    fmt.Print("空切片")
}
```

## 切片长度

`len()` 方法获取切片长度

```go
s := []int{1,2}

fmt.Print(len(s))  // 2
```

## 切片容量

`cap()` 方法可获取切片容量，切片最长可以达到多少。

```go
var numbers = make([]int,3,5)

fmt.Print(cap(numbers))  // 5
```

## 切片截取

可以通过设置下限及上限来设置截取切片 `[startIndex:endIndex]`，需要注意的是截取的不包括 `endIndex`

```go
package main

import "fmt"

func main() {
   /* 创建切片 */
   numbers := []int{0,1,2,3,4,5,6,7,8}  
   printSlice(numbers)

   /* 打印原始切片 */
   fmt.Println("numbers ==", numbers)

   /* 打印子切片从索引1(包含) 到索引4(不包含)*/
   fmt.Println("numbers[1:4] ==", numbers[1:4])

   /* 默认下限为 0*/
   fmt.Println("numbers[:3] ==", numbers[:3])

   /* 默认上限为 len(s)*/
   fmt.Println("numbers[4:] ==", numbers[4:])

   numbers1 := make([]int,0,5)
   printSlice(numbers1)

   /* 打印子切片从索引  0(包含) 到索引 2(不包含) */
   number2 := numbers[:2]
   printSlice(number2)

   /* 打印子切片从索引 2(包含) 到索引 5(不包含) */
   number3 := numbers[2:5]
   printSlice(number3)

}

func printSlice(x []int){
   fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
}

// 输出
len=9 cap=9 slice=[0 1 2 3 4 5 6 7 8]
numbers == [0 1 2 3 4 5 6 7 8]
numbers[1:4] == [1 2 3]
numbers[:3] == [0 1 2]
numbers[4:] == [4 5 6 7 8]
len=0 cap=5 slice=[]
len=2 cap=9 slice=[0 1]
len=3 cap=7 slice=[2 3 4]
```

## 切片追加元素

`append()` 方法向切片追加元素

##### 追加单个元素

```go
var numbers []int
fmt.Printf("len=%d cap=%d slice=%v\n",len(numbers),cap(numbers),numbers) // len=0 cap=0 slice=[]

numbers = append(numbers, 0)
fmt.Printf("len=%d cap=%d slice=%v\n",len(numbers),cap(numbers),numbers) // len=1 cap=1 slice=[0]
```

##### 追加多个元素

```go
var numbers []int
fmt.Printf("len=%d cap=%d slice=%v\n",len(numbers),cap(numbers),numbers) // len=0 cap=0 slice=[]

numbers = append(numbers, 2,3,4)
fmt.Printf("len=%d cap=%d slice=%v\n",len(numbers),cap(numbers),numbers) // len=3 cap=3 slice=[2,3,4]
```

## 切片拷贝

`copy()` 方法拷贝切片

```go
numbers := make([]int,3,5){1,2,3}

// 创建切片 cnumbers 是之前切片的两倍容量
cnumbers := make([]int,len(numbers),(cap(numbers))*2)

copy(cnumbers,numbers)

fmt.Printf("len=%d cap=%d slice=%v\n",len(cnumbers),cap(cnumbers),cnumbers) // len=3 cap=10 slice=[1,2,3]
```

