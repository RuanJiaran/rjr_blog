# 快速生成 CURD 操作

在 src 目录下创建 web 目录，用来放 pc 端的接口

**使用命令快速创建 curd**

运行命令  `nest g resource web/article`  快速创建包含基础 curd 模板文件的 `src/web/article` 目录。我们可以只保留 `article.controller.ts` `article.service.ts` `article.module.ts` 这三个文件和 dto 文件夹，多余的文件可以删掉。

这时候的模板文件还不能操作数据库，我们需要对 `article.service.ts` 和 `article.module.ts` 文件做些改动

**article.service.ts 文件**

```ts{2-3,9-12,19}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { kolArticle } from 'src/models';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(kolArticle)
    private kolArticleModel: typeof kolArticle,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return this.kolArticleModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
```

**article.module.ts 文件**

```ts{4-5,8}
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { kolArticle } from 'src/models';

@Module({
  imports: [SequelizeModule.forFeature([kolArticle])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
```

到这里我们还没有改好，应为我们设计的是所有接口都放在 web 目录下，作为 web 模块的的一部分。这时我们需要创建 `src/web/web.module.ts` 文件管理所有接口

**web.module.ts 文件**

将上面刚生成的 ArticleModule 模块导入到 WebModule 模块内作为 WebModule 的一部分 ，然后再将 WebModule 模块导出。最后需要到项目根模块 AppModule 内将 WebModule 导入。

```ts
import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [ArticleModule],
  controllers: [],
  providers: [],
  exports: [WebModule],
})
export class WebModule {}
```

**app.module.ts 修改**

```ts{7,17}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { WebModule } from './web/web.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.${process.env.NODE_ENV}.env`, '.env'],
      load: [databaseConfig],
    }),
    SequelizeModule.forRoot(databaseConfig()),
    WebModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```



改好后我们访问 `http://localhost:3000/api/article` 就能获取数据库里的数据了

这里只展示了查询一种示例，更多对数据库的操作，请移步 [Sequelize](https://www.sequelize.com.cn/)
