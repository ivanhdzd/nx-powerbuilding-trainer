import { Injectable } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { ExerciseEntity } from '../exercise.entity';

@Injectable()
export abstract class LibExercisesDAO extends LoggerClass {
  public abstract getAll(): Promise<ExerciseEntity[]>;
  public abstract getById(id: string): Promise<ExerciseEntity>;
  public abstract createBrief(
    exercise: ExerciseEntity
  ): Promise<ExerciseEntity>;
}
