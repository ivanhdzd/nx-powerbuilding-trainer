import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { ExercisesDAO } from './exercises.dao';

@Injectable()
export class ExercisesService extends LoggerClass {
  constructor(logger: Logger, private readonly exercisesDAO: ExercisesDAO) {
    super(logger);
  }
}
