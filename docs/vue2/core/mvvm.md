# mvvm 和 mvc

## MVVM

MVVM 是 `Model-View-ViewModel` 的缩写，分别对应着：`数据，视图，视图模型`。Model 是我们应用中的数据模型，View 是我们的 UI 视图层，通过 ViewModle，可以把我们 Modle 中的数据映射到 View 视图上，同时，在 View 层修改了一些数据，也会反应更新我们的 Modle。简单理解就是双向数据绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化

**以 vue 为例**

View 对应 template，ViewModel 对应 `new Vue({…})`，Model 对应 data

**三者的关系**

view 可以通过事件绑定(或 v-model 指令)的方式影响 model，model 可以通过数据绑定的形式影响到 view，viewModel 是把 model 和 view 连起来的连接器

![在这里插入图片描述](/img/3.png)

## MVC（典型的框架有 angular.js，php）

MVC 是 `Model、View、Controller`即` 数据模型、视图、控制器`

View：视图层；
Model：业务数据层；
Controller： 控制器。接收 View 层传递过来的指令，选取 Model 层对应的数据，进行相应操作

**特点**：MVC 有如下两种模式，不管哪种模式，MVC 的通信都是单向的，由图也可以看出，View 层会从 Model 层拿数据，因此 MVC 中的 View 层和 Model 层还是存在耦合的

![在这里插入图片描述](/img/4.png)
