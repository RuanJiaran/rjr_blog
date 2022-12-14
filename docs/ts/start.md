# 开始

## 传统方式运行 ts

##### 1. 安装 tsc 工具

```shell
npm install -g typescript
```

##### 2. 编译 ts 文件

```shell
tsc index.ts
```

这样 index.ts 文件就会被编译成 index.js 文件

##### 3. 运行

```shell
node index.js
```

## 简便方式运行 ts

##### 1. 安装 ts-node

```shell
npm install -g ts-node
```

##### 2. 运行 ts 文件

```shell
ts-node index.ts
```

## 实时编译 ts

##### 1. 安装 tsc 工具

```shell
npm install -g typescript
```

##### 2. 运行监听命令

```shell
# 只监听指定文件并实时编译
tsc -w index.ts

# 监听当前目录下所有文件并实时编译
tsc -w
```
