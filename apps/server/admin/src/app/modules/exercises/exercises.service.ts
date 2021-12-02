import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';
import {
  CreateExerciseBriefDTO,
  ExerciseEntity,
  LibExercisesService,
} from '@powerbuilding-trainer/server/powerbuilding';

@Injectable()
export class ExercisesService extends LoggerClass {
  constructor(
    logger: Logger,
    private readonly exercisesService: LibExercisesService
  ) {
    super(logger);
  }

  public async getAll(): Promise<ExerciseEntity[]> {
    this.logger.debug('Getting all exercises list', 'getAll');
    return this.exercisesService.getAll();
  }

  public async getById(id: string): Promise<ExerciseEntity> {
    this.logger.debug(`Getting exercise by ID: ${id}`, 'getById');
    return this.exercisesService.getById(id);
  }

  public async createBrief(
    createExerciseBriefDTO: CreateExerciseBriefDTO
  ): Promise<ExerciseEntity> {
    this.logger.log('Creating exercise entity', 'createBrief');
    this.logger.debug(createExerciseBriefDTO, 'createBrief');
    const exercise: ExerciseEntity = new ExerciseEntity(createExerciseBriefDTO);
    return this.exercisesService.createBrief(exercise);
  }
}
