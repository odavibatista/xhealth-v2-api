import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SharedModule } from '../shared/infra/modules/Shared.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../modules/user/infra/modules/user.module';
import { TrainerModule } from '../modules/trainer/infra/modules/trainer.module';
import { AdministratorModule } from '../modules/administrator/infra/modules/administrator.module';
import { TestimonyModule } from '../modules/testimony/infra/modules/testimony.module';
import { GymPlanModule } from '../modules/gym-plan/infra/modules/gym-plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SharedModule,
    UserModule,
    TrainerModule,
    GymPlanModule,
    AdministratorModule,
    TestimonyModule,
    TrainerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
