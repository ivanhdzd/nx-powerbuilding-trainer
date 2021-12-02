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
  ExerciseEntity,
  CreateExerciseBriefDTO,
} from '@powerbuilding-trainer/server/powerbuilding';
import { Observable } from 'rxjs';

import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly exercisesService: ExercisesService
  ) {
    super(logger);
  }

  @ApiOperation({ summary: 'Get all exercises list.' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: ExerciseEntity,
    description: 'Exercises list',
  })
  @Get()
  public getAll(): Observable<ExerciseEntity[]> {
    this.logger.debug('Getting all exercises list', 'getAll');
    return this.exercisesService.getAll();
  }

  @ApiOperation({ summary: 'Get exercise details.' })
  @ApiResponse({
    status: 200,
    isArray: false,
    type: ExerciseEntity,
    description: 'Exercise details',
  })
  @Get(':id')
  public getById(@Param('id') id: string): Observable<ExerciseEntity> {
    this.logger.debug(`Getting exercise by ID: ${id}`, 'getById');
    return this.exercisesService.getById(id);
  }

  @ApiOperation({ summary: 'Create new exercise brief.' })
  @ApiResponse({
    status: 201,
    isArray: false,
    type: ExerciseEntity,
    description: 'Exercise',
  })
  @Post('brief')
  @UseInterceptors(ClassSerializerInterceptor)
  public createBrief(
    @Body() createExerciseBriefDTO: CreateExerciseBriefDTO
  ): Observable<ExerciseEntity> {
    this.logger.debug('Creating exercise', 'createBrief');
    this.logger.debug(createExerciseBriefDTO, 'createBrief');
    return this.exercisesService.createBrief(createExerciseBriefDTO);
  }
}
