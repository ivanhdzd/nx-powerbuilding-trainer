import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExercisesDAO } from './dao/exercises.dao';
import { LibExercisesDAO } from './dao/lib.exercises.dao';
import { ExerciseEntity } from './exercise.entity';
import { ExercisesRepository } from './exercises.repository';
import { ExercisesService } from './service/exercises.service';
import { LibExercisesService } from './service/lib.exercises.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseEntity, ExercisesRepository])],
  providers: [
    ExercisesDAO,
    {
      provide: LibExercisesDAO,
      useExisting: ExercisesDAO,
    },
    ExercisesService,
    {
      provide: LibExercisesService,
      useExisting: ExercisesService,
    },
  ],
  exports: [TypeOrmModule, LibExercisesService],
})
export class ExercisesModule {}
