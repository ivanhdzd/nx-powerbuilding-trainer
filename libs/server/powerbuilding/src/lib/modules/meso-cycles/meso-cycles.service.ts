import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MesoCyclesDAO } from './meso-cycles.dao';

@Injectable()
export class MesoCyclesService extends LoggerClass {
  constructor(logger: Logger, private readonly mesoCyclesDAO: MesoCyclesDAO) {
    super(logger);
  }
}
