import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoggerClass, MICROSERVICES } from '@powerbuilding-trainer/server/core';
import {
  CreateMacroCycleBriefDTO,
  MacroCycleEntity,
} from '@powerbuilding-trainer/server/powerbuilding';
import { Observable } from 'rxjs';

@Injectable()
export class MacroCyclesService extends LoggerClass {
  constructor(
    logger: Logger,
    @Inject(MICROSERVICES.ADMIN)
    private readonly powerbuildingService: ClientProxy
  ) {
    super(logger);
  }

  public getAll(): Observable<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.powerbuildingService.send<MacroCycleEntity[]>(
      { cmd: 'getAllMacroCycles' },
      {}
    );
  }

  public getById(id: string): Observable<MacroCycleEntity> {
    this.logger.debug(`Getting macro cycle by ID: ${id}`, 'getById');
    return this.powerbuildingService.send<MacroCycleEntity>(
      { cmd: 'getMacroCycleById' },
      id
    );
  }

  public createBrief(
    createMacroCycleBriefDTO: CreateMacroCycleBriefDTO
  ): Observable<MacroCycleEntity> {
    this.logger.debug('Creating macro cycle', 'createBrief');
    this.logger.log(createMacroCycleBriefDTO, 'createBrief');
    return this.powerbuildingService.send<MacroCycleEntity>(
      { cmd: 'createMacroCycleBrief' },
      createMacroCycleBriefDTO
    );
  }
}
