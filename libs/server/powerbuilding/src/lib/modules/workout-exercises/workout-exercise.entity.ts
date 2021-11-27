import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  IWorkoutExerciseModel,
  WORKOUT_EXERCISE_TYPE,
} from '@powerbuilding-trainer/shared/core';

import { WorkoutEntity } from '../workouts/workout.entity';
import { ExerciseEntity } from '../exercises/exercise.entity';
import { WorkoutSerieEntity } from '../workout-series/workout-serie.entity';
import { MicroCycleEntity } from '../micro-cycles/micro-cycle.entity';

@Entity({ name: 'workout_exercises' })
export class WorkoutExerciseEntity implements IWorkoutExerciseModel {
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
  @Column({ name: 'notes', type: 'text' })
  public notes: string;

  @ApiProperty()
  @Column({ name: 'type', type: 'varchar' })
  public type: WORKOUT_EXERCISE_TYPE;

  @ApiProperty()
  @Index()
  @JoinColumn({ name: 'workout_id' })
  @ManyToOne((): typeof WorkoutEntity => WorkoutEntity, { cascade: true })
  public workout?: WorkoutEntity;

  @ApiProperty()
  @Index()
  @JoinColumn({ name: 'exercise_id' })
  @ManyToOne((): typeof ExerciseEntity => ExerciseEntity, { cascade: true })
  public exercise?: ExerciseEntity;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutSerieEntity => WorkoutSerieEntity,
    (workoutSerie: WorkoutSerieEntity): WorkoutExerciseEntity =>
      workoutSerie.workoutExercise
  )
  public workoutSeries?: WorkoutSerieEntity[];

  @ApiPropertyOptional()
  @Exclude()
  @ManyToMany(
    (): typeof MicroCycleEntity => MicroCycleEntity,
    (microCycle: MicroCycleEntity): WorkoutExerciseEntity[] =>
      microCycle.workoutExercises
  )
  public microCycles?: MicroCycleEntity[];
}
