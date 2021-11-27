import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkoutEntity } from './workout.entity';
import { WorkoutsDAO } from './workouts.dao';
import { WorkoutsRepository } from './workouts.repository';
import { WorkoutsService } from './workouts.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutEntity, WorkoutsRepository])],
  providers: [WorkoutsDAO, WorkoutsService],
  exports: [TypeOrmModule, WorkoutsService],
})
export class WorkoutsModule {}
