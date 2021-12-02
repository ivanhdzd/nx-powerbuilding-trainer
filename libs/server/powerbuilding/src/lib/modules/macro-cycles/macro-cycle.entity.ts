import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IMacroCycleModel } from '@powerbuilding-trainer/shared/core';

import { MesoCycleEntity } from '../meso-cycles/meso-cycle.entity';

@Entity({ name: 'macro_cycles' })
export class MacroCycleEntity implements IMacroCycleModel {
  @ApiPropertyOptional()
  @Expose()
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id?: string;

  @ApiPropertyOptional()
  @Expose()
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
  })
  public createdAt?: Date;

  @ApiPropertyOptional()
  @Expose()
  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  public updatedAt?: Date;

  @ApiProperty()
  @Expose()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @ApiPropertyOptional({
    type: MesoCycleEntity,
    isArray: true,
  })
  @Expose()
  @OneToMany(
    (): typeof MesoCycleEntity => MesoCycleEntity,
    (mesoCycle: MesoCycleEntity): MacroCycleEntity => mesoCycle.macroCycle
  )
  public mesoCycles?: MesoCycleEntity[];

  constructor(entity: MacroCycleEntity) {
    Object.assign(this, entity);
  }
}
