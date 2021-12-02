import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  configFactory,
  CustomLoggerModule,
  CustomTypeOrmModule,
  MICROSERVICES,
} from '@powerbuilding-trainer/server/core';
import { POWERBUILDING_ENTITIES } from '@powerbuilding-trainer/server/powerbuilding';

import { MacroCyclesModule } from './modules/macro-cycles/macro-cycles.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './modules/exercises/exercises.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configFactory] }),
    CustomLoggerModule.register(MICROSERVICES.ADMIN),
    CustomTypeOrmModule.forRoot(POWERBUILDING_ENTITIES),
    MacroCyclesModule,
    ExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
