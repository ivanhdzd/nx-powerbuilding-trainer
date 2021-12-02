import { Injectable } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { MacroCycleEntity } from '../macro-cycle.entity';

@Injectable()
export abstract class LibMacroCyclesDAO extends LoggerClass {
  public abstract getAll(): Promise<MacroCycleEntity[]>;
  public abstract getById(id: string): Promise<MacroCycleEntity>;
  public abstract create(
    macroCycle: MacroCycleEntity
  ): Promise<MacroCycleEntity>;
}
