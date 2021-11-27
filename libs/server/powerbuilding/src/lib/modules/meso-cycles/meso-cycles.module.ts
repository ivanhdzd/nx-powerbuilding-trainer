import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MesoCycleEntity } from './meso-cycle.entity';
import { MesoCyclesDAO } from './meso-cycles.dao';
import { MesoCyclesRepository } from './meso-cycles.repository';
import { MesoCyclesService } from './meso-cycles.service';

@Module({
  imports: [TypeOrmModule.forFeature([MesoCycleEntity, MesoCyclesRepository])],
  providers: [MesoCyclesDAO, MesoCyclesService],
  exports: [TypeOrmModule, MesoCyclesService],
})
export class MesoCyclesModule {}
