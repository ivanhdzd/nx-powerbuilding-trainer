import { Module } from '@nestjs/common';
import { PowerbuildingModule } from '@powerbuilding-trainer/server/powerbuilding';

import { MacroCyclesService } from './macro-cycles.service';
import { MacroCyclesController } from './macro-cycles.controller';

@Module({
  imports: [PowerbuildingModule],
  providers: [MacroCyclesService],
  controllers: [MacroCyclesController],
})
export class MacroCyclesModule {}
