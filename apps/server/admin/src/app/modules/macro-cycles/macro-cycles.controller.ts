import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoggerClass } from '@powerbuilding-trainer/server/core';
import {
  CreateMacroCycleDTO,
  MacroCycleEntity,
} from '@powerbuilding-trainer/server/powerbuilding';

import { MacroCyclesService } from './macro-cycles.service';

@Controller('macro-cycles')
export class MacroCyclesController extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly macroCyclesService: MacroCyclesService
  ) {
    super(logger);
  }

  @MessagePattern({ cmd: 'getAllMacroCycles' })
  public async getAll(): Promise<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.macroCyclesService.getAll();
  }

  @MessagePattern({ cmd: 'createMacroCycle' })
  public async create(
    createMacroCycleDTO: CreateMacroCycleDTO
  ): Promise<MacroCycleEntity> {
    this.logger.log('Creating macro cycle', 'create');
    this.logger.debug(createMacroCycleDTO, 'create');
    return this.macroCyclesService.create(createMacroCycleDTO);
  }
}
