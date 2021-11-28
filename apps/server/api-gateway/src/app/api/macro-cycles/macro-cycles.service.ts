import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoggerClass, MICROSERVICES } from '@powerbuilding-trainer/server/core';
import { MacroCycleEntity } from '@powerbuilding-trainer/server/powerbuilding';
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
}
