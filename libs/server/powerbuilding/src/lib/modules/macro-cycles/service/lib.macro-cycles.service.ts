import { Injectable } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { CreateMacroCycleDTO } from '../dtos/create-macro-cycle.dto';
import { MacroCycleEntity } from '../macro-cycle.entity';

@Injectable()
export abstract class LibMacroCyclesService extends LoggerClass {
  public abstract getAll(): Promise<MacroCycleEntity[]>;
  public abstract getById(id: string): Promise<MacroCycleEntity>;
  public abstract create(
    createMacroCycleDTO: CreateMacroCycleDTO
  ): Promise<MacroCycleEntity>;
}
