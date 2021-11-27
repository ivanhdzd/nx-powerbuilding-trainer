import { EntityRepository, Repository } from 'typeorm';

import { MesoCycleEntity } from './meso-cycle.entity';

@EntityRepository(MesoCycleEntity)
export class MesoCyclesRepository extends Repository<MesoCycleEntity> {}
