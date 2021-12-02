import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoggerClass } from '@powerbuilding-trainer/server/core';
import {
  CreateMacroCycleBriefDTO,
  MacroCycleEntity,
} from '@powerbuilding-trainer/server/powerbuilding';
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

  @ApiOperation({ summary: 'Get macro cycle details.' })
  @ApiResponse({
    status: 200,
    isArray: false,
    type: MacroCycleEntity,
    description: 'Macro cycle details',
  })
  @Get(':id')
  public getById(@Param('id') id: string): Observable<MacroCycleEntity> {
    this.logger.debug(`Getting macro cycle by ID: ${id}`, 'getById');
    return this.macroCyclesService.getById(id);
  }

  @ApiOperation({ summary: 'Create new macro cycle brief.' })
  @ApiResponse({
    status: 201,
    isArray: false,
    type: MacroCycleEntity,
    description: 'Macro cycle',
  })
  @Post('brief')
  @UseInterceptors(ClassSerializerInterceptor)
  public createBrief(
    @Body() createMacroCycleBriefDTO: CreateMacroCycleBriefDTO
  ): Observable<MacroCycleEntity> {
    this.logger.debug('Creating macro cycle', 'createBrief');
    this.logger.debug(createMacroCycleBriefDTO, 'createBrief');
    return this.macroCyclesService.createBrief(createMacroCycleBriefDTO);
  }
}
