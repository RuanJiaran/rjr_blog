# setState 执行机制

## setState 特性总结

- `setState` 第一个参数可以是一个对象，或者是一个函数。而第二个参数是一个回调函数，用于可以实时的获取到更新之后的数据。
- setState 第一个参数是函数的话，函数可以接收两个参数，最新的 state 和 props。

- 在组件生命周期或 React 合成事件中，setState 是异步的。
- 在 react18 以前 在 setTimeout，setInterval，Promise.then 或者原生 dom 事件中，setState 是同步。但是在 react18 以后优化了这个问题，setState 也是同步的。
- setState 是异步执行的，多个 setState 会合并只执行一次 render 页面重绘，updateDidUpdate 在 render 后执行，setState 的第二个参数回调函数是在最后执行的

## setState 用法

`setState`第一个参数可以是一个对象，或者是一个函数。而第二个参数是一个回调函数，用于可以实时的获取到更新之后的数据

```ts
// 第一个参数是一个对象
this.setState({ count: this.state.count + 1 });

// 第一个参数是一个函数，函数接收两个参数最新的state和组件的props
this.setState(
  (state, props) => {
    console.log('最新的state', state.count);
    return {
      count: state.count + 1,
    };
  },
  () => {
    console.log('执行setState的callback', this.state.count);
  }
);
```

## setState 的执行顺序

```ts
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Don't use this in production: -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          count: 0,
        }
      }

      componentDidUpdate() {
        console.log('update后', this.state.count)
      }

      add = () => {
        console.log('点击了异步+1')
        console.log('执行setState前', this.state.count)
        this.setState({ count: this.state.count + 1 })
        this.setState(
          (state, props) => {
            console.log('最新的state', state.count)
            return {
              count: state.count + 1,
            }
          },
          () => {
            console.log('执行setState的callback', this.state.count)
          }
        )
        console.log('执行setState后', this.state.count)
      }

      render() {
        console.log('render', this.state)
        return (
          <>
            {this.state.count}
            <div>
              <button onClick={this.add}>异步+1</button>
            </div>
          </>
        )
      }
    }
  </script>
</html>

<script type="text/babel">
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)
</script>
```

上面例子的执行结果

![image-20221023161354193](/img/image-20221023161354193.png)

**从上面的结果可以看出，setState 是异步执行的，多个 setState 会合并只执行一次 render 页面重绘，updateDidUpdate 在 render 后执行，setState 的第二个参数回调函数是在最后执行的**

## 更新类型

在使用`setState`更新数据的时候，`setState`的更新类型分成：

- 异步更新
- 同步更新

##### 异步更新

先举出一个例子：

```jsx
changeText() {
  this.setState({
    message: "你好啊"
  })
  console.log(this.state.message); // Hello World
}
```

从上面可以看到，最终打印结果为`Hello world`，并不能在执行完`setState`之后立马拿到最新的`state`的结果

如果想要立刻获取更新后的值，在第二个参数的回调中更新后会执行

```jsx
changeText() {
  this.setState({
    message: "你好啊"
  }, () => {
    console.log(this.state.message); // 你好啊
  });
}
```

##### 同步更新

同样先给出一个在`setTimeout`中更新的例子：

```jsx
changeText() {
  setTimeout(() => {
    this.setState({
      message: "你好啊
    });
    console.log(this.state.message); // 你好啊
  }, 0);
}
```

上面的例子中，可以看到更新是同步

再来举一个原生`DOM`事件的例子：

```jsx
componentDidMount() {
  const btnEl = document.getElementById("btn");
  btnEl.addEventListener('click', () => {
    this.setState({
      message: "你好啊,李银河"
    });
    console.log(this.state.message); // 你好啊,李银河
  })
}
```

### 小结

- 在组件生命周期或 React 合成事件中，setState 是异步
- 在 setTimeout，setInterval，Promise.then 或者原生 dom 事件中，setState 是同步。但是在 react18 后优化了这个问题，setState 也是同步的。

## setState 是什么原因决定异步还是同步的

this.state 是否异步，关键是看是否命中 batchUpdata 机制，命中就异步，未命中就同步。

关于 batchUpdate 机制咱们看下官网的主流程图：

![img](/img/v2-3dd589bd3985a388491899bdbcfe81d8_720w.jpg)

![img](/img/v2-5d6e8e2b2e108a665ac8fbbb3112f9d9_720w.jpg)

查看 batchUpdate 是否命中是决定 setState 异步或者同步的关键，如图所示，如果命中代表当前是异步，会执行保存组件到 dirtyComponents 中，如果没有命中会走右边，遍历所有 dirtyComponents 并执行调用和更新操作，当前就是同步。

##### 哪些能命中 batchUpdate 机制

- 生命周期和它调用的函数
- react 注册的事件和它调用的函数
- react 可以管理的入口命中的就是异步

##### 哪些不能命中 batchUpdate 机制

- setTimeout，setInterval 和他调用的函数
- 自定义 dom 事件和他调用的函数
- react 管不到的入口没命中就是同步

## 批量更新

同样先给出一个例子：

```jsx
handleClick = () => {
  this.setState({
    count: this.state.count + 1,
  });
  console.log(this.state.count); // 1

  this.setState({
    count: this.state.count + 1,
  });
  console.log(this.state.count); // 1

  this.setState({
    count: this.state.count + 1,
  });
  console.log(this.state.count); // 1
};
```

点击按钮触发事件，打印的都是 1，页面显示 `count` 的值为 2

对同一个值进行多次 `setState`， `setState` 的批量更新策略会对其进行覆盖，取最后一次的执行结果

上述的例子，实际等价于如下：

```js
Object.assign(
  previousState,
  {index: state.count+ 1},
  {index: state.count+ 1},
  ...
)
```

由于后面的数据会覆盖前面的更改，所以最终只加了一次

如果是下一个`state`依赖前一个`state`的话，推荐给`setState`一个参数传入一个`function`，如下：

```jsx
onClick = () => {
  this.setState((prevState, props) => {
    return { count: prevState.count + 1 };
  });
  this.setState((prevState, props) => {
    return { count: prevState.count + 1 };
  });
};
```

而在`setTimeout`或者原生`dom`事件中，由于是同步的操作，所以并不会进行覆盖现象

## 为什么 setState 是异步的

#### 1. 保证内部的一致性

即便 setState 能做到同步，react 对于 props 的更新依旧是异步，这是因为对于一个子组件而言，它只有等到父组件重新渲染了，它才知道最新的 props 是多少，所以让 setState 异步的另一个原因是为了让 state,props,refs 更新的行为与表现保持一致。我们假设有下面这段代码，它是同步执行：

```ts
console.log(this.state.value); //0
this.setState({ value: this.state.value + 1 });
console.log(this.state.value); //1
this.setState({ value: this.state.value + 1 });
console.log(this.state.value); //2
```

但现在我们有个场景，这个状态需要被多个兄弟组件使用，因此我们需要将其状态提升到父组件，以便于给多个兄弟组件共享：

```ts
console.log(this.props.value); //0
this.props.onIncrement();
console.log(this.props.value); //0
this.props.onIncrement();
console.log(this.props.value); //0
```

很遗憾上述代码并不能按照我们预期的执行，因为在同步模型中，this.state 会立刻更新，但是 this.props 并不会，而且在没有重新渲染父组件的情况下，我们没办法立刻更新 this.props，那要假设要做到每执行一次 onIncrement 能让兄弟组件都拿到最新的 props，唯一的办法就是立刻重新渲染父组件，而这种场景下，已经与我们最初的批量合并处理减少重复渲染相违背了。

而为了解决这个问题，react 将 this.props 与 this.state 更新设计为异步，这也让状态提升时对于状态的管理更合理与更安全。

#### 2. 性能优化

如果 setState 是同步的话，那么对于状态的改变一定会按照 setState 调用顺序来执行并改变，但事实上 react 会根据 setState 不同的调用源，为这些 setState 分配不同的优先级，调用源包含事件处理，网络请求，动画等等。

官方给了一个这样的例子，比如我们在一个聊天窗口聊天，输入的信息变化会触发 setState，而此时我们搜到了一条新消息，新消息也会触发 setState，那么这里更好的做法是延迟新消息的 setState 的执行，降低其优先级，这样就能避免输入过程中因为新消息触发的渲染，导致输入过程中抖动以及延迟。如果给某些更新分配更低的优先级，那么就可以把它们拆分成几毫秒的渲染块，这样用户也不会察觉到。

#### 3. 异步创造更多可能性

异步除了性能优化之外，异步也为未来的 react 升级埋下更多可能性。比如我们有个需要，需要从页面 A 导航到页面 B，那么这时候你可能需要做一个加载动画，等待 B 页面渲染。但如果导航切换特别快，闪烁一下加载动画又会降低用户体验。

而站在异步的基础上，当我们调用 setState 去渲染一个新页面，因为异步的缘故，react 可以在后台渲染这个新页面，而且不去阻塞旧页面的交互，假设等待时间过长，我们还是可以展示 loading，但如果等待耗时非常短暂，setState 可以因为异步批量合并的缘故减少渲染，不会让页面频繁闪动，从而提升用户体验。
