import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { WorkoutSeriesDAO } from './workout-series.dao';

@Injectable()
export class WorkoutSeriesService extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly workoutSeriesDAO: WorkoutSeriesDAO
  ) {
    super(logger);
  }
}
