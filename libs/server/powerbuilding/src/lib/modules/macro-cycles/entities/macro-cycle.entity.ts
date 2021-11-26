import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IMacroCycleModel } from '@powerbuilding-trainer/shared/core';
import { nowUTC } from '@powerbuilding-trainer/shared/utils';

import { MesoCycleEntity } from '../../meso-cycles/entities/meso-cycle.entity';

@Entity({ name: 'macro_cycles' })
export class MacroCycleEntity implements IMacroCycleModel {
  @ApiPropertyOptional()
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id: string;

  @ApiPropertyOptional()
  @Column({ name: 'created_at', default: nowUTC() })
  public createdAt: Date;

  @ApiPropertyOptional()
  @Column({ name: 'updated_at', default: nowUTC() })
  public updatedAt: Date;

  @ApiProperty()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof MesoCycleEntity => MesoCycleEntity,
    (mesoCycle: MesoCycleEntity): MacroCycleEntity => mesoCycle.macroCycle
  )
  public mesoCycles: MesoCycleEntity[];

  constructor(partial: Partial<MacroCycleEntity>) {
    Object.assign(this, partial);
  }
}
