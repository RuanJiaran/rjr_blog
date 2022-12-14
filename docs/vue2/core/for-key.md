# v-for 中为何要使用 key

## 为什么要使用 key

Vue 的 diff 算法是通过标签名和 key 来判断两个新旧节点是否相同。缺少 key 会缺少准确判断并复用节点的依据。在 Vue 内部会执行与设置 key 不同的操作。key 值的正确做法是设置为唯一的 id。

## 没有 key 的子节点对比

- 在比较子节点的过程中，存在 `patchKeyedChildren ` 和 `patchUnkeyedChildren`
- `patchKeyedChildren` 是存在 key 的时候执行的，是正式的开启 diff 的流程。`patchUnkeyedChildren` 针对没有 key 的情况。

- 也就是说，子节点有没有 key 值，进行的对比算法是不一样的。

```js
if (patchFlag > 0) {
  if (patchFlag && PatchFlags.KEYED_FRAGMENT) {
    /* 对于存在key的情况用于diff算法 */
    patchKeyedChildren()
  } else if (patchFlag && PatchFlags.UNKEYED_FRAGMENT) {
    /* 对于不存在key的情况,直接patch  */
    patchUnkeyedChildren()
  }
}
```

**没有 key 的流程如下**：

当不加 key 时，key 都是 undefined，默认相同，diff 算法就会就地复用来进行比较

![img](/img/webp.webp)

B 复用 A 的结构，C 复用 B 的结构，D 复用 C 的结构，E 复用 D 的结构，删除 E；然后如果数据有变化，再更新数据

##### 有 key 的流程如下：

如果加上唯一识别的 key（1,2,3,4,5）

![img](/img/webp-16566566881565.webp)

以上，B、C、D、E 全部可以复用，删除 A 即可从以上的对比可以看出，加上 key 可以最大化的利用节点，减少性能消耗

## key 为什么不能设置为 index

- 用 index 作为 key 时，在对数据进行 `破坏顺序的操作` 的修改时，会产生没必要的真实 DOM 更新，从而导致效率低

```js
// 在前面增加一个div，内容为6
// 修改了所有div的内容，同时新增了F
// 如果在末尾新增就不会产生这个问题
;[
  '<div>6</div>', // A
  '<div>1</div>', // B
  '<div>2</div>', // C
  '<div>3</div>', // D
  '<div>4</div>', // E
  '<div>5</div>', // F
]
```

- 如果结构中包含输入类的 DOM，会 `产生错误的 DOM 更新`（不添加 key 也同样有这个问题）

![chrome-capture (3).gif](/img/3ef1aa775c93d87613c9e042bdd540dd.gif)

## v-for 和 v-if 不要同时使用

永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）

如果避免出现这种情况，则在外层嵌套`template`（页面渲染不生成`dom`节点），在这一层进行 v-if 判断，然后在内部进行 v-for 循环
