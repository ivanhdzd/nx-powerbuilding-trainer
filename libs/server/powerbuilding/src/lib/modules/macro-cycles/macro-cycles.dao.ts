import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MacroCycleEntity } from './macro-cycle.entity';
import { MacroCyclesRepository } from './macro-cycles.repository';

@Injectable()
export class MacroCyclesDAO extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly macroCyclesRepository: MacroCyclesRepository
  ) {
    super(logger);
  }

  public async getAll(): Promise<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.macroCyclesRepository.find();
  }
}
