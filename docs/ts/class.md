# 类

## 类基本特性

```ts
class Animal {
  public name: string
  protected color: string
  readonly name2: string = 'test public'
  private eat: string = 'eat'
  constructor(theName: string, color: string) {
    this.name = theName
    this.color = color
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string, color: string) {
    super(name, color)
  }
  move(distanceInMeters = 5) {
    super.move(distanceInMeters)
  }
  getColor() {
    return this.color
  }
}

class Horse extends Animal {
  constructor(name: string, color: string) {
    super(name, color)
  }
  move(distanceInMeters = 45) {
    super.move(distanceInMeters)
  }
}

let sam = new Snake('dog', 'white')
let tom: Animal = new Horse('horse', 'black')

sam.name2 = 'red' // 错误 name2是只读的.
sam.move()
tom.move(34)
new Animal('Cat', 'black').color // 错误: 'color' 是受保护的.
```

##### 特点

1.使用 new 构造了 Animal 类的一个实例。 它会调用之前定义的构造函数`constructor`，创建一个 Animal 类型的新对象，并执行构造函数初始化它

2.Snake 和 Horse 子类里的 move 重写了父类 Animal 的 move 方法，子类里使用`super`调用父类成员

3.类的成员可以用`public`,`protected`,`private`修饰；默认为 public

4.`private`修饰的成员只能在定义的类内部调用，`protected`修饰的成员可以在子类和定义的类内部调用，`public`修饰的成员在外部，子类，类内部都可以调用

5.`readonly`可以修饰成员为只读， 只读属性必须在声明时或构造函数里被初始化

## readonly 妙用

`readonly` 可以修饰成员为只读， 只读属性必须在声明时或构造函数里被初始化

```js
class Axios{
    public readonly site:string = 'http://www.csop.com/api'
	public constructor(site?:string){
        this.site = site || this.site
    }
    get(url:string):any[]{
        console.log(`你请求的是${this.site}/${url}`)
        return []
    }
}

const instance = new Axios()
console.log(instance.site)
```

## 静态属性

```ts
class Person {
  static firstName: string = '东方'
  static lastName: string = '不败'
  static fullName: string = '东方不败'

  constructor(firstName: string, lastName: string) {
    // this.firstName = firstName     // 错误用法。此时this是实例对象，firstName是静态属性，不能通过实例对象直接调用静态属性来使用
    Person.firstName = firstName
    Person.lastName = lastName
    Person.fullName = Person.firstName + Person.lastName
  }
}

console.log(Person.fullName)
```

使用`static`的修饰的成员就是静态成员，使用时不需要实现 new 实例化类，直接`Person.`就可以访问静态成员

## 参数属性

```ts
class Animal {
  constructor(private name: string) {}
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}
```

!>注意看我们仅在构造函数里使用 private name: string 参数来创建和初始化 name 成员，我们把声明和赋值合并至一处。使用 private 限定一个参数属性会声明并初始化一个私有成员；对于 public 和 protected 来说也是一样

## 存取器

TypeScript 支持通过`getters/setters`来`截取对对象成员的访问`

下面我们以一个简单的例子来体会`get`和`set`

```ts
class Person {
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    console.log('进入get里了')
    return this.firstName + '_' + this.lastName
  }

  set fullName(val: string) {
    console.log('进入set里了')
    const arrStr: string[] = val.split('_')
    this.firstName = arrStr[0]
    this.lastName = arrStr[1]
  }
}

const person = new Person('东方', '不败')
console.log(person.fullName)
//进入get里了
//东方_不败

person.fullName = '诸葛_孔明'
//进入set里了

console.log(person.fullName)
//进入get里了
//诸葛_孔明
```

##### 注意：

1.存取器要求你将编译器设置为输出 ECMAScript 5 或更高,不支持降级到 ECMAScript 3

2.只带有 get 不带有 set 的存取器自动被推断为 readonly

## 抽象类

```ts
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log('Department name: ' + this.name)
  }

  abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department // 允许创建一个对抽象类型的引用
department = new Department() // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
department.generateReports() // 错误: 方法在声明的抽象类中不存在
```

`abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法,抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。抽象类不能直接被实例化

## 编译前后代码对比

```js
//编译前ts
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}

//编译后js
let Greeter = (function () {
  function Greeter(message) {
    this.greeting = message
  }
  Greeter.prototype.greet = function () {
    return 'Hello, ' + this.greeting
  }
  return Greeter
})()
```

## 把类当做接口使用

```ts
class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
```

## 用类实现一个单例

```ts
class Axios {
  private static instance: Axios | null = null
  private constructor() {}

  static make(): Axios {
    if (this.instance === null) {
      console.log('创建 Axios 实例')

      this.instance = new Axios()
    }

    return this.instance
  }
}

const instance = Axios.make()
const instance2 = Axios.make()
//只会打印一次 创建 Axios 实例
```
