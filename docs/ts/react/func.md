## 函数组件的类型及组件属性

函数组件的类型用 react 的 FC 表示

```tsx
import React, { FC } from 'react'

type Props = {
  name: string
  age: number
}

const Hello: FC<Props> = ({ name, age }) => {
  return (
    <div>
      你好，我叫{name},今年{age}岁
    </div>
  )
}

// 简写
const Hello = ({ name, age }: Props) => {
  return (
    <div>
      你好，我叫{name},今年{age}岁
    </div>
  )
}
```

## 事件绑定和事件对象

##### click 事件

```tsx
;<button onClick={attention}>关注</button>

const attention = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('关注', e.currentTarget)
}
```

##### change 事件完整代码

```jsx
import React, { FC, useState } from 'react'

type changeAgeFC = (age: number) => void

type UserProps = {
  name: string
  age: number
  changeAge: changeAgeFC
}

const Hello: FC<UserProps> = ({ name, age, changeAge }) => {
  const attention = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('关注', e.currentTarget)
  }
  const editAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    changeAge(parseInt(e.currentTarget.value))
  }
  return (
    <div>
      <div>你好，我叫{name},今年{age}岁</div>
      <button onClick={attention}>关注</button>
      <input onChange={editAge}></input>
    </div>
  )
}

function App() {
  const [age, setAge] = useState(20)
  const editAge: changeAgeFC = (age: number) => {
    setAge(age)
  }
  return (
    <div className="App">
      <Hello name="迪奥" age={age} changeAge={editAge}></Hello>
    </div>
  )
}

export default App
```

## 技巧

假如我们不知道事件的对象类型，那么我们可以在 jsx 中写事件处理程序（ `e=>{}`），然后把鼠标放到 e 上，利用 ts 的类型推断来查看事件对象类型。

![image-20220801172335728](/img/image-20220801172335728.png)
