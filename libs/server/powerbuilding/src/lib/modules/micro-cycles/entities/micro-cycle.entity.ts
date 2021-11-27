import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IMicroCycleModel } from '@powerbuilding-trainer/shared/core';
import { nowUTC } from '@powerbuilding-trainer/shared/utils';

import { WorkoutSerieEntity } from '../../workout-series/entities/workout-serie.entity';
import { WorkoutEntity } from '../../workouts/entities/workout.entity';
import { WorkoutExerciseEntity } from '../../workout-exercises/entities/workout-exercise.entity';

@Entity({ name: 'micro_cycles' })
export class MicroCycleEntity implements IMicroCycleModel {
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
  @JoinColumn({ name: 'workout_id' })
  @ManyToOne((): typeof WorkoutEntity => WorkoutEntity, { cascade: true })
  public workout?: WorkoutEntity;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutSerieEntity => WorkoutSerieEntity,
    (workoutSerie: WorkoutSerieEntity): MicroCycleEntity =>
      workoutSerie.microCycle
  )
  public workoutSeries?: WorkoutSerieEntity[];

  @ApiPropertyOptional()
  @ManyToMany(
    (): typeof WorkoutExerciseEntity => WorkoutExerciseEntity,
    (workoutExercise: WorkoutExerciseEntity): MicroCycleEntity[] =>
      workoutExercise.microCycles
  )
  @JoinTable({
    name: 'micro_cycles_workout_exercises',
    joinColumn: { name: 'micro_cycle_id' },
    inverseJoinColumn: { name: 'workout_exercise_id' },
  })
  public workoutExercises?: WorkoutExerciseEntity[];
}
