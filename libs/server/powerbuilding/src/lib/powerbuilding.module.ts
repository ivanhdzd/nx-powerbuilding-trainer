import { Module } from '@nestjs/common';

import { ExercisesModule } from './modules/exercises/exercises.module';
import { MacroCyclesModule } from './modules/macro-cycles/macro-cycles.module';
import { MesoCyclesModule } from './modules/meso-cycles/meso-cycles.module';
import { MicroCyclesModule } from './modules/micro-cycles/micro-cycles.module';
import { WorkoutExercisesModule } from './modules/workout-exercises/workout-exercises.module';
import { WorkoutSeriesModule } from './modules/workout-series/workout-series.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';

@Module({
  imports: [
    ExercisesModule,
    MacroCyclesModule,
    MesoCyclesModule,
    MicroCyclesModule,
    WorkoutExercisesModule,
    WorkoutSeriesModule,
    WorkoutsModule,
  ],
  exports: [
    ExercisesModule,
    MacroCyclesModule,
    MesoCyclesModule,
    MicroCyclesModule,
    WorkoutExercisesModule,
    WorkoutSeriesModule,
    WorkoutsModule,
  ],
})
export class PowerbuildingModule {}
