# 全局统一返回

## 前言

我们在写接口的时候一般都会设置一个全局统一的返回格式

## 创建拦截器

1. 创建一个拦截器 src/interceptor/transform.interceptor.ts

```ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Response<T> {
  data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map(data => {
        return {
          status: 'success',
          message: '请求成功',
          data,
        }
      })
    )
  }
}
```

2. 全局注册 main.ts

```ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { TransformInterceptor } from './interceptor/transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalInterceptors(new TransformInterceptor()) //全局响应拦截器

  await app.listen(5000)
}
bootstrap()
```
