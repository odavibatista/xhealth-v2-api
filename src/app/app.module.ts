import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { SharedModule } from '../shared/infra/modules/Shared.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../modules/user/infra/modules/user.module';
import { TrainerModule } from '../modules/trainer/infra/modules/trainer.module';
import { AdministratorModule } from '../modules/administrator/infra/modules/administrator.module';
import { TestimonyModule } from '../modules/testimony/infra/modules/testimony.module';
import { GymPlanModule } from '../modules/gym-plan/infra/modules/gym-plan.module';
import { ExtraServiceModule } from '../modules/extra-service/infra/modules/extra-service.module';
import { AddressModule } from '../modules/address/infra/modules/address.module';
import { APP_PIPE } from '@nestjs/core';
import { GymModule } from '../modules/gym/infra/modules/gym.module';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisOptions } from '../shared/config/redis.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisOptions),
    SharedModule,
    UserModule,
    TrainerModule,
    GymPlanModule,
    AdministratorModule,
    TestimonyModule,
    TrainerModule,
    ExtraServiceModule,
    AddressModule,
    GymModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
