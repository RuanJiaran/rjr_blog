# 接口

## 接口初探

```ts
interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj)
```

##### 特点

1.只要传入的对象满足接口定义的必要条件，那么它就是被允许的

2.类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以

## 可选属性

可选属性名字定义的后面加一个`?`符号

```ts
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black' })
```

## 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly 来指定只读属性。
可以通过赋值一个对象字面量来构造一个 Point。 赋值后，x 和 y 再也不能被改变了。

```ts
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
p1.x = 5 // error!
```

## 可索引的类型

可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型

```ts
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]
```

上面例子里，我们定义了 StringArray 接口，它具有索引签名。 这个索引签名表示了当用 number 去索引 StringArray 时会得到 string 类型的返回值

```ts
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

// class Dog {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }

class Dog extends Animal {
  breed: string
  constructor(name: string, breed: string) {
    super(name)
    this.breed = breed
  }
}

// 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
  [x: number]: Animal
  [x: string]: Dog
}
```

?>共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number 来索引时，JavaScript 会将它转换成 string 然后再去索引对象。 也就是说`用0（一个number）去索引等同于使用"0"（一个string）去索引`，因此两者需要保持一致。

```ts
interface NumberDictionary {
  [index: string]: number
  length: number // 可以，length是number类型
  name: string // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```

字符串索引签名能够很好的描述 dictionary 模式，并且它们也会确保所有属性与其返回值类型相匹配。 因为`字符串索引`声明了`obj.property`和`obj["property"]`两种形式都可以。 上面的例子里，`name的类型与字符串索引类型不匹配`，所以类型检查器给出一个错误提示

##### 设置只读索引

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string
}
let myArray: ReadonlyStringArray = ['Alice', 'Bob']
myArray[2] = 'Mallory' // error!
```

不能设置 myArray[2]，因为索引签名是只读的

## 函数类型

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```ts
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}
```

## 额外的属性检查

```ts
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig) {
  return {
    color: 'red',
    area: 100,
  }
}

let squareOptions = { colour: 'red', width: 100 }
let mySquare = createSquare({ colour: 'red', width: 100 })
```

注意传入`createSquare`的参数拼写为`colour`而不是`color`

你可能会争辩这个程序已经正确地类型化了，因为 width 属性是兼容的，不存在 color 属性，而且额外的 colour 属性是无意义的。

然而，TypeScript 会认为这段代码可能存在 bug。 对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

绕开这些检查非常简单。 最简便的方法是使用类型断言：

```ts
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)
```

然而，最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。 如果 SquareConfig 带有上面定义的类型的 color 和 width 属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：

```ts
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}
```

还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量： 因为 squareOptions 不会经过额外属性检查，所以编译器不会报错。

```ts
let squareOptions = { colour: 'red', width: 100 }
let mySquare = createSquare(squareOptions)
```

## 类类型

类可以通过接口的方式，来定义当前这个类的类型

```ts
interface Ifly {
  fly(): void
}

class Person implements Ifly {
  fly() {
    console.log('我会飞了')
  }
}

const person = new Person()
person.fly()
```

`Ifly`接口约束了当前`Person`这个类

## 一个类实现多个接口

```ts
interface Ifly {
  fly(): void
}

interface Iswim {
  swim(): void
}

class Person implements Ifly, Iswim {
  fly() {
    console.log('我会飞了')
  }
  swim() {
    console.log('我会游泳了')
  }
}

const person = new Person()
person.fly()
person.swim()
```

## 接口继承接口

接口可以继承其它一个或多个接口

```ts
interface Ifly {
  fly(): void
}

interface Iswim {
  swim(): void
}

interface IflyAndSwim extends Ifly, Iswim {}

class Person implements IflyAndSwim {
  fly() {
    console.log('我会飞了')
  }
  swim() {
    console.log('我会游泳了')
  }
}

const person = new Person()
person.fly()
person.swim()
```

## 接口声明合并

```js
interface AnimationInterface{
    name:string
    move():void
}

interface AnimationInterface{
    end():void
}

class Player implements AnimationInterface {
  name: string = 'animation'
  move(): void {
    console.log('move')
  }
  end(): void {
    console.log('end')
  }
}
```

从上面可以看出 `AnimationInterface` 接口被声明了两次，`Player` 类实现了 `AnimationInterface` 接口，并且需要实现 `AnimationInterface` 接口两次声明时所有的属性和方法。由此看出后面什么的 `AnimationInterface` 接口没有覆盖前面声明的接口，而是两次声明的接口合并了。
