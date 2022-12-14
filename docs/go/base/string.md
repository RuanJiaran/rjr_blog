# 字符串（string）

## 特点

- string 是一系列字节（byte/unit8）的集合
- string 可以为空，但是不能为nil
- string 对象 不可更改

## string 底层结构

runtime/string.go

```go
type stringStruct struct {
	str unsafe.Pointer // 指向一个 byte 数组
	len int
}
```

