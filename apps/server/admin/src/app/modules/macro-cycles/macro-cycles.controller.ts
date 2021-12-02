import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoggerClass } from '@powerbuilding-trainer/server/core';
import {
  CreateMacroCycleBriefDTO,
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

  @MessagePattern({ cmd: 'getMacroCycleById' })
  public async getById(id: string): Promise<MacroCycleEntity> {
    this.logger.debug(`Getting macro cycle by ID: ${id}`, 'getById');
    return this.macroCyclesService.getById(id);
  }

  @MessagePattern({ cmd: 'createMacroCycleBrief' })
  public async createBrief(
    createMacroCycleBriefDTO: CreateMacroCycleBriefDTO
  ): Promise<MacroCycleEntity> {
    this.logger.log('Creating macro cycle', 'createBrief');
    this.logger.debug(createMacroCycleBriefDTO, 'createBrief');
    return this.macroCyclesService.createBrief(createMacroCycleBriefDTO);
  }
}
