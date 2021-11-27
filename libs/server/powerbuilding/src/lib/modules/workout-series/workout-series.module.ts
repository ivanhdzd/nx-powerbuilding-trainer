import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkoutSerieEntity } from './workout-serie.entity';
import { WorkoutSeriesDAO } from './workout-series.dao';
import { WorkoutSeriesRepository } from './workout-series.repository';
import { WorkoutSeriesService } from './workout-series.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutSerieEntity, WorkoutSeriesRepository]),
  ],
  providers: [WorkoutSeriesDAO, WorkoutSeriesService],
  exports: [TypeOrmModule, WorkoutSeriesService],
})
export class WorkoutSeriesModule {}
