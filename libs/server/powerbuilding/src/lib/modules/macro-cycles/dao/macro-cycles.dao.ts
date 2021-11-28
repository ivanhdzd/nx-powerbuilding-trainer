import { Injectable, Logger } from '@nestjs/common';

import { MacroCycleEntity } from '../macro-cycle.entity';
import { MacroCyclesRepository } from '../macro-cycles.repository';
import { LibMacroCyclesDAO } from './lib.macro-cycles.dao';

@Injectable()
export class MacroCyclesDAO extends LibMacroCyclesDAO {
  constructor(
    logger: Logger,
    private readonly macroCyclesRepository: MacroCyclesRepository
  ) {
    super(logger);
  }

  public async getAll(): Promise<MacroCycleEntity[]> {
    this.logger.debug('Getting all macro cycles list', 'getAll');
    return this.macroCyclesRepository.find();
  }

  public async create(macroCycle: MacroCycleEntity): Promise<MacroCycleEntity> {
    macroCycle = await this.macroCyclesRepository.save(macroCycle);
    this.logger.log('New macro cycle created', 'create');
    this.logger.debug(macroCycle, 'create');
    return macroCycle;
  }
}
