import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { WorkoutExercisesRepository } from './workout-exercises.repository';

@Injectable()
export class WorkoutExercisesDAO extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly workoutExercisesRepository: WorkoutExercisesRepository
  ) {
    super(logger);
  }
}
