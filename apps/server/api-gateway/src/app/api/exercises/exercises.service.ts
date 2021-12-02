import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoggerClass, MICROSERVICES } from '@powerbuilding-trainer/server/core';
import {
  ExerciseEntity,
  CreateExerciseBriefDTO,
} from '@powerbuilding-trainer/server/powerbuilding';
import { Observable } from 'rxjs';

@Injectable()
export class ExercisesService extends LoggerClass {
  constructor(
    logger: Logger,
    @Inject(MICROSERVICES.ADMIN)
    private readonly powerbuildingService: ClientProxy
  ) {
    super(logger);
  }

  public getAll(): Observable<ExerciseEntity[]> {
    this.logger.debug('Getting all exercises list', 'getAll');
    return this.powerbuildingService.send<ExerciseEntity[]>(
      { cmd: 'getAllExercises' },
      {}
    );
  }

  public getById(id: string): Observable<ExerciseEntity> {
    this.logger.debug(`Getting exercise by ID: ${id}`, 'getById');
    return this.powerbuildingService.send<ExerciseEntity>(
      { cmd: 'getExerciseById' },
      id
    );
  }

  public createBrief(
    createExerciseBriefDTO: CreateExerciseBriefDTO
  ): Observable<ExerciseEntity> {
    this.logger.debug('Creating exercise brief', 'createBrief');
    this.logger.log(createExerciseBriefDTO, 'createBrief');
    return this.powerbuildingService.send<ExerciseEntity>(
      { cmd: 'createExerciseBrief' },
      createExerciseBriefDTO
    );
  }
}
