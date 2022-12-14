# 制作自己的镜像

## 制作自己的 dockerHub 镜像

## 步骤一、本地准备好 image 镜像

![image-20220513152214407](/img/image-20220513152214407.png)

## 步骤二、登录 dockerHub 账号

`docker login`

输入账号密码

![image-20220513152423430](/img/image-20220513152423430.png)

![image-20220513152456529](/img/image-20220513152456529.png)

## 步骤三、push 自己的镜像

`docker push 镜像名称:版本`

![image-20220513152721519](/img/image-20220513152721519.png)

推送成功后在 dockerHub 上就可以看到自己制作的镜像啦

![image-20220513154101991](/img/image-20220513154101991.png)

制作完后我们就可以退出账号了 `docker logout`

## 问题

`denied: requested access to the resource is denied`

**原因一、没有登录 dockerHub 账号**

**原因二、push 错误**

- `docker push mycentos:latest` 镜像名没有以 dockerHub 账号名开头
- `docker push rjr/mycentos:v1` 镜像名开头的 dockerHub 账号不是 docker login 登录时的账号
- `docker push 931218/mycentos:v1` 镜像版本错误，本地没有 v1 这个版本
