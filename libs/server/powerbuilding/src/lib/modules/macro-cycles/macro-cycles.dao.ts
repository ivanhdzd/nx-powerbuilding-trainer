import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MacroCyclesRepository } from './macro-cycles.repository';

@Injectable()
export class MacroCyclesDAO extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly MacroCyclesRepository: MacroCyclesRepository
  ) {
    super(logger);
  }
}
