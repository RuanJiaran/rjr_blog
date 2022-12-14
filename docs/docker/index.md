# 常用命令

[Docker 教程](https://www.runoob.com/docker/docker-tutorial.html)

## search

搜索镜像

```bash
docker search nginx
```

## pull

下载镜像

```shell
docker pull nginx
docker pull mysql:5.7  # 下载5.7版本的mysql镜像
```

## images

查看镜像

```
docker images
```

## rm

删除容器

```shell
docker rm 容器id	 #删除单个容器
docker rm 容器名称	#删除单个容器
docker rm $(docker ps -aq)  #删除所有容器
```

## rmi

删除镜像

```shell
docker rmi a5d6e32ec597
docker rmi $(docker images -aq) #删除所有镜像
```

## [run](https://www.runoob.com/docker/docker-run-command.html)

创建一个新的容器并运行一个命令

**语法**

```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

OPTIONS 说明：

- `-d` 后台运行
- `--name` 给容器命名
- `-p` 将容器的端口映射到主机上，前面的端口容是器内端口映射到主机上的端口，后面的端口是容器内的端口
- `-it` 以后台交互方式运行
- `-v` 数据卷挂载，前面是宿主机的目录，后面是容器内的目录
- `-e username="ritchie"` 设置环境变量；
- `-m ` 设置容器使用内存最大值
- `--expose=[]` 开放一个端口或一组端口；

**用法**

```shell
docker run -d --name nginx -p 80:80 nginx  # 创建并启动容器 后台方式启动一个nginx
docker run -it --name nginx -p 80:80 nginx # 创建并一个nginx启动容器,然后进入容器

docker run -it centos
docker run -it centos:centos7
```

!> `-v` 的挂载是 **以宿主机为主**

| host                          | container                            | mount result                                                        |
| ----------------------------- | ------------------------------------ | ------------------------------------------------------------------- |
| 文件夹不存在/文件夹存在但为空 | 文件夹不存在/存在但为空/存在且不为空 | container 中文件被覆盖（清空）                                      |
| 文件夹存在且不为空            | 文件夹不存在/存在但为空/存在且不为空 | container 中文件夹内容被覆盖（原内容清空， 覆盖为 host 上文件夹内容 |

## exec

进入容器后开启一个新的终端，可以在里面操作

```bash
docker exec -it a5d6e32ec597 /bin/bash
```

## attach

进入容器正在执行的终端，不会启动新的进程

```bash
docker attach a5d6e32ec597
```

## cp

拷贝容器内的文件到主机上

```bash
docker cp a5d6e32ec597:/home/test.ts f:/   # 拷贝容器 home 目录下 test.ts 文件到主机 f 盘下
```

!>注意：上面的拷贝命令是在主机上执行

## ps

查看容器

- `-a` 查看所有容器

```bash
docker ps		# 查看正在运行的容器
docker ps -a	# 查看所有的容器
```

## stats

查看内存

```shell
docker stats
```

## commit

提交镜像

**命令：**`docker commit -m='提交的描述信息' -a='作者' 容器id 目标镜像名:版本`

```shell
docker commit -m='提交的描述信息' -a='rjr' a5d6e32ec597 testapp:1.0.0
```

## build

用于使用 Dockerfile 创建镜像

**语法**

```
docker build [OPTIONS] PATH | URL | -
```

OPTIONS 说明：

- **-f** : 指定要使用的 Dockerfile 路径；
- **--tag, -t** : 镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签

**用法示例**

```shell
docker build -f f:/docker/Dockerfile -t mycentos:1.0 .

docker build -t mycentos:1.0 .
```

!> 注意最后面有个 `.` 不能掉了

## logs

查看容器日志

```shell
docker logs -ft 容器名称|容器id
```

## system

随时 docker 下载的镜像越来越多，通过 docker rmi 命令无法彻底清除 docker 缓存，需要使用下面的命令从根本上清除

```shell
docker system prune --volumes
```

该命令清除：

- 所有停止的容器
- 所有不被任何一个容器使用的网络
- 所有不被任何一个容器使用的 volume
- 所有无实例的**镜像**
