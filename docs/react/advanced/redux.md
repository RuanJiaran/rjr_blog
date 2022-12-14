# Redux

## 是什么

`React`是用于构建用户界面的，帮助我们解决渲染`DOM`的过程

而在整个应用中会存在很多个组件，每个组件的`state`是由自身进行管理，包括组件定义自身的`state`、组件之间的通信通过`props`传递、使用`Context`实现数据共享

如果让每个组件都存储自身相关的状态，理论上来讲不会影响应用的运行，但在开发及后续维护阶段，我们将花费大量精力去查询状态的变化过程

这种情况下，如果将所有的状态进行集中管理，当需要更新状态的时候，仅需要对这个管理集中处理，而不用去关心状态是如何分发到每一个组件内部的

`redux`就是一个实现上述集中管理的容器，遵循三大基本原则：

- 单一数据源
- state 是只读的
- 使用纯函数来执行修改

注意的是，`redux`并不是只应用在`react`中，还与其他界面库一起使用，如`Vue`

## 基本用法

##### 安装

```js
npm install --save redux
npm install --save react-redux
```

##### Provider

使用 `<Provider>` 包裹项目根组件，使所有容器都可以访问 store。

**`index.tsx`**

```jsx
import store from './store/index.ts'


<Provider store = {store}>
    <App />
<Provider>
```

##### connect

connect 方法将 store 上的 getState 和 dispatch 包装成组件的 props

```js
import { connect } from 'react-redux'

class MyComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        // 这样子渲染的其实就是state.bar的数据了
        <div>this.props.foo</div>
        <button onClick={this.props.onClick}>点击increase</button>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    foo: state.bar,
  }
}

const mapDispatchToProps = dispatch => {
  // 默认传递参数就是dispatch
  return {
    onClick: () => {
      dispatch({
        type: 'increatment',
      })
    },
  }
}

connect(mapStateToProps, mapDispatchToProps)(MyComponent)

export default MyComponent
```

##### store

创建一个 `store` 的公共数据区域

```js
import { createStore } from 'redux' // 引入一个第三方的方法
import reducer from './store/reducer.ts'

const store = createStore(reducer) // 创建数据的公共存储区域（管理员）

export default store
```

##### reducer

还需要创建一个记录本去辅助管理数据，也就是`reduecer`，本质就是一个函数，接收两个参数`state`，`action`，返回`state`

```js
function todos(state = {}, action) {
  switch (action.type) {
    case 'increatment':
      return {
        ...state,
        count: count++,
      }
    default:
      return state
  }
}

export default function reducer(state = {}, action) {
  return {
    todos: todos(state.todos, action),
  }
}
```

## 异步用法（redux-thunk）

`redux-thunk`是官网推荐的异步处理中间件

默认情况下的`dispatch(action)`，`action`需要是一个`JavaScript`的对象

`redux-thunk`中间件会判断你当前传进来的数据类型，如果是一个函数，将会给函数传入参数值（dispatch，getState）

- dispatch 函数用于我们之后再次派发 action
- getState 函数考虑到我们之后的一些操作需要依赖原来的状态，用于让我们可以获取之前的一些状态

安装

```js
npm install redux-thunk
```

修改 store

```js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/reducer.ts'

const store = createStore(reducer, applyMiddleware(thunk))
```

异步调用示例

```js
const getHomeMultidataAction = () => {
  return dispatch => {
    axios.get('http://xxx.xx.xx.xx/test').then(res => {
      const data = res.data.data
      dispatch(changeBannersAction(data.banner.list))
      dispatch(changeRecommendsAction(data.recommend.list))
    })
  }
}

store.dispatch(getHomeMultidataAction())
```

## redux-logger

如果想要实现一个日志功能，则可以使用现成的`redux-logger`

```js
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
const logger = createLogger()

const store = createStore(reducer, applyMiddleware(logger))
```

这样我们就能简单通过中间件函数实现日志记录的信息
