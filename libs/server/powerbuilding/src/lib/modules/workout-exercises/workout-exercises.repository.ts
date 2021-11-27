import { EntityRepository, Repository } from 'typeorm';

import { WorkoutExerciseEntity } from './workout-exercise.entity';

@EntityRepository(WorkoutExerciseEntity)
export class WorkoutExercisesRepository extends Repository<WorkoutExerciseEntity> {}
