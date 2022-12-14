# Map

Map 是一种无序的键值对的集合。Map 最重要的一点是通过 key 来快速检索数据，key 类似于索引，指向数据的值。

Map 是一种集合，所以我们可以像迭代数组和切片那样迭代它。不过，Map 是无序的，我们无法决定它的返回顺序，这是因为 Map 是使用 hash 表来实现的。

## 定义 Map

##### var 声明map

```go
var m map[string]string  // 创建集合，此时还未初始化，m 是 nil。

m["a"] = "A" // 会报错，因为 m 只是声明，但还未初始化

m = make(map[string]string) // 初始化

m["b"] = "B" // 不好报错，因为上面已经用 make 进行了初始化
```

##### make 创建并初始化

```go
m := make(map[string]string)
```

##### 示例

```go
package main

import "fmt"

func main() {
    var countryCapitalMap map[string]string /*创建集合 */
    countryCapitalMap = make(map[string]string)

    /* map插入key - value对,各个国家对应的首都 */
    countryCapitalMap [ "France" ] = "巴黎"
    countryCapitalMap [ "Italy" ] = "罗马"
    countryCapitalMap [ "Japan" ] = "东京"
    countryCapitalMap [ "India" ] = "新德里"

    /*使用键输出地图值 */
    for country := range countryCapitalMap {
        fmt.Println(country, "首都是", countryCapitalMap [country])
    }

    /*查看元素在集合中是否存在 */
    capital, ok := countryCapitalMap [ "American" ] /*如果确定是真实的,则存在,否则不存在 */
    /*fmt.Println(capital) */
    /*fmt.Println(ok) */
    if (ok) {
        fmt.Println("American 的首都是", capital)
    } else {
        fmt.Println("American 的首都不存在")
    }
}

// 运行结果
France 首都是 巴黎
Italy 首都是 罗马
Japan 首都是 东京
India  首都是 新德里
American 的首都不存在
```

## delete() 函数

delete() 函数用于删除集合的元素, 参数为 map 和其对应的 key。

```go
m := make(map[string]string){"a":"A","b":"B","c":"C"}

delete(m,"a")

for item := range m{
    fmt.Println(item, "==>", m[item])
}

// 打印
b==>B
c==>C
```

