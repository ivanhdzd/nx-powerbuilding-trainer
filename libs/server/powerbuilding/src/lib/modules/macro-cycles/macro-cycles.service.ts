import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MacroCycleEntity } from './macro-cycle.entity';
import { MacroCyclesDAO } from './macro-cycles.dao';

@Injectable()
export class MacroCyclesService extends LoggerClass {
  constructor(logger: Logger, private readonly macroCyclesDAO: MacroCyclesDAO) {
    super(logger);
  }

  public async getAll(): Promise<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.macroCyclesDAO.getAll();
  }
}
