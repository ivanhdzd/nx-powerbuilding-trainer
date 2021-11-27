import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  configFactory,
  CustomLoggerModule,
  CustomTypeOrmModule,
  MICROSERVICES,
} from '@powerbuilding-trainer/server/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configFactory] }),
    CustomLoggerModule.register(MICROSERVICES.ADMIN),
    CustomTypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
