# 配置数据库

Nest 官方推荐与 TypeORM 集成来操作数据库。但出于个人喜好，我采用与 [Sequelize](https://www.npmjs.com/package/sequelize) 集成的方式来操作数据库。原因是 TypeORM 的文档没有 Sequelize 的文档清晰，并且 Sequelize 可以配合 sequelize-typescript-generator 生成器来根据数据库表快速的生成模型文件，而不需要自己手动创建模型文件，超级方便快捷。



## Sequelize 集成

### 安装扩展包

```cmd
npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
npm install --save-dev @types/sequelize
```

### 快速配置

修改 app.module.ts 文件

```ts{4,8-16}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'kol',
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### env 多环境配置

**1. 创建 env 多环境配置文件**

在项目根分别创建 `.env` 默认所有环境，`.development.env` 开发环境，`.production.env` 生产环境配置文件，并分别配置各环境相关变量

例如 `.env` 配置如下

```
DATABASE_USER=root
DATABASE_PASSWORD=root
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_DB=kol
```

**2. 创建 database.config.ts 配置文件**

创建 src/config/database.config.ts 数据库配置文件

```ts
import { SequelizeModuleOptions } from '@nestjs/sequelize';

const databaseConfig = (): SequelizeModuleOptions => {
  return {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    autoLoadModels: true,
  };
};

export { databaseConfig };
```

**3. 修改 src/app.module.ts 文件**

envFilePath 多环境 env 配置文件优先级从左到右依次降低，最左边配置文件优先级最高，最右边配置文件优先级最低

```ts{4-6,10-15}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.${process.env.NODE_ENV}.env`, '.env'],
      load: [databaseConfig],
    }),
    SequelizeModule.forRoot(databaseConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

