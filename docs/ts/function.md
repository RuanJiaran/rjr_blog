# 函数

## 定义函数 <!-- {docsify-ignore-all} -->

> 我们可以给每个参数添加类型之后再为函数本身添加返回值类型

ts 中有两种定义函数的方式，分别是`函数声明`和`函数表达式`

##### 函数声明方式定义函数

```js
function add(x: number, y: number): number {
  return x + y
}
```

##### 函数表达式方式定义函数

```js
// 匿名函数
let myAdd = function (x: number, y: number): number {
  return x + y
}
```

!>TypeScript 能够根据返回语句自动推断出返回值类型，因此我们通常省略它

上面函数表达式方式定义的函数省略了返回值类型的定义，下面我们来书写完整函数类型

```js
// 普通函数形式
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

// 箭头函数形式
let myAdd: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y
}

// 下面分步骤实现
let add: (x: number, y: number) => number // 定义函数的结构

add = (x: number, y: number): number => {
  // 定义函数
  return x + y
}
```

## 函数结构定义，高级用法

```typescript
type userType = {
  //定义函数参数结构类型
  name: string
  age: number
}

type userAddFunc = (user: userType) => userType //定义函数结构类型

let addUser: userAddFunc = (u: userType): userType => {
  //定义函数
  return u
}

let ret: userType = addUser({ name: 'rjr', age: 22 }) // 调用函数
console.log(ret) // { name: 'rjr', age: 22 }
```

## 可选参数和默认参数

##### 可选参数

TypeScript 里我们可以在参数名旁使用`?`实现可选参数的功能。 比如，我们想让 last name 是可选的：

```js
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

let result1 = buildName('Bob') // works correctly now
let result2 = buildName('Bob', 'Adams', 'Sr.') // error, too many parameters
let result3 = buildName('Bob', 'Adams') // ah, just right
```

##### 默认值参数

!>带默认值的参数不需要放在必须参数的后面

在 TypeScript 里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是`undefined`时

如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined 值来获得默认值。例如：

```js
function buildName(firstName = 'Will', lastName: string) {
  return firstName + ' ' + lastName
}

let result1 = buildName('Bob') // error, too few parameters
let result2 = buildName('Bob', 'Adams', 'Sr.') // error, too many parameters
let result3 = buildName('Bob', 'Adams') // okay and returns "Bob Adams"
let result4 = buildName(undefined, 'Adams') // okay and returns "Will Adams"
```

## 剩余参数

在 TypeScript 里，你可以把所有参数以`...`收集到一个变量里

```js
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')
```

这个省略号也会在带有剩余参数的函数类型定义上使用到：

```js
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName
```
