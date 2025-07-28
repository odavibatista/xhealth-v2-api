import {
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    })
  ],
  controllers: [
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe
    },
  ],
  exports: [
  ]
})
export class SharedModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
