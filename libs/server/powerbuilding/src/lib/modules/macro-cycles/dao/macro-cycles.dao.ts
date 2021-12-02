import { Injectable, Logger } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';

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

  public async getById(id: string): Promise<MacroCycleEntity> {
    this.logger.debug(`Getting macro cycle by ID: ${id}`, 'getById');
    const options: FindOneOptions<MacroCycleEntity> = {
      relations: ['mesoCycles'],
    };
    return this.macroCyclesRepository.findOne(id, options);
  }

  public async create(macroCycle: MacroCycleEntity): Promise<MacroCycleEntity> {
    macroCycle = await this.macroCyclesRepository.save(macroCycle);
    this.logger.log('New macro cycle created', 'create');
    this.logger.debug(macroCycle, 'create');
    return macroCycle;
  }
}
