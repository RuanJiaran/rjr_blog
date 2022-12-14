# diff 算法

## 为什么要用 Diff 算法

- **状态侦测策略**

  Vue.js 目前对状态侦测策略采用了中等粒度。当状态发生变化时，只通知到组件级别。如果没有虚拟 DOM，只要组件使用的众多状态中有一个状态发生了变化，那么整个组件就要重新渲染。这明显浪费性能。

- **操作 DOM 慢**

  1. **线程之间通信**

     因为 DOM 是属于渲染引擎中的东西，而 JS 又是 JS 引擎中的东西。当我们通过 JS 操作 DOM 的时候，涉及到了两个线程之间的通信，那么势必会带来一些性能上的损耗。操作 DOM 次数一多，也就等同于一直在进行线程之间的通信

  2. **回流重绘**

     操作 DOM 可能还会带来重绘回流的情况，所以也就导致了性能上的问题。

- **总结**

​ 生成 vnode 和进行比对的过程也需要消耗时间，但是 DOM 操作的速度远不如 JS 的运算速度。因此把大量的 DOM 操作搬运到 JS 中，使 用 patch 算法来计算出真正需要更新的节点，最大限度地减少 DOM 操作。

​ 本质就是用 JS 的运算成本来替换 DOM 操作的执行成本。

## 基本思路

- 把新节点中变化的内容渲染到真实 DOM，最后返回新节点作为下一次处理的旧节点

## Diff 算法对比策略

vue 采用的是**同层比较，深度优先**的策略。

- **同层对比**

​ Diff 算法比较只会在同层级进行, 不会跨层级比较

- **深度优先**

  比对到相同的节点，会对两个节点的所有子节点都比较完成，才会回到同层的节点继续比对

- **判断相同（复用）**

​ 两个虚拟节点的标签类型和 key 值均相同，但 input 元素还要看 type 属性。如果相同会进行复用，只修改内部的一些属性。

![img](/img/1639740741787175.png)

## Diff 算法三大步骤

新节点与旧节点的比较主要是围绕三件事来达到渲染目的

- **创建新节点：**新的`VNode`中有而旧的`oldVNode`中没有，就在旧的`oldVNode`中创建。
- **删除废节点：** 新的`VNode`中没有而旧的`oldVNode`中有，就从旧的`oldVNode`中删除。
- **更新已有节点：**新的`VNode`和旧的`oldVNode`中都有，就以新的`VNode`为准，更新旧的`oldVNode`。

## 创建新节点

当新节点有的，旧节点没有，这就意味着这是全新的内容节点。只有元素节点，文本节点，注释节点才能被创建插入到 DOM 中。

`VNode`类可以描述 6 种类型的节点，而实际上只有 3 种类型的节点能够被创建并插入到`DOM`中，它们分别是：元素节点、文本节点、注释节点。

```js
// 源码位置: /src/core/vdom/patch.js
function createElm(vnode, parentElm, refElm) {
  const data = vnode.data
  const children = vnode.children
  const tag = vnode.tag
  if (isDef(tag)) {
    vnode.elm = nodeOps.createElement(tag, vnode) // 创建元素节点
    createChildren(vnode, children, insertedVnodeQueue) // 创建元素节点的子节点
    insert(parentElm, vnode.elm, refElm) // 插入到DOM中
  } else if (isTrue(vnode.isComment)) {
    vnode.elm = nodeOps.createComment(vnode.text) // 创建注释节点
    insert(parentElm, vnode.elm, refElm) // 插入到DOM中
  } else {
    vnode.elm = nodeOps.createTextNode(vnode.text) // 创建文本节点
    insert(parentElm, vnode.elm, refElm) // 插入到DOM中
  }
}
```

从上面代码中，我们可以看出：

- 判断是否为元素节点只需判断该`VNode`节点是否有`tag`标签即可。如果有`tag`属性即认为是元素节点，则调用`createElement`方法创建元素节点，通常元素节点还会有子节点，那就递归遍历创建所有子节点，将所有子节点创建好之后`insert`插入到当前元素节点里面，最后把当前元素节点插入到`DOM`中。
- 判断是否为注释节点，只需判断`VNode`的`isComment`属性是否为`true`即可，若为`true`则为注释节点，则调用`createComment`方法创建注释节点，再插入到`DOM`中。
- 如果既不是元素节点，也不是注释节点，那就认为是文本节点，则调用`createTextNode`方法创建文本节点，再插入到`DOM`中。

> 代码中的`nodeOps`是`Vue`为了跨平台兼容性，对所有节点操作进行了封装，例如`nodeOps.createTextNode()`在浏览器端等同于`document.createTextNode()`

以上就完成了创建节点的操作，其完整流程图如下： ![img](/img/2.02d5c7b1.png)

## 删除旧节点

当旧节点有，而新节点没有，那就意味着，新节点放弃了旧节点的一部分。删除节点会连带的删除旧节点的子节点。

```javascript
function removeNode(el) {
  const parent = nodeOps.parentNode(el) // 获取父节点
  if (isDef(parent)) {
    nodeOps.removeChild(parent, el) // 调用父节点的removeChild方法
  }
}
```

删除节点非常简单，只需在要删除节点的父元素上调用`removeChild`方法即可。源码如下：

## 更新节点

新的节点与旧的的节点都有，那么一切以新的为准，更新旧节点。如何判断是否需要更新节点呢?

## 如何比较新旧节点是否一致呢

```js
function sameVnode(a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory &&
    ((a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)) || //对input节点的处理
      (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error)))
  )
}

//判断两个节点是否是同一种 input 输入类型
function sameInputType(a, b) {
  if (a.tag !== 'input') return true
  let i
  const typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type
  const typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type
  //input type 相同或者两个type都是text
  return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB))
}
```

可以看到，两个节点是否相同是需要比较**标签(tag)**，**属性(在 vue 中是用 data 表示 vnode 中的属性 props)**, **注释节点(isComment)** 的,另外碰到 input 的话，是会做特殊处理的。

- 判断新节点与旧节点是否完全一致,一样的话就不需要更新

```js
// 判断vnode与oldVnode是否完全一样
if (oldVnode === vnode) {
  return
}
```

- 判断新节点与旧节点是否是静态节点，key 是否一样，是否是克隆节点(如果不是克隆节点，那么意味着渲染函数被重置了，这个时候需要重新渲染)或者是否设置了 once 属性,满足条件的话替换 componentInstance

##### 什么是静态节点

```html
<p>我是不会变化的文字</p>
```

上面这个节点里面只包含了纯文字，没有任何可变的变量，这也就是说，不管数据再怎么变化，只要这个节点第一次渲染了，那么它以后就永远不会发生变化，这是因为它不包含任何变量，所以数据发生任何变化都与它无关。我们把这种节点称之为静态节点。

```js
// 是否是静态节点，key是否一样，是否是克隆节点或者是否设置了once属性
if (
  isTrue(vnode.isStatic) &&
  isTrue(oldVnode.isStatic) &&
  vnode.key === oldVnode.key &&
  (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
) {
  vnode.componentInstance = oldVnode.componentInstance
  return
}
```

- 判断新节点是否有文本(通过 text 属性判断)，如果有文本那么需要比较同层级旧节点，如果旧节点文本不同于新节点文本，那么采用新的文本内容。如果新节点没有文本，那么后面需要对子节点的相关情况进行判断

```js
//判断新节点是否有文本
if (isUndef(vnode.text)) {
  //如果没有文本，处理子节点的相关代码
  ....
} else if (oldVnode.text !== vnode.text) {
  //新节点文本替换旧节点文本
  nodeOps.setTextContent(elm, vnode.text)
}
```

- 判断新节点与旧节点的子节点相关状况。这里又能分为 4 种情况
  - 新节点与旧节点**都有子节点**
  - **只有新节点有**子节点
  - **只有旧节点有**子节点
  - 新节点与旧节点**都没有子节点**

**都有子节点**

对于都有子节点的情况，需要对新旧节点做比较，如果他们不相同，那么需要进行 diff 操作，在 vue 中这里就是 updateChildren 方法，后面会详细再讲，子节点的比较主要是双端比较。

```js
//判断新节点是否有文本
if (isUndef(vnode.text)) {
  //新旧节点都有子节点情况下，如果新旧子节点不相同，那么进行子节点的比较，就是updateChildren方法
  if (isDef(oldCh) && isDef(ch)) {
    if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
  }
} else if (oldVnode.text !== vnode.text) {
  //新节点文本替换旧节点文本
  nodeOps.setTextContent(elm, vnode.text)
}
```

**只有新节点有子节点**

只有新节点有子节点，那么就代表着这是新增的内容，那么就是新增一个子节点到 DOM，新增之前还会做一个重复 key 的检测，并做出提醒，同时还要考虑，旧节点如果只是一个文本节点，没有子节点的情况，这种情况下就需要清空旧节点的文本内容。

```js
//只有新节点有子节点
if (isDef(ch)) {
  //检查重复key
  if (process.env.NODE_ENV !== 'production') {
    checkDuplicateKeys(ch)
  }
  //清除旧节点文本
  if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
  //添加新节点
  addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
}

//检查重复key
function checkDuplicateKeys(children) {
  const seenKeys = {}
  for (let i = 0; i < children.length; i++) {
    const vnode = children[i]
    //子节点每一个Key
    const key = vnode.key
    if (isDef(key)) {
      if (seenKeys[key]) {
        warn(`Duplicate keys detected: '${key}'. This may cause an update error.`, vnode.context)
      } else {
        seenKeys[key] = true
      }
    }
  }
}
```

**只有旧节点有子节点**

只有旧节点有，那就说明，新节点抛弃了旧节点的子节点，所以需要删除旧节点的子节点

```js
if (isDef(oldCh)) {
  //删除旧节点
  removeVnodes(oldCh, 0, oldCh.length - 1)
}
```

**都没有子节点**

这个时候需要对旧节点文本进行判断，看旧节点是否有文本，如果有就清空

```js
if (isDef(oldVnode.text)) {
  //清空
  nodeOps.setTextContent(elm, '')
}
```

整体的逻辑代码如下

```js
function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
  // 判断vnode与oldVnode是否完全一样
  if (oldVnode === vnode) {
    return
  }

  if (isDef(vnode.elm) && isDef(ownerArray)) {
    // 克隆重用节点
    vnode = ownerArray[index] = cloneVNode(vnode)
  }

  const elm = (vnode.elm = oldVnode.elm)

  if (isTrue(oldVnode.isAsyncPlaceholder)) {
    if (isDef(vnode.asyncFactory.resolved)) {
      hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
    } else {
      vnode.isAsyncPlaceholder = true
    }
    return
  }
  // 是否是静态节点，key是否一样，是否是克隆节点或者是否设置了once属性
  if (
    isTrue(vnode.isStatic) &&
    isTrue(oldVnode.isStatic) &&
    vnode.key === oldVnode.key &&
    (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
  ) {
    vnode.componentInstance = oldVnode.componentInstance
    return
  }

  let i
  const data = vnode.data

  if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
    i(oldVnode, vnode)
  }

  const oldCh = oldVnode.children
  const ch = vnode.children

  if (isDef(data) && isPatchable(vnode)) {
    //调用update回调以及update钩子
    for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
    if (isDef((i = data.hook)) && isDef((i = i.update))) i(oldVnode, vnode)
  }
  //判断新节点是否有文本
  if (isUndef(vnode.text)) {
    //新旧节点都有子节点情况下，如果新旧子节点不相同，那么进行子节点的比较，就是updateChildren方法
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
    } else if (isDef(ch)) {
      //只有新节点有子节点
      if (process.env.NODE_ENV !== 'production') {
        //重复Key检测
        checkDuplicateKeys(ch)
      }
      //清除旧节点文本
      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
      //添加新节点
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
    } else if (isDef(oldCh)) {
      //只有旧节点有子节点，删除旧节点
      removeVnodes(oldCh, 0, oldCh.length - 1)
    } else if (isDef(oldVnode.text)) {
      //新旧节点都无子节点
      nodeOps.setTextContent(elm, '')
    }
  } else if (oldVnode.text !== vnode.text) {
    //新节点文本替换旧节点文本
    nodeOps.setTextContent(elm, vnode.text)
  }
  if (isDef(data)) {
    if (isDef((i = data.hook)) && isDef((i = i.postpatch))) i(oldVnode, vnode)
  }
}
```

流程图

![3.png](/img/1639740725148903.png)

![4.png](/img/1639740728332024.png)

## 子节点的比较更新 updateChildren

新旧节点都有子节点的情况下，这个时候是需要调用 updateChildren 方法来比较更新子节点的。所以在数据上，新旧节点子节点，就保存为了两个数组。

```js
const oldCh = [oldVnode1, oldVnode2, oldVnode3]
const newCh = [newVnode1, newVnode2, newVnode3]
```

子节点更新采用的是**双端比较**的策略，什么是双端比较呢，就是新旧节点比较是通过互相比较首尾元素(存在 4 种比较)，然后向中间靠拢比较(**newStartIdx,与 oldStartIdx 递增,newEndIdx 与 oldEndIdx 递减**)的策略。

**比较过程**

![5.png](/img/1639740716480039.png)

**向中间靠拢**

![6.png](/img/1639740712230826.png)

这里对上面出现的**新前，新后，旧前，旧后**做一下说明

- 新前，指的是**新节点未处理**的子节点数组中的**第一个**元素，对应到 vue 源码中的**newStartVnode**
- 新后，指的是**新节点未处理**的子节点数组中的**最后一个**元素,对应到 vue 源码中的**newEndVnode**
- 旧前，指的是**旧节点未处理**的子节点数组中的**第一个**元素,对应到 vue 源码中的**oldStartVnode**
- 旧后，指的是**旧节点未处理**的子节点数组中的**最后一个**元素,对应到 vue 源码中的**oldEndVnode**

**子节点比较过程**

接下来对上面的比较过程以及比较后做的操作做下说明

- **新前与旧前**的比较，如果他们相同，那么进行上面说到的 patchVnode 更新操作，然后新旧节点各向后一步，进行第二项的比较...直到遇到不同才会换种比较方式

![7.png](/img/1639740705750721.png)

```js
if (sameVnode(oldStartVnode, newStartVnode)) {
  // 更新子节点
  patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
  // 新旧各向后一步
  oldStartVnode = oldCh[++oldStartIdx]
  newStartVnode = newCh[++newStartIdx]
}
```

- **新后与旧后**的比较，如果他们相同，同样进行 pathchVnode 更新，然后新旧各向前一步，进行前一项的比较...直到遇到不同，才会换比较方式

![8.png](/img/1639740701371438.png)

```js
if (sameVnode(oldEndVnode, newEndVnode)) {
  //更新子节点
  patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
  // 新旧向前
  oldEndVnode = oldCh[--oldEndIdx]
  newEndVnode = newCh[--newEndIdx]
}
```

- **新后与旧前**的比较，如果它们相同，就进行更新操作，然后将旧前移动到**所有未处理旧节点数组最后面**，使旧前与新后位置保持一致，然后双方一起向中间靠拢，新向前，旧向后。如果不同会继续切换比较方式

![9.png](/img/1639740697376500.png)

```js
if (sameVnode(oldStartVnode, newEndVnode)) {
  patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
  //将旧子节点数组第一个子节点移动插入到最后
  canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
  //旧向后
  oldStartVnode = oldCh[++oldStartIdx]
  //新向前
  newEndVnode = newCh[--newEndIdx]
```

- **新前与旧后**的比较，如果他们相同，就进行更新，然后将旧后移动到**所有未处理旧节点数组最前面**，是旧后与新前位置保持一致，，然后新向后，旧向前，继续向中间靠拢。继续比较剩余的节点。如果不同，就使用传统的循环遍历查找。

![10.png](/img/1639740693486260.png)

```js
if (sameVnode(oldEndVnode, newStartVnode)) {
  patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
  //将旧后移动插入到最前
  canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
  //旧向前
  oldEndVnode = oldCh[--oldEndIdx]
  //新向后
  newStartVnode = newCh[++newStartIdx]
}
```

- **循环遍历查找**，上面四种都没找到的情况下，会通过 key 去查找匹配。

进行到这一步对于没有设置 key 的节点，第一次会通过 createKeyToOldIdx 建立 key 与 index 的映射 {key:index}

```js
// 对于没有设置key的节点，第一次会通过createKeyToOldIdx建立key与index的映射 {key:index}
if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
```

然后拿新节点的 key 与旧节点进行比较，找到 key 值匹配的节点的位置，这里需要注意的是，如果新节点也没 key，那么就会执行 findIdxInOld 方法，从头到尾遍历匹配旧节点

```js
//通过新节点的key,找到新节点在旧节点中所在的位置下标,如果没有设置key，会执行遍历操作寻找
idxInOld = isDef(newStartVnode.key)
  ? oldKeyToIdx[newStartVnode.key]
  : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)

//findIdxInOld方法
function findIdxInOld(node, oldCh, start, end) {
  for (let i = start; i < end; i++) {
    const c = oldCh[i]
    //找到相同节点下标
    if (isDef(c) && sameVnode(node, c)) return i
  }
}
```

如果通过上面的方法，依旧没找到新节点与旧节点匹配的下标，那就说明这个节点是新节点，那就执行新增的操作。

```js
//如果新节点无法在旧节点中找到自己的位置下标,说明是新元素，执行新增操作
if (isUndef(idxInOld)) {
  createElm(
    newStartVnode,
    insertedVnodeQueue,
    parentElm,
    oldStartVnode.elm,
    false,
    newCh,
    newStartIdx
  )
}
```

如果找到了，那么说明在旧节点中找到了 key 值一样，或者节点和 key 都一样的旧节点。如果节点一样，那么在 patchVnode 之后，需要将旧节点**移动到所有未处理节点之前**，对于 key 一样，元素不同的节点，将其认为是新节点，执行新增操作。执行完成后，新节点向后一步。

![11.png](/img/1639740688813041.png)

```js
//如果新节点无法在旧节点中找到自己的位置下标,说明是新元素，执行新增操作
if (isUndef(idxInOld)) {
  // 新增元素
  createElm(
    newStartVnode,
    insertedVnodeQueue,
    parentElm,
    oldStartVnode.elm,
    false,
    newCh,
    newStartIdx
  )
} else {
  // 在旧节点中找到了key值一样的节点
  vnodeToMove = oldCh[idxInOld]
  if (sameVnode(vnodeToMove, newStartVnode)) {
    // 相同子节点更新操作
    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
    // 更新完将旧节点赋值undefined
    oldCh[idxInOld] = undefined
    //将旧节点移动到所有未处理节点之前
    canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
  } else {
    // 如果是相同的key，不同的元素，当做新节点，执行创建操作
    createElm(
      newStartVnode,
      insertedVnodeQueue,
      parentElm,
      oldStartVnode.elm,
      false,
      newCh,
      newStartIdx
    )
  }
}

//新节点向后
newStartVnode = newCh[++newStartIdx]
```

当完成对旧节点的遍历，但是新节点还没完成遍历,那就说明后续的都是新增节点，执行新增操作，如果完成对新节点遍历，旧节点还没完成遍历，那么说明旧节点出现冗余节点，执行删除操作。

```js
//完成对旧节点的遍历，但是新节点还没完成遍历，
if (oldStartIdx > oldEndIdx) {
  refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
  // 新增节点
  addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
} else if (newStartIdx > newEndIdx) {
  // 发现多余的旧节点，执行删除操作
  removeVnodes(oldCh, oldStartIdx, oldEndIdx)
}
```

**子节点比较总结**

上面就是子节点比较更新的一个完整过程，这是完整的逻辑代码

```js
function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
  let oldStartIdx = 0
  let newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let oldStartVnode = oldCh[0] //旧前
  let oldEndVnode = oldCh[oldEndIdx] //旧后
  let newEndIdx = newCh.length - 1
  let newStartVnode = newCh[0] //新前
  let newEndVnode = newCh[newEndIdx] //新后
  let oldKeyToIdx, idxInOld, vnodeToMove, refElm

  // removeOnly is a special flag used only by <transition-group>

  // to ensure removed elements stay in correct relative positions

  // during leaving transitions

  const canMove = !removeOnly

  if (process.env.NODE_ENV !== 'production') {
    checkDuplicateKeys(newCh)
  }

  //双端比较遍历
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      //旧前向后移动
      oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
    } else if (isUndef(oldEndVnode)) {
      // 旧后向前移动
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      //新前与旧前
      //更新子节点
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
      // 新旧各向后一步
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      //新后与旧后
      //更新子节点
      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
      //新旧各向前一步
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      // 新后与旧前
      //更新子节点
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
      //将旧前移动插入到最后
      canMove &&
        nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
      //新向前，旧向后
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      // 新前与旧后
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
      //将旧后移动插入到最前
      canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
      //新向后，旧向前
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      // 对于没有设置key的节点，第一次会通过createKeyToOldIdx建立key与index的映射 {key:index}
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
      //通过新节点的key,找到新节点在旧节点中所在的位置下标,如果没有设置key，会执行遍历操作寻找
      idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
      //如果新节点无法在旧节点中找到自己的位置下标,说明是新元素，执行新增操作
      if (isUndef(idxInOld)) {
        // 新增元素
        createElm(
          newStartVnode,
          insertedVnodeQueue,
          parentElm,
          oldStartVnode.elm,
          false,
          newCh,
          newStartIdx
        )
      } else {
        // 在旧节点中找到了key值一样的节点
        vnodeToMove = oldCh[idxInOld]
        if (sameVnode(vnodeToMove, newStartVnode)) {
          // 相同子节点更新操作
          patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
          // 更新完将旧节点赋值undefined
          oldCh[idxInOld] = undefined
          //将旧节点移动到所有未处理节点之前
          canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
        } else {
          // 如果是相同的key，不同的元素，当做新节点，执行创建操作
          createElm(
            newStartVnode,
            insertedVnodeQueue,
            parentElm,
            oldStartVnode.elm,
            false,
            newCh,
            newStartIdx
          )
        }
      }
      //新节点向后一步
      newStartVnode = newCh[++newStartIdx]
    }
  }
  //完成对旧节点的遍历，但是新节点还没完成遍历，
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
    // 新增节点
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
  } else if (newStartIdx > newEndIdx) {
    // 发现多余的旧节点，执行删除操作
    removeVnodes(oldCh, oldStartIdx, oldEndIdx)
  }
}
```
