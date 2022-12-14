# Dockerfile

**Dockerfile 文件**

```shell
FROM node:14.15.0

RUN npm install node-sass

WORKDIR /www/react-admin

COPY . /www/react-admin

RUN npm install

CMD npm run start:mock

EXPOSE 3000
```

**build 镜像**

```shell
docker build -f f:/www/react-admin-home-h5/Dockerfile -t react-admin:1.0 .
```

**run 启动容器**

```shell
docker run -it -p 3000:3000 -v /f/www/react-admin-home-h5:/www/react-admin react-admin:1.0
```
