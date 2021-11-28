import { Controller, Get, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoggerClass } from '@powerbuilding-trainer/server/core';
import { MacroCycleEntity } from '@powerbuilding-trainer/server/powerbuilding';
import { Observable } from 'rxjs';

import { MacroCyclesService } from './macro-cycles.service';

@Controller('macro-cycles')
export class MacroCyclesController extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly macroCyclesService: MacroCyclesService
  ) {
    super(logger);
  }

  @ApiOperation({ summary: 'Get all macro cycles list.' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: MacroCycleEntity,
    description: 'Macro cycles list',
  })
  @Get()
  public getAll(): Observable<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.macroCyclesService.getAll();
  }
}
