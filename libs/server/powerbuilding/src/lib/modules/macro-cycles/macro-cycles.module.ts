import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MacroCycleEntity } from './macro-cycle.entity';
import { MacroCyclesDAO } from './macro-cycles.dao';
import { MacroCyclesRepository } from './macro-cycles.repository';
import { MacroCyclesService } from './macro-cycles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MacroCycleEntity, MacroCyclesRepository]),
  ],
  providers: [MacroCyclesDAO, MacroCyclesService],
  exports: [TypeOrmModule, MacroCyclesService],
})
export class MacroCyclesModule {}
