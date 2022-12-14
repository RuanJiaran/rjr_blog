# require 和 import

## 区别

- require 是 CommonJS 规范的模块化语法，import 是 ECMAScript 6 规范的模块化语法
- require 是运行时加载，import 是编译时加载
- require 可以写在代码的任意位置，import 只能写在文件的最顶端且不可在条件语句或函数作用域中使用
- require 通过 module.exports 导出的值就不能再变化，import 通过 export 导出的值可以改变
- require 通过 module.exports 导出的是 exports 对象，import 通过 export 导出是指定输出的代码
- require 运行时才引入模块的属性所以性能相对较低，import 编译时引入模块的属性所所以性能稍高
