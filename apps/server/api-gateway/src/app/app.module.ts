import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  configFactory,
  CustomLoggerModule,
  MICROSERVICES,
} from '@powerbuilding-trainer/server/core';

import { ClientMicroservicesModule } from './modules/client-microservices.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configFactory] }),
    ClientMicroservicesModule.register(configFactory()),
    CustomLoggerModule.register(MICROSERVICES.API_GATEWAY),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
