import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';
import {
  MacroCycleEntity,
  LibMacroCyclesService,
  CreateMacroCycleBriefDTO,
} from '@powerbuilding-trainer/server/powerbuilding';

@Injectable()
export class MacroCyclesService extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly macroCyclesService: LibMacroCyclesService
  ) {
    super(logger);
  }

  public async getAll(): Promise<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.macroCyclesService.getAll();
  }

  public async getById(id: string): Promise<MacroCycleEntity> {
    this.logger.debug(`Getting macro cycle by ID: ${id}`, 'getById');
    return this.macroCyclesService.getById(id);
  }

  public async createBrief(
    createMacroCycleBriefDTO: CreateMacroCycleBriefDTO
  ): Promise<MacroCycleEntity> {
    this.logger.log('Creating macro cycle', 'createBrief');
    this.logger.debug(createMacroCycleBriefDTO, 'createBrief');
    return this.macroCyclesService.createBrief(createMacroCycleBriefDTO);
  }
}
