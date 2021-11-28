import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  configFactory,
  CustomLoggerModule,
  MICROSERVICES,
} from '@powerbuilding-trainer/server/core';

import { ClientAdminProvider } from '../../providers/clients/admin.provider';
import { MacroCyclesController } from './macro-cycles.controller';
import { MacroCyclesService } from './macro-cycles.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configFactory] }),
    CustomLoggerModule.register(MICROSERVICES.API_GATEWAY),
  ],
  controllers: [MacroCyclesController],
  providers: [ClientAdminProvider, MacroCyclesService],
})
export class MacroCyclesModule {}
