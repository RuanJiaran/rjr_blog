# 泛型类型

## 泛型初探

```ts
function identity<T>(arg: T): T {
  return arg
}
// 用法一
let output = identity<string>('myString')

// 用法二
let output2 = identity(2)
```

用`T`指定类型变量，再用`T`当做返回值类型，保证传入数值类型并返回数值类型相同。

用法二，利用了类型推论 – 即编译器会根据传入的参数自动地帮助我们确定 T 的类型

## 多个泛型参数

```ts
function getMsg<K, V>(value1: K, value2: V): [K, V] {
  return [value1, value2]
}

const arr1 = getMsg<string, number>('jack', 200)
console.log(arr1[0].split(''), arr1[1].toFixed(2))

const arr2 = getMsg<number, string>(200, 'jack')
console.log(arr2[0].toFixed(2), arr2[1].split(''))
```

## 泛型接口

```ts
interface IBaseCRUD<T> {
  data: Array<T>
  add: (t: T) => T
  getUserId: (id: number) => T
}

class User {
  id?: number // 可选属性
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class UserCRUD implements IBaseCRUD<User> {
  data: Array<User> = [] // 存放用户信息
  // 添加用户信息
  add(user: User): User {
    user.id = Date.now() + Math.random()
    this.data.push(user)
    return user
  }
  // 通过id获取用户信息
  getUserId(id: number): User {
    return <User>this.data.find(user => user.id === id)
  }
}

const userCRUD: UserCRUD = new UserCRUD()

// 添加数据
userCRUD.add(new User('东方不败', 200))
const { id } = userCRUD.add(new User('令狐冲', 30))
userCRUD.add(new User('岳不群', 60))

console.log(userCRUD.data)

console.log(userCRUD.getUserId(id!)) // id 后面要加 ! 号不然编译会报错
```

上面例子中，我们定义了一个`IBaseCRUD`的基础增删改成泛型接口，由于是演示只定义了`add`和`getUserId`方法。
然后定义了`User`类，最好定义了`UserCRUD`类实现`IBaseCRUD`接口

!>上述示例中，需要注意的是`userCRUD.getUserId(id!)`中 id 后面加上了`!`断言，这样做的目的是让编译器跳过`id`类型的检测。
因为`getUserId`方法需要传一个`number`类型的参数，但是`id`是`add`方法中返回的`User`类实例，`User`类中`id`时可选属性，所以`id`的
了下是`number|undefined`不符合`userCRUD.getUserId()`方法中的类型检测

## 泛型类

```ts
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}
```

!>类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

## 泛型约束

```ts
interface ILength {
  length: number
}

function getLength<T extends ILength>(x: T): number {
  return x.length
}

console.log(getLength<string>('rjr'))
console.log(getLength<number>(124)) // error
```

创建一个包含`.length`属性的接口，使用这个接口和`extends`关键字实现约束
