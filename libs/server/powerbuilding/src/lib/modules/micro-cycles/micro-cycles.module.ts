import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MicroCycleEntity } from './micro-cycle.entity';
import { MicroCyclesDAO } from './micro-cycles.dao';
import { MicroCyclesRepository } from './micro-cycles.repository';
import { MicroCyclesService } from './micro-cycles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MicroCycleEntity, MicroCyclesRepository]),
  ],
  providers: [MicroCyclesDAO, MicroCyclesService],
  exports: [TypeOrmModule, MicroCyclesService],
})
export class MicroCyclesModule {}
