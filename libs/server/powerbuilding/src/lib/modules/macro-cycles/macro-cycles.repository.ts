import { EntityRepository, Repository } from 'typeorm';

import { MacroCycleEntity } from './macro-cycle.entity';

@EntityRepository(MacroCycleEntity)
export class MacroCyclesRepository extends Repository<MacroCycleEntity> {}
