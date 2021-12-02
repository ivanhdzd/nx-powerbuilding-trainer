import { Injectable, Logger } from '@nestjs/common';

import { LibMacroCyclesDAO } from '../dao/lib.macro-cycles.dao';
import { CreateMacroCycleDTO } from '../dtos/create-macro-cycle.dto';
import { MacroCycleEntity } from '../macro-cycle.entity';
import { LibMacroCyclesService } from './lib.macro-cycles.service';

@Injectable()
export class MacroCyclesService extends LibMacroCyclesService {
  constructor(
    logger: Logger,
    private readonly macroCyclesDAO: LibMacroCyclesDAO
  ) {
    super(logger);
  }

  public async getAll(): Promise<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.macroCyclesDAO.getAll();
  }

  public async getById(id: string): Promise<MacroCycleEntity> {
    this.logger.debug(`Getting macro cycle by ID: ${id}`, 'getById');
    return this.macroCyclesDAO.getById(id);
  }

  public async create(
    createMacroCycleDTO: CreateMacroCycleDTO
  ): Promise<MacroCycleEntity> {
    const macroCycle: MacroCycleEntity = new MacroCycleEntity(
      createMacroCycleDTO
    );
    this.logger.log('Creating macro cycle entity', 'create');
    this.logger.debug(macroCycle, 'create');
    return this.macroCyclesDAO.create(macroCycle);
  }
}
