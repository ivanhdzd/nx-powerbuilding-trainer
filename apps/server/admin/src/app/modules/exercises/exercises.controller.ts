import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoggerClass } from '@powerbuilding-trainer/server/core';
import {
  ExerciseEntity,
  CreateExerciseBriefDTO,
} from '@powerbuilding-trainer/server/powerbuilding';

import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly exercisesService: ExercisesService
  ) {
    super(logger);
  }

  @MessagePattern({ cmd: 'getAllExercises' })
  public async getAll(): Promise<ExerciseEntity[]> {
    this.logger.debug('Getting all exercises list', 'getAll');
    return this.exercisesService.getAll();
  }

  @MessagePattern({ cmd: 'getExerciseById' })
  public async getById(id: string): Promise<ExerciseEntity> {
    this.logger.debug(`Getting exercise by ID: ${id}`, 'getById');
    return this.exercisesService.getById(id);
  }

  @MessagePattern({ cmd: 'createExerciseBrief' })
  public async createBrief(
    createExerciseBriefDTO: CreateExerciseBriefDTO
  ): Promise<ExerciseEntity> {
    this.logger.log('Creating exercise', 'createBrief');
    this.logger.debug(createExerciseBriefDTO, 'createBrief');
    return this.exercisesService.createBrief(createExerciseBriefDTO);
  }
}
