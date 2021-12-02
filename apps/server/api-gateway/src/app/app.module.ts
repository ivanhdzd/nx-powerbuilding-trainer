import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  configFactory,
  CustomLoggerModule,
  MICROSERVICES,
} from '@powerbuilding-trainer/server/core';

import { ClientAdminProvider } from './providers/clients/admin.provider';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MacroCyclesModule } from './api/macro-cycles/macro-cycles.module';
import { ExercisesModule } from './api/exercises/exercises.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configFactory] }),
    CustomLoggerModule.register(MICROSERVICES.API_GATEWAY),
    MacroCyclesModule,
    ExercisesModule,
  ],
  providers: [ClientAdminProvider, AppService],
  controllers: [AppController],
})
export class AppModule {}
