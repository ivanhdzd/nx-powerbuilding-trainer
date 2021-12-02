import { Injectable, Logger } from '@nestjs/common';
import { FindManyOptions, FindOneOptions } from 'typeorm';

import { SORT_ORDER } from '../../../enums/sort-order.enum';
import { ExerciseEntity } from '../exercise.entity';
import { ExercisesRepository } from '../exercises.repository';
import { LibExercisesDAO } from './lib.exercises.dao';

@Injectable()
export class ExercisesDAO extends LibExercisesDAO {
  constructor(
    logger: Logger,
    private readonly exercisesRepository: ExercisesRepository
  ) {
    super(logger);
  }

  public async getAll(): Promise<ExerciseEntity[]> {
    this.logger.debug('Getting all exercises list', 'getAll');
    const options: FindManyOptions<ExerciseEntity> = {
      order: {
        name: SORT_ORDER.ASC,
      },
    };
    return this.exercisesRepository.find(options);
  }

  public async getById(id: string): Promise<ExerciseEntity> {
    this.logger.debug(`Getting exercise by ID: ${id}`, 'getById');
    const options: FindOneOptions<ExerciseEntity> = {
      relations: ['workoutExercises'],
    };
    return this.exercisesRepository.findOne(id, options);
  }

  public async createBrief(exercise: ExerciseEntity): Promise<ExerciseEntity> {
    exercise = await this.exercisesRepository.save(exercise);
    this.logger.log('New exercise created', 'createBrief');
    this.logger.debug(exercise, 'createBrief');
    return exercise;
  }
}
