import {
  Column,
  Entity,
  JoinColumn,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IMesoCycleModel } from '@powerbuilding-trainer/shared/core';
import { nowUTC } from '@powerbuilding-trainer/shared/utils';

import { MacroCycleEntity } from '../../macro-cycles/entities/macro-cycle.entity';
import { WorkoutEntity } from '../../workouts/entities/workout.entity';

@Entity({ name: 'meso_cycles' })
export class MesoCycleEntity implements IMesoCycleModel {
  @ApiPropertyOptional()
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id?: string;

  @ApiPropertyOptional()
  @Column({ name: 'created_at', default: nowUTC() })
  public createdAt?: Date;

  @ApiPropertyOptional()
  @Column({ name: 'updated_at', default: nowUTC() })
  public updatedAt?: Date;

  @ApiProperty()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @ApiProperty()
  @Column({ name: 'position', type: 'smallint' })
  public position: number;

  @ApiProperty()
  @Index()
  @JoinColumn({ name: 'macro_cycle_id' })
  @ManyToOne((): typeof MacroCycleEntity => MacroCycleEntity, { cascade: true })
  public macroCycle?: MacroCycleEntity;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutEntity => WorkoutEntity,
    (workout: WorkoutEntity): MesoCycleEntity => workout.mesoCycle
  )
  public workouts?: WorkoutEntity[];
}
