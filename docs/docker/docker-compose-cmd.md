# docker compose 命令

!> 所有命令在 `docker-compose.yml` 文件目录下运行

## up

启动所有 docker compose 服务，镜像没构建会先构建 image 镜像

- `-d` 启动所有 docker compose 服务，并后台运行

```shell
docker compose up
docker compose up -d
```

## build

会先构建 `docker-compose.yml` 里需要的 images，这样再执行 up 命令就不用了先构建镜像了

```shell
docker compose build
```

## down

停止并删除容器，网络，卷。镜像不会删除

```shell
docker compose down
```

## restart

重启服务

```shell
docker compose restart
```

## start

启动服务

```shell
docker compose start
```

## stop

停止服务

```shell
docker compose stop
```

## config

检测 `docker-compose.yml` 配置文件

- `-q` 检测配置文件，有问题才有输出

```shell
docker compose config -q
```

## ps

查看运行过的所有容器

```shell
docker compose ps
```

## top

查看当前 docker compose 运行过的容器进程

```shell
docker compose top
```

## logs

查看容器输出日志

```shell
docker compose logs 服务id
```

## exec

进入容器实例内部

```shell
docker compose exec 服务id
```
