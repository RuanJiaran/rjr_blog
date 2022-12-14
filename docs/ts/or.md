# 联合类型

## 定义 <!--{docsify-ignore-all}-->

```js
function padLeft(value: string, padding: string | number) {}

let indentedString = padLeft('Hello world', 3)
```

联合类型表示一个值可以是几种类型之一。 我们用竖线（`|`）分隔每个类型，所以 number | string 表示一个值可以是 number 或 string。

!>注意：如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

```js
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
```

`swim()`方法不是`Bird`和`Fish`接口共有的方法，所以调用的时候会报错。
