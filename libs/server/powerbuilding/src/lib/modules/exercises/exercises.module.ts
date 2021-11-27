import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExerciseEntity } from './exercise.entity';
import { ExercisesDAO } from './exercises.dao';
import { ExercisesRepository } from './exercises.repository';
import { ExercisesService } from './exercises.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseEntity, ExercisesRepository])],
  providers: [ExercisesDAO, ExercisesService],
  exports: [TypeOrmModule, ExercisesService],
})
export class ExercisesModule {}
