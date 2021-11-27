import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IWorkoutSerieModel } from '@powerbuilding-trainer/shared/core';
import { nowUTC } from '@powerbuilding-trainer/shared/utils';

import { MicroCycleEntity } from '../../micro-cycles/entities/micro-cycle.entity';
import { WorkoutExerciseEntity } from '../../workout-exercises/entities/workout-exercise.entity';

@Entity({ name: 'workout_series' })
export class WorkoutSerieEntity implements IWorkoutSerieModel {
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
  @Column({ name: 'position', type: 'smallint' })
  public position: number;

  @ApiPropertyOptional()
  @Column({ name: 'reps', type: 'smallint' })
  public reps: number;

  @ApiPropertyOptional()
  @Column({ name: 'notes', type: 'text' })
  public notes: string;

  @ApiProperty()
  @Index()
  @JoinColumn({ name: 'micro_cycle_id' })
  @ManyToOne((): typeof MicroCycleEntity => MicroCycleEntity, { cascade: true })
  public microCycle?: MicroCycleEntity;

  @ApiProperty()
  @Index()
  @JoinColumn({ name: 'workout_exercise_id' })
  @ManyToOne((): typeof WorkoutExerciseEntity => WorkoutExerciseEntity, {
    cascade: true,
  })
  public workoutExercise?: WorkoutExerciseEntity;
}
