import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MicroCyclesRepository } from './micro-cycles.repository';

@Injectable()
export class MicroCyclesDAO extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly microCyclesRepository: MicroCyclesRepository
  ) {
    super(logger);
  }
}
