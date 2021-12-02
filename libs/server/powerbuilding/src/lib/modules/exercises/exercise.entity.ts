import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CustomBaseEntity } from '@powerbuilding-trainer/server/core';
import { IExerciseModel } from '@powerbuilding-trainer/shared/core';
import { Entity, Column, OneToMany } from 'typeorm';

import { WorkoutExerciseEntity } from '../workout-exercises/workout-exercise.entity';

@Entity({ name: 'exercises' })
export class ExerciseEntity extends CustomBaseEntity implements IExerciseModel {
  @ApiProperty()
  @Column({ name: 'name', type: 'varchar', unique: true })
  public name: string;

  @ApiPropertyOptional()
  @Column({ name: 'description', type: 'text', nullable: true })
  public description?: string;

  @ApiPropertyOptional()
  @OneToMany(
    (): typeof WorkoutExerciseEntity => WorkoutExerciseEntity,
    (workoutExercise: WorkoutExerciseEntity): ExerciseEntity =>
      workoutExercise.exercise
  )
  public workoutExercises?: WorkoutExerciseEntity[];

  constructor(entity: ExerciseEntity) {
    super();
    Object.assign(this, entity);
  }
}
