import { EntityRepository, Repository } from 'typeorm';

import { ExerciseEntity } from './exercise.entity';

@EntityRepository(ExerciseEntity)
export class ExercisesRepository extends Repository<ExerciseEntity> {}
