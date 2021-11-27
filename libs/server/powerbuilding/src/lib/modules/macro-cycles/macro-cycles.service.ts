import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MacroCyclesDAO } from './macro-cycles.dao';

@Injectable()
export class MacroCyclesService extends LoggerClass {
  constructor(logger: Logger, private readonly macroCyclesDAO: MacroCyclesDAO) {
    super(logger);
  }
}
