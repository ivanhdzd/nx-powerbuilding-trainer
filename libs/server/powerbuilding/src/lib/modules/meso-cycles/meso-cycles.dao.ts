import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MesoCyclesRepository } from './meso-cycles.repository';

@Injectable()
export class MesoCyclesDAO extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly mesoCyclesRepository: MesoCyclesRepository
  ) {
    super(logger);
  }
}
