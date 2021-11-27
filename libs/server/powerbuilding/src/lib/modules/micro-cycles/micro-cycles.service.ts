import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MicroCyclesDAO } from './micro-cycles.dao';

@Injectable()
export class MicroCyclesService extends LoggerClass {
  constructor(logger: Logger, private readonly microCyclesDAO: MicroCyclesDAO) {
    super(logger);
  }
}
