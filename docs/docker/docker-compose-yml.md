# docker-compose.yml 文件

## build

compose 启动时，构建一个新镜像并使用

```yaml
build: /path/to/build/dir   #绝对路径
build: ./dir				#相对路径
```

#### context

可以是 git 仓库的 url 也可以是绝对/相对路径

```yaml
build:
  context: ./dir
```

#### dockerfile

如果 dockerfile 文件名不是默认名，需要指定

```yaml
build:
  context: ./
  dockerfile: Dockerfile-alternate
```
