# 配置 css module 模块化

## 修改 webpack 配置
修改 config/utils.js

```js{4-11}
const getStyleLoaders = (preProcessor) => {
  return [
    'style-loader', 
    {
      loader:'css-loader',
      options:{
        modules: {
          localIdentName:'[local]_[hash:8]'
        },
      }
    },
    preProcessor
  ].filter(Boolean)
}
```

## 如何使用

创建 app.less 文件
```css
.app_wrap{
  background:'yellow'
}
```

在 app.tsx 中使用

```tsx
import styles from './app.less'

...
<div className={styles.app_wrap}></div>
...
```

## 解决 eslint 检测 `import styles from './app.less'` 飘红问题

1.创建文件 `src/type.d.ts`
```ts
declare module '*.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}
```

2.修改 `tsconfig.json` 文件
```json
...
"include": ["./src/**/*","type.d.ts"],
...
```