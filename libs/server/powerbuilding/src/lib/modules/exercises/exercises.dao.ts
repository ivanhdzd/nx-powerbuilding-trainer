import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { ExercisesRepository } from './exercises.repository';

@Injectable()
export class ExercisesDAO extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly exercisesRepository: ExercisesRepository
  ) {
    super(logger);
  }
}
