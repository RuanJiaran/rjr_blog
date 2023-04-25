# 配置别名

配置别名 `@src` 映射到目录 `src`

## 1.修改 `config/webpack.common.js` 文件

```js{5}
...
resolve: {
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
  alias: {
    '@src': path.resolve(__dirname, '../src'), //给src目录起个别名@src ，引用src目录的时候，可用@src替代
  },
},
...
```

## 2.修改 `tsconfig.json` 文件

```json{15-19}
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "allowJs": true, // 允许编译 javascript 文件,----->有些模块是js写的
    "checkJs": true, // 报告 javascript 文件中的错误 ----->检查js中有没有语法错误，应该和上面一起用
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入

    "strict": true, //严格类型检查

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {
      // 模块名到基于 baseUrl 的路径映射的列表
      "@src/*": ["./src/*"]
    },

    "isolatedModules": true, // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.
    "noEmit": true, // 不生成输出文件 --->为true不生成最后的编译.js文件

    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  },

  /*指定要编译的文件 **表示任意目录 *表示任意文件  */
  "include": ["./src/**/*"]
}
```
