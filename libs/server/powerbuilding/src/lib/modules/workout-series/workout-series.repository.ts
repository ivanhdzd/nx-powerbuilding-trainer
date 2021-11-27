import { EntityRepository, Repository } from 'typeorm';

import { WorkoutSerieEntity } from './workout-serie.entity';

@EntityRepository(WorkoutSerieEntity)
export class WorkoutSeriesRepository extends Repository<WorkoutSerieEntity> {}
