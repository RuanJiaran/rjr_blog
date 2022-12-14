# 面向对象

## 类的表示

表示一个类以及一个方法的方式为：结构体 + 方法

```go
type Hero struct {
    Name string
    Ad int
    Level int
}

// 必须用 *Hero 类型，否则初始化的是一个Hero临时对象
func (h *Hero) SetName(newName string) {
    h.Name = newName
}

// 最好也用 * 类型，可免去拷贝开销
func (h *Hero) GetName() string {
	return h.Name
}
```

# 封装

结构体名、结构体元素名或者方法名的首字母大写，则其他包也能够访问，否则只能在本包中访问。

这也恰好解释了为什么使用fmt.Println()时P要大写了！

# 继承模拟

go 没有继承，但是可以用语法糖模拟继承。

```go
type Human struct {
	name string
	sex  string
}

func (h Human) Run() {
	fmt.Println(h.name, "is running")
}

type SuperMan struct {
	Human // SuperMan类继承了Human类的方法

	level int
}

func main() {
	var s SuperMan
	s.name = "li4" // 语法糖，等价于 s.Human.name
	s.sex = "male"
	s.level = 88
    s.Run() // 语法糖，等价于 s.Human.Run()
}
```

# 多态模拟

什么是多态？

**相同的消息**发送给**不同的对象**，系统根据对象所属类别，引发不同对象产生不同的行为。



golang如何实现多态？

使用 **接口 + 结构体** 方法来实现多态。

比如定义一个 Animal 有 eat() 和 color() ，通过不同的结构体实现 eat() 和 color() 来定义不同的动物，且具有不同的 eat() 和 color() 实现方式。接口的数据类型为父类指针。

```go
type Animal interface {
	eat()
}

type Cat struct {
	Name string
}

type Dog struct {
	Name string
}

func (c *Cat) eat() {
	fmt.Println("cat " + c.Name + " is eating fish")
}

func (d *Dog) eat() {
	fmt.Println("dog " + d.Name + " is eating bone")
}

// animal的本质是一个指针
func showAnimal(animal Animal) {
	animal.eat()
}

func main() {
	var animal Animal // 接口的数据类型为“父类指针”

	animal = &Cat{"FuGui"}
	animal.eat()

	animal = &Dog{"WangCai"}
	animal.eat()

	cat := Cat{"FuGuiPig"}
	showAnimal(&cat)
}
```

