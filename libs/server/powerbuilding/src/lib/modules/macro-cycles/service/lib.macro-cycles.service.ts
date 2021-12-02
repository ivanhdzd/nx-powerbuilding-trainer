import { Injectable } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { CreateMacroCycleBriefDTO } from '../dtos/create-macro-cycle-brief.dto';
import { MacroCycleEntity } from '../macro-cycle.entity';

@Injectable()
export abstract class LibMacroCyclesService extends LoggerClass {
  public abstract getAll(): Promise<MacroCycleEntity[]>;
  public abstract getById(id: string): Promise<MacroCycleEntity>;
  public abstract createBrief(
    createMacroCycleBriefDTO: CreateMacroCycleBriefDTO
  ): Promise<MacroCycleEntity>;
}
