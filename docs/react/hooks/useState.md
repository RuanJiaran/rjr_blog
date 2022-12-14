# useState

不要在循环，条件或[嵌套](https://so.csdn.net/so/search?q=嵌套&spm=1001.2101.3001.7020)函数中调用 Hook， 确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 `useState` 和 `useEffect` 调用之间保持 hook 状态的正确。***必须仅在函数组件或自定义钩子内部调用 useState()。***

## 用法

```tsx
const [count,setCount] = useState(0)
// 修改 count 的两种用法
setCount(count+1)
setCount((preCount)=>preCount+1)
```

## 有什么好处

- 可以保存变量状态
- 变量状态改变，页面会自动重新渲染

## 为什么不能在条件，循环中调用

为了保证多个 useState 在每次页面重新渲染时的调用顺序都一致，这样拿到的返回值和变量就都能对应上。

## useState存入的值只是该值的引用（引用类型）

```tsx
const textObj = {name:"dx"}

const [useState1, setUseState1] = useState(textObj )
const [useState2, setUseState2] = useState(textObj )

/** usestate的操作不要放在函数的最外层，这里只是简单的代码展示，你可以将set操作放在某个函数里面 */
setUseState1((oldUseState1) => {
    oldUseState1.age = 18
    return {...oldUseState1}
})

useEffect(() => {
    /** 改变一个会导致两个都改变,深浅拷贝的问题 */
    console.log(useState1)  // {name: "dx", age: 18}
    console.log(useState2)  // {name: "dx", age: 18}
},[
    useState1
])
```

#### ## useState 如果保存引用数据，useEffect检测不到变化

把上面的例子做一个小改动，`setUseState1` 里面 `return oldUseState1` 而不是 `return {...oldUseState1}`

```tsx
const textObj = {name:"dx"}

const [useState1, setUseState1] = useState(textObj )

/** usestate的操作不要放在函数的最外层，这里只是简单的代码展示，你可以将set操作放在某个函数里面 */
setUseState1((oldUseState1) => {
    oldUseState1.age = 18
    return oldUseState1
})

useEffect(() => {
    /** 改变一个会导致两个都改变,深浅拷贝的问题 */
    console.log(useState1)  
},[
    useState1
])

//结果是没有任何反应
```

#### ## useState 无法保存一个函数

```tsx
const logname = () => {
    console.log({name: "dx",age: "18"})
}

/** usestate保存函数测试 */
const [func, setFunc] = useState(logname);

useEffect(() => {
    console.log(func)
}, [func])

// {name: "dx",age: "18"}
// undefined
```

上面代码中从未调用过 logname ，结果 logname 却被执行了，并且 useEffect 里打印的是 undefined

对上面例子修改下

```tsx
const logname = () => {
    console.log({name: "dx",age: "18"})
    return {name: "yx", age: "17"}
}

/** usestate保存函数测试 */
const [func, setFunc] = useState(logname);

useEffect(() => {
    console.log(func)
}, [func])

// {name: "dx",age: "18"}
// {name: "yx", age: "17"}
```

很明显，在 useState 中，函数会自动调用，并且保存函数返回的值，而不能保存函数本身。

**怎么解决 useState 无法保存函数的问题呢**

1. 把函数放在对象内的某个属性上

```tsx
const logname = () => {
    return {name: "yx", age: "17"}
}

/** usestate保存函数测试 */
const [func, setFunc] = useState({fc:logname});

useEffect(() => {
    console.log(func.fc)
}, [func.fc])
```

1. 使用useCallback这个hook

```tsx
const lognameFC = useCallback(()=>{
    const logname = () => {
        return {name: "yx", age: "17"}
    }
    return logname
},[])

useEffect(() => {
    console.log(lognameFC())
}, [lognameFC])
```

## 手写 useState 实现原理

简单版本

```tsx
function useState(intlValue) {
    let hookState = intlValue
    //利用闭包保存函数
    function setState(newState) {
        hookState = newState 
    }

    return [hookState, setState]
}

const [count, setCount] = useState(1)
const [number, setNumber] = useState(1)
function useState(init) {
    let state;
    // useState 无法保存函数
    if(typeof init === "function") {
        state = init()
    } else {
        state = init
    }

    const setState = (change) => {
        // 判断一下是否传递过来的是函数
        if(typeof change === "function") {
            // 如果是函数，调用，并将之前的state传过去，接收到的返回值作为新的state并赋值
            state = change(state)
        } else {
            // 如果不是函数，直接赋值
            state = change;
        }
    }	
    return [state, setState]
}
```

