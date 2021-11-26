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
import { IWorkoutModel } from '@powerbuilding-trainer/shared/core';
import { nowUTC } from '@powerbuilding-trainer/shared/utils';

import { MesoCycleEntity } from '../../meso-cycles/entities/meso-cycle.entity';
import { MicroCycleEntity } from '../../micro-cycles/entities/micro-cycle.entity';
import { WorkoutExerciseEntity } from '../../workout-exercises/entities/workout-exercise.entity';

@Entity({ name: 'workouts' })
export class WorkoutEntity implements IWorkoutModel {
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
  @JoinColumn({ name: 'meso_cycle_id' })
  @ManyToOne((): typeof MesoCycleEntity => MesoCycleEntity, { cascade: true })
  public mesoCycle: MesoCycleEntity;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof MicroCycleEntity => MicroCycleEntity,
    (microCycle: MicroCycleEntity): WorkoutEntity => microCycle.workout
  )
  public microCycles: MicroCycleEntity[];

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutExerciseEntity => WorkoutExerciseEntity,
    (workoutExercise: WorkoutExerciseEntity): WorkoutEntity =>
      workoutExercise.workout
  )
  public workoutExercises: WorkoutExerciseEntity[];

  constructor(partial: Partial<WorkoutEntity>) {
    Object.assign(this, partial);
  }
}
