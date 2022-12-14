# 类型断言

## 类型断言 <!-- {docsify-ignore} -->

##### 为什么要用断言

> 有时候，当我们在用一个变量的时候不知道变量属于什么类型，但用的时候确实当指定类型来用的时候

##### 特点：

1.它没有运行时的影响，只是在编译阶段起作用

2.TypeScript 会假设你，程序员，已经进行了必须的检查

##### 尖括号语法

```js
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

##### as 语法

```js
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

!>在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的
