import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkoutExerciseEntity } from './workout-exercise.entity';
import { WorkoutExercisesDAO } from './workout-exercises.dao';
import { WorkoutExercisesRepository } from './workout-exercises.repository';
import { WorkoutExercisesService } from './workout-exercises.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      WorkoutExerciseEntity,
      WorkoutExercisesRepository,
    ]),
  ],
  providers: [WorkoutExercisesDAO, WorkoutExercisesService],
  exports: [TypeOrmModule, WorkoutExercisesService],
})
export class WorkoutExercisesModule {}
