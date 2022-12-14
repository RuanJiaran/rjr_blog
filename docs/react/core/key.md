# key 的作用

## 是什么

首先，先给出`react`组件中进行列表渲染的一个示例：

```jsx
const data = [
  { id: 0, name: 'abc' },
  { id: 1, name: 'def' },
  { id: 2, name: 'ghi' },
  { id: 3, name: 'jkl' },
];

const ListItem = (props) => {
  return <li>{props.name}</li>;
};

const List = () => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem name={item.name}></ListItem>
      ))}
    </ul>
  );
};
```

然后在输出就可以看到`react`所提示的警告信息：

```tex
Each child in a list should have a unique "key" prop.
```

根据意思就可以得到渲染列表的每一个子元素都应该需要一个唯一的`key`值

在这里可以使用列表的`id`属性作为`key`值以解决上面这个警告

```jsx
const List = () => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem name={item.name} key={item.id}></ListItem>
      ))}
    </ul>
  );
};
```

## 作用

跟`Vue`一样，`React` 也存在 `Diff`算法，而元素`key`属性的作用是用于判断元素是新创建的还是被移动的元素，从而减少不必要的元素渲染

因此`key`的值需要为每一个元素赋予一个确定的标识

如果列表数据渲染中，在数据后面插入一条数据，`key`作用并不大，如下：

```jsx
this.state = {
    numbers:[111,222,333]
}

insertMovie() {
  const newMovies = [...this.state.numbers, 444];
  this.setState({
    movies: newMovies
  })
}

<ul>
    {
        this.state.movies.map((item, index) => {
            return <li>{item}</li>
        })
    }
</ul>
```

前面的元素在`diff`算法中，前面的元素由于是完全相同的，并不会产生删除创建操作，在最后一个比较的时候，则需要插入到新的`DOM`树中

因此，在这种情况下，元素有无`key`属性意义并不大

下面再来看看在前面插入数据时，使用`key`与不使用`key`的区别：

```js
insertMovie() {
  const newMovies = [000 ,...this.state.numbers];
  this.setState({
    movies: newMovies
  })
}
```

当拥有`key`的时候，`react`根据`key`属性匹配原有树上的子元素以及最新树上的子元素，像上述情况只需要将 000 元素插入到最前面位置

当没有`key`的时候，所有的`li`标签都需要进行修改

同样，并不是拥有`key`值代表性能越高，如果说只是文本内容改变了，不写`key`反而性能和效率更高

主要是因为不写`key`是将所有的文本内容替换一下，节点不会发生变化

而写`key`则涉及到了节点的增和删，发现旧`key`不存在了，则将其删除，新`key`在之前没有，则插入，这就增加性能的开销

## 为什么不能使用 index 作为 key

```tsx
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
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

  <!-- Don't use this in production: -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function App() {
      const [inputs, setInputs] = React.useState([
        {
          id: 1,
          name: 'name1',
          value: '1',
        },
        {
          id: 2,
          name: 'name2',
          value: '2',
        },
        {
          id: 3,
          name: 'name3',
          value: '3',
        },
      ])
      React.useEffect(() => {}, [])

      const delFirstInput = () => {
        const newInputs = JSON.parse(JSON.stringify(inputs))
        newInputs.shift()
        setInputs(newInputs)
      }

      return (
        <>
          {inputs.map((item, index) => {
            return (
              <div key={index}>
                {item.name}
                <input />
              </div>
            )
          })}
          <div>
            <button onClick={delFirstInput}>删除第一项</button>
          </div>
        </>
      )
    }
  </script>
</html>

<script type="text/babel">
  // const root = ReactDOM.createRoot(document.getElementById('root'))
  // root.render(<App />)

  ReactDOM.render(<App />, document.getElementById('root'))
</script>
```

点击删除第一项界面显示的结果

![image-20221023215958815](/img/image-20221023215958815.png)

页面渲染好了之后，3 个 input 输入框依次输入 1，2，3，当我们用 index 作为 key 的时候，点击删除第一项按钮会发现，左侧文字正确改变，input 输入框最后一项没了，这不是我们希望的样子。 因为当我们使用 index 作为 key 时，此时 key 为 0、1、2，删掉第一项后 key 变为 0、1，此时 react 在执行 diff 算法过程中，任务 key=0 存在，只需要更新子节点的值，所以左侧的 name 成功改变，而 input 的值非受控，不会更新。同时在对比计算中少了 key=2 这项，删除了最后一项。

## 总结

良好使用`key`属性是性能优化的非常关键的一步，注意事项为：

- key 应该是唯一的
- key 不要使用随机值（随机数在下一次 render 时，会重新生成一个数字）
- 使用 index 作为 key 值，对性能没有优化

`react`判断`key`的流程具体如下图：

![img](/img/3b9afe10-dd69-11eb-ab90-d9ae814b240d.png)
