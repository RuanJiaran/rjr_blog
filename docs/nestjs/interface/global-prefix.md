# 全局路由前缀

要为应用程序中的每个路由设置前缀, 让我们使用 `INestApplication` 对象的 `setGlobalPrefix()` 方法。

**修改 src/main.ts 文件**

```ts{7}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(5000);
}
bootstrap();
```

没加全局路由前缀我们访问接口是这样 `http://127.0.0.1:3000/路由名称`，加了全局路由前缀之后我们访问接口就需要全部变成 `http://127.0.0.1:3000/api/路由名称`
