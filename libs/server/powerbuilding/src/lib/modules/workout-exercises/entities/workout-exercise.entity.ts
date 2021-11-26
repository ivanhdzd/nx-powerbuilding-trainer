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
import {
  IWorkoutExerciseModel,
  WORKOUT_EXERCISE_TYPE,
} from '@powerbuilding-trainer/shared/core';
import { nowUTC } from '@powerbuilding-trainer/shared/utils';

import { WorkoutEntity } from '../../workouts/entities/workout.entity';
import { ExerciseEntity } from '../../exercises/entities/exercise.entity';
import { WorkoutSerieEntity } from '../../workout-series/entities/workout-serie.entity';

@Entity({ name: 'workout_exercises' })
export class WorkoutExerciseEntity implements IWorkoutExerciseModel {
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
  @Column({ name: 'index', type: 'int' })
  public index: number;

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
  public workout: WorkoutEntity;

  @ApiProperty()
  @Index()
  @JoinColumn({ name: 'exercise_id' })
  @ManyToOne((): typeof ExerciseEntity => ExerciseEntity, { cascade: true })
  public exercise: ExerciseEntity;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutSerieEntity => WorkoutSerieEntity,
    (workoutSerie: WorkoutSerieEntity): WorkoutExerciseEntity =>
      workoutSerie.workoutExercise
  )
  public workoutSeries: WorkoutSerieEntity[];

  constructor(partial: Partial<WorkoutExerciseEntity>) {
    Object.assign(this, partial);
  }
}
