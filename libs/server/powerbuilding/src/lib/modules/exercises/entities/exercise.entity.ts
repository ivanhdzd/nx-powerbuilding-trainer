import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IExerciseModel } from '@powerbuilding-trainer/shared/core';
import { nowUTC } from '@powerbuilding-trainer/shared/utils';

import { WorkoutExerciseEntity } from '../../workout-exercises/entities/workout-exercise.entity';

@Entity({ name: 'exercises' })
export class ExerciseEntity implements IExerciseModel {
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
  @Column({ name: 'description', type: 'text' })
  public description: string;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutExerciseEntity => WorkoutExerciseEntity,
    (workoutExercise: WorkoutExerciseEntity): ExerciseEntity =>
      workoutExercise.exercise
  )
  public workoutExercises: WorkoutExerciseEntity[];

  constructor(partial: Partial<ExerciseEntity>) {
    Object.assign(this, partial);
  }
}
