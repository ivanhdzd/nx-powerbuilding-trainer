import { Injectable, Logger } from '@nestjs/common';

import { LibExercisesDAO } from '../dao/lib.exercises.dao';
import { ExerciseEntity } from '../exercise.entity';
import { LibExercisesService } from './lib.exercises.service';

@Injectable()
export class ExercisesService extends LibExercisesService {
  constructor(logger: Logger, private readonly exercisesDAO: LibExercisesDAO) {
    super(logger);
  }

  public async getAll(): Promise<ExerciseEntity[]> {
    this.logger.debug('Getting all exercises list', 'getAll');
    return this.exercisesDAO.getAll();
  }

  public async getById(id: string): Promise<ExerciseEntity> {
    this.logger.debug(`Getting exercise by ID: ${id}`, 'getById');
    return this.exercisesDAO.getById(id);
  }

  public async createBrief(exercise: ExerciseEntity): Promise<ExerciseEntity> {
    this.logger.log('Creating exercise', 'createBrief');
    this.logger.debug(exercise, 'createBrief');
    return this.exercisesDAO.createBrief(exercise);
  }
}
