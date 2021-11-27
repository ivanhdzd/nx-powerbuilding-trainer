import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { WorkoutsRepository } from './workouts.repository';

@Injectable()
export class WorkoutsDAO extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly workoutsRepository: WorkoutsRepository
  ) {
    super(logger);
  }
}
