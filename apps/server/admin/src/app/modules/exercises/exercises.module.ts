import { Module } from '@nestjs/common';
import { PowerbuildingModule } from '@powerbuilding-trainer/server/powerbuilding';

import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';

@Module({
  imports: [PowerbuildingModule],
  providers: [ExercisesService],
  controllers: [ExercisesController],
})
export class ExercisesModule {}
