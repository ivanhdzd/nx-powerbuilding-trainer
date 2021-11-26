import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IMicroCycleModel } from '@powerbuilding-trainer/shared/core';
import { nowUTC } from '@powerbuilding-trainer/shared/utils';

import { WorkoutSerieEntity } from '../../workout-series/entities/workout-serie.entity';
import { WorkoutEntity } from '../../workouts/entities/workout.entity';

@Entity({ name: 'micro_cycles' })
export class MicroCycleEntity implements IMicroCycleModel {
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

  @ApiProperty()
  @Column({ name: 'index', type: 'int' })
  public index: number;

  @ApiProperty()
  @Index()
  @JoinColumn({ name: 'workout_id' })
  @ManyToOne((): typeof WorkoutEntity => WorkoutEntity, { cascade: true })
  public workout: WorkoutEntity;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutSerieEntity => WorkoutSerieEntity,
    (workoutSerie: WorkoutSerieEntity): MicroCycleEntity =>
      workoutSerie.microCycle
  )
  public workoutSeries: WorkoutSerieEntity[];

  constructor(partial: Partial<MicroCycleEntity>) {
    Object.assign(this, partial);
  }
}
