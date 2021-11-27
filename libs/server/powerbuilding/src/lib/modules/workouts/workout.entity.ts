import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IWorkoutModel } from '@powerbuilding-trainer/shared/core';

import { MesoCycleEntity } from '../meso-cycles/meso-cycle.entity';
import { MicroCycleEntity } from '../micro-cycles/micro-cycle.entity';
import { WorkoutExerciseEntity } from '../workout-exercises/workout-exercise.entity';

@Entity({ name: 'workouts' })
export class WorkoutEntity implements IWorkoutModel {
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

  @ApiProperty()
  @Column({ name: 'position', type: 'smallint' })
  public position: number;

  @ApiProperty()
  @Index()
  @JoinColumn({ name: 'meso_cycle_id' })
  @ManyToOne((): typeof MesoCycleEntity => MesoCycleEntity, { cascade: true })
  public mesoCycle?: MesoCycleEntity;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof MicroCycleEntity => MicroCycleEntity,
    (microCycle: MicroCycleEntity): WorkoutEntity => microCycle.workout
  )
  public microCycles?: MicroCycleEntity[];

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutExerciseEntity => WorkoutExerciseEntity,
    (workoutExercise: WorkoutExerciseEntity): WorkoutEntity =>
      workoutExercise.workout
  )
  public workoutExercises?: WorkoutExerciseEntity[];
}
