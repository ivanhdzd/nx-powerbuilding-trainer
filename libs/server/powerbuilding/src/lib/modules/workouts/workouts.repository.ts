import { EntityRepository, Repository } from 'typeorm';

import { WorkoutEntity } from './workout.entity';

@EntityRepository(WorkoutEntity)
export class WorkoutsRepository extends Repository<WorkoutEntity> {}
