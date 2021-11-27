import { EntityRepository, Repository } from 'typeorm';

import { MicroCycleEntity } from './micro-cycle.entity';

@EntityRepository(MicroCycleEntity)
export class MicroCyclesRepository extends Repository<MicroCycleEntity> {}
