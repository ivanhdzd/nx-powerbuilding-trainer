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

import { MicroCycleEntity } from '../micro-cycles/micro-cycle.entity';
import { WorkoutExerciseEntity } from '../workout-exercises/workout-exercise.entity';

@Entity({ name: 'workout_series' })
export class WorkoutSerieEntity implements IWorkoutSerieModel {
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
