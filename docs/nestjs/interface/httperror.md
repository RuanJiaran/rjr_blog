# 全局错误处理

1. 使用命令创建 http 错误过滤器

```
nest g f filters/httpException
```

过滤器代码

```ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    response.status(status).json({
      status: 'error',
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    })
  }
}
```

2. 在 main.ts 中全局注册

```ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filters/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')
  app.useGlobalFilters(new HttpExceptionFilter()) // 全局注册错误的过滤器

  await app.listen(5000)
}
bootstrap()
```
