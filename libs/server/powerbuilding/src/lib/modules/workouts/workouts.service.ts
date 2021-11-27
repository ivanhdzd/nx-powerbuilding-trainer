import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { WorkoutsDAO } from './workouts.dao';

@Injectable()
export class WorkoutsService extends LoggerClass {
  constructor(logger: Logger, private readonly workoutsDAO: WorkoutsDAO) {
    super(logger);
  }
}
