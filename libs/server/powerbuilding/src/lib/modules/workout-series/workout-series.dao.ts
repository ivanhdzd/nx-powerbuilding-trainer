import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { WorkoutSeriesRepository } from './workout-series.repository';

@Injectable()
export class WorkoutSeriesDAO extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly workoutSeriesRepository: WorkoutSeriesRepository
  ) {
    super(logger);
  }
}
