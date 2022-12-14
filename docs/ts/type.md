# 类型保护

## typeof 类型保护

将`typeof x === "number"`抽象成一个函数，因为 TypeScript 可以将它识别为一个类型保护。 也就是说我们可以直接在代码里检查类型了。

```js
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}
```

这些`typeof`类型保护只有两种形式能被识别：`typeof v === "typename"`和`typeof v !== "typename"`，`typename`必须是`number`，`string`，`boolean`或`symbol`。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。

## instanceof 类型保护

instanceof 类型保护是通过构造函数来细化类型的一种方式

```js
interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}
```

instanceof 的右侧要求是一个构造函数
