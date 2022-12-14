# tsconfig 配置详解

使用命令生成配置文件

```shell
tsc -init
```

生成的 `tsconfig.json` 配置文件如下

```js
{
  // 编译器选项
    "compilerOptions": {

      /* 基本选项 */

      "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6','ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
//      注意：target将ts转为最终target js版本是不全的，有些无法转换，无法做到完全兼容
      // 例如 代理反射等功能，所以考虑兼容性必须还要使用 babel进行兼容性转换

      "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd','es2015'
      "lib": [],                             // 指定要包含在编译中的库文件, ----->>>一般在后端使用，要引入库的时候使用，默认引入浏览器运行的库
      "allowJs": true,                       // 允许编译 javascript 文件,----->有些模块是js写的
      "checkJs": true,                       // 报告 javascript 文件中的错误 ----->检查js中有没有语法错误，应该和上面一起用
      "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
      "declaration": true,                   // 生成相应的 '.d.ts' 文件
      "sourceMap": true,                     // 生成相应的 '.map' 文件
      "outFile": "./dist/app.js",            // 将输出文件合并为一个文件      ---->>>>全局作用域文件中的内容合并，全局作用域即不使用模块导出导入, 如果要合并有导入导出模块的文件，
                                             // module必须为amd或者system
      "outDir": "./",                        // 指定输出目录，             ---->>>>编译后的js所在目录
      "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
      "removeComments": true,                // 删除编译后的所有的注释 --->删除编译前的注释,只检查语法的时候用
      "noEmit": true,                        // 不生成输出文件 --->为true不生成最后的编译.js文件
      "noEmitOnError":true,                  // 当有错误的时候，不生成编译文件(.js)
      "importHelpers": true,                 // 从 tslib 导入辅助工具函数
      "isolatedModules": true,               // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

      /* 严格的类型检查选项 */
      "strict": true,                        // 启用所有严格类型检查选项
      //下面的总开关
      "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错;--->没有写类型的值不会被推断为any
      "strictNullChecks": true,              // 启用严格的 null 检查
       // 例如获取dom，不成功，执行了属性，dom可能为null
      "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
      //使用this的时候必须指定类，
      "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'
    // 注意当代码中使用模块，自动就使用了严格模式


      /* 额外的检查 */
      "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
      "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
      "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
      "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

      /* 模块解析选项 */
      "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
      "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
      "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
      "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
      "typeRoots": [],                       // 包含类型声明的文件列表
      "types": [],                           // 需要包含的类型声明文件名列表
      "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

      /* Source Map Options */
      "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
      "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
      "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
      "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

      /* 其他选项 */
      "experimentalDecorators": true,        // 启用装饰器
      "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
    },


    /*指定要编译的文件 **表示任意目录 *表示任意文件  */
    "include":[
      "./src/**/*"  // src下任意目录下面的任意文件
    ]
    ,
// 包括和排除，应设置，不然，全局变量的范围会很大，
    //排查的，有默认值
    "exclude":
    [
      "./scr/hello/**/*"
    ]
    ,
    // 编译具体的文件
    "files":["xx.ts"]
}
```
