import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IMacroCycleModel } from '@powerbuilding-trainer/shared/core';

import { MesoCycleEntity } from '../meso-cycles/meso-cycle.entity';

@Entity({ name: 'macro_cycles' })
export class MacroCycleEntity implements IMacroCycleModel {
  @ApiPropertyOptional()
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id?: string;

  @ApiPropertyOptional()
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
  })
  public createdAt?: Date;

  @ApiPropertyOptional()
  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  public updatedAt?: Date;

  @ApiProperty()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof MesoCycleEntity => MesoCycleEntity,
    (mesoCycle: MesoCycleEntity): MacroCycleEntity => mesoCycle.macroCycle
  )
  public mesoCycles?: MesoCycleEntity[];
}
