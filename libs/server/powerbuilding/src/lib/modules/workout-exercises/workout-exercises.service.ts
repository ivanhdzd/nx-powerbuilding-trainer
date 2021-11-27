import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { WorkoutExercisesDAO } from './workout-exercises.dao';

@Injectable()
export class WorkoutExercisesService extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly workoutExercisesDAO: WorkoutExercisesDAO
  ) {
    super(logger);
  }
}
