import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IExerciseModel } from '@powerbuilding-trainer/shared/core';

import { WorkoutExerciseEntity } from '../workout-exercises/workout-exercise.entity';

@Entity({ name: 'exercises' })
export class ExerciseEntity implements IExerciseModel {
  @ApiPropertyOptional()
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id?: string;

  @ApiPropertyOptional()
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
    update: false,
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
    Object.assign(this, entity);
  }
}
