import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MacroCycleEntity } from './macro-cycle.entity';
import { MacroCyclesDAO } from './dao/macro-cycles.dao';
import { MacroCyclesRepository } from './macro-cycles.repository';
import { LibMacroCyclesService } from './service/lib.macro-cycles.service';
import { MacroCyclesService } from './service/macro-cycles.service';
import { LibMacroCyclesDAO } from './dao/lib.macro-cycles.dao';

@Module({
  imports: [
    TypeOrmModule.forFeature([MacroCycleEntity, MacroCyclesRepository]),
  ],
  providers: [
    MacroCyclesDAO,
    {
      provide: LibMacroCyclesDAO,
      useExisting: MacroCyclesDAO,
    },
    MacroCyclesService,
    {
      provide: LibMacroCyclesService,
      useExisting: MacroCyclesService,
    },
  ],
  exports: [TypeOrmModule, LibMacroCyclesService],
})
export class MacroCyclesModule {}
