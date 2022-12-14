# 基础问题

## [ React 必须使用 JSX 吗 ]

React 并不强制要求使用 JSX。当不想在构建环境中配置有关 JSX 编译时，不在 React 中使用 JSX 会更加方便。

每个 JSX 元素只是调用 `React.createElement(component, props, ...children)` 的语法糖。因此，使用 JSX 可以完成的任何事情都可以通过纯 JavaScript 完成。

例如，用 JSX 编写的代码：

```JS
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}
ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```

可以编写为不使用 JSX 的代码：

```JS
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}
ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```

## [ 为什么使用 jsx 的组件中没有看到使用 react 却需要引入 react ]

本质上来说 JSX 是 `React.createElement(component, props, ...children)`方法的语法糖。在 React 17 之前，如果使用了 JSX，其实就是在使用 React， `babel` 会把组件转换为 `CreateElement` 形式。在 React 17 之后，就不再需要引入，因为 `babel` 已经可以帮我们自动引入 react。

## [ React 中的高阶组件运用了什么设计模式 ]

使用了装饰模式，高阶组件的运用：

```js
function withWindowWidth(BaseComponent) {
  class DerivedClass extends React.Component {
    state = {
      windowWidth: window.innerWidth,
    }
    onResize = () => {
      this.setState({
        windowWidth: window.innerWidth,
      })
    }
    componentDidMount() {
      window.addEventListener('resize', this.onResize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize)
    }
    render() {
      return <BaseComponent {...this.props} {...this.state} />
    }
  }
  return DerivedClass
}
const MyComponent = props => {
  return <div>Window width is: {props.windowWidth}</div>
}
export default withWindowWidth(MyComponent)
```

装饰模式的特点是不需要改变被装饰对象本身，而只是在外面套一个外壳接口。JavaScript 目前已经有了原生装饰器的提案，其用法如下：

```js
@testable
class MyTestableClass {}
```

## [ 类组件和函数组件有何不同 ]

**相同点**

- 组件名首字母必须大写
- 返回的组件只能有一个根元素
- 都不能修改 props

**不同点**

**类组件**

基于类的组件是 ES6 类，它扩展了 React 的 Component 类，并且至少实现了`render()`方法。类组件使用过程中，需要实例化，函数组件不需要。

```js
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

**函数组件（无状态组件）**

函数组件是无状态的，没有 this，没有生命周期，没有状态 state。相比与类组件更简单、性能更好。

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

## [ state 和 props 区别是啥 ]

- state 是组件自己管理数据，控制自己的状态，可变
- props 是外部传入的数据参数，不可变
- 没有 state 的叫做无状态组件，有 state 的叫做有状态组件
- 多用 props，少用 state，也就是多写无状态组件

