import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SharedModule } from '../shared/infra/modules/Shared.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../modules/user/infra/modules/user.module';
import { TrainersModule } from '../modules/trainers/infra/modules/trainers.module';
import { GymPlansModule } from '../modules/gym-plans/infra/modules/gym-plans.module';
import { AdministratorModule } from '../modules/administrator/infra/modules/administrator.module';
import { TestimoniesModule } from '../modules/testimonies/infra/modules/testimonies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SharedModule,
    UserModule,
    TrainersModule,
    GymPlansModule,
    AdministratorModule,
    TestimoniesModule,
    TrainersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
