import { IBaseModel } from '../base/base.model';
import { IWorkoutSerieModel } from './workout-serie.model';
import { IWorkoutModel } from './workout.model';

export interface IMicroCycleModel extends IBaseModel {
  name: string;
  index: number;
  workout: IWorkoutModel;
  workoutSeries: IWorkoutSerieModel[];
}
