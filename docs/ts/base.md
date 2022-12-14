# 基础类型

## 布尔

```js
let isDone: boolean = false
```

## 字符串

```js
let name: string = 'rjr'
```

## 数值

```js
let num: number = 100
```

!>注意：number 类型的值也包括`NaN`、`Infinity`这两个特殊类型

## 数组

两种定义方式

```js
let list: number[] = [1, 2, 3] // 方式一
let list: Array<number> = [1, 2, 3] // 方式二
```

定义多类型数组

```typescript
const arr: (number | string)[] = ['s', 2]
```

## 枚举 Enum

```js
enum Color {
        Red='red',
        Green='green',
        Blue='blue'
     }
let c: Color = Color.Green;
```

**枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为#green，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字**

```js
enum Color {
        Red='#red',
        Green='#green',
        Blue='#blue'
     }
let colorName: string = Color['#green'];

alert(colorName);  // 显示'Green'因为上面代码里它的值是#green
```

## 元组 Tuple

```js
let x: [string, number]
x = ['hello', 10]
```

元组类型允许表示一个已知元素数量和类型的`数组`，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组

## 任意值 Any

```js
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false
```

有时候，我们不清楚类型的变量最终是什么类型，这时就可以将变量设置成`any`类型；类型检查器不会对`any`变量类型的值进行检查而是直接让它们通过编译阶段的检查

## 不知道是什么类型 Unknow

`unknow` 可以作为中间类型，把一种类型赋值给另一种类型。但是不建议这么做

```JS
let a:string = 'a'

let b:number = a     //会报错 这样把一个字符串类型赋值给数字类型会报错

let c:number = a as number // 会报错 把 a 字符串类型断言成数字类型会报错

let d:number = a as unknow as number // 不会报错 先把 a 字符串类型断言成不知道类型 unknow 再把 unknow 断言成数字类型，最后再赋值给 d 数字类型，就不会报错了

console.log(d) // 输出 a
```

## Null 和 Undefined

```js
let n: null = null
let u: undefined = undefined
let a: number = undefined // 在严格模式下会报错
let b: any = undefined
let c: any = null
let d: void = undefined
```

TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。默认情况下 null 和 undefined 是所有类型的`子类型`。 就是说你可以把 null 和 undefined 赋值给其它类型的变量，比如 number

!>但是在严格模式`undefined`只能赋值给`void`和`any`和`它自己undefined`,`null`只能赋值给`any`和`它自己null`

## 空值 Void

```js
let unusable: void = undefined
```

!> `void` 类型的变量只有 `undefined` 和 `null` 两个值; 但在 `严格模式` 下只有 `undefined` 一个值

**用法：**

当一个函数没有返回值时，你通常会见到其返回值类型是 void

```js
function warnUser(): void {
  alert('This is my warning message')
}

console.log(warnUser()) //undefined
```

!> 当一个函数的返回类型是 `void` 时，它的返回值是 `undefined`

## Never

never 类型表示的是那些永不存在的值的类型

例如:

1.never 类型是那些总是会抛出异常

2.根本就不会有返回值的函数表达式

3.箭头函数表达式的返回值类型

4.变量也可能是 never 类型，当它们被永不为真的类型保护所约束时

下面是一些返回 never 类型的函数：

```js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error('Something failed')
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```

## Object

`object`表示非原始类型，也就是除`number`,`string`,`boolean`之外的类型。

```js
// 案例一
function fn2(obj: object): object {
  console.log(obj)
  return {
    name: 'lisi',
    age: 33,
  }
}
console.log(fn2({ name: 'zhangsan', age: 12 }))

// 案例二
function fn2(obj: { name: string, age: number }): object {
  return {
    name: obj.name,
    age: obj.age,
  }
}
console.log(fn2({ name: 'zhangsan', age: 12 }))

// 案例三
interface people {
  name: string;
  age: number;
}

function fn2(obj: people): object {
  return {
    name: obj.name,
    age: obj.age,
  }
}
console.log(fn2({ name: 'zhangsan', age: 12 }))
```
