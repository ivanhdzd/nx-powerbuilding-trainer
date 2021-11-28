import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';
import {
  MacroCycleEntity,
  MacroCyclesService as MacroCyclesServiceLib,
} from '@powerbuilding-trainer/server/powerbuilding';

@Injectable()
export class MacroCyclesService extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly macroCyclesService: MacroCyclesServiceLib
  ) {
    super(logger);
  }

  public async getAll(): Promise<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.macroCyclesService.getAll();
  }
}
