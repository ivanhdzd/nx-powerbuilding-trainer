import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  configFactory,
  CustomLoggerModule,
  MICROSERVICES,
} from '@powerbuilding-trainer/server/core';

import { ClientAdminProvider } from '../../providers/clients/admin.provider';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configFactory] }),
    CustomLoggerModule.register(MICROSERVICES.API_GATEWAY),
  ],
  providers: [ClientAdminProvider, ExercisesService],
  controllers: [ExercisesController],
})
export class ExercisesModule {}
