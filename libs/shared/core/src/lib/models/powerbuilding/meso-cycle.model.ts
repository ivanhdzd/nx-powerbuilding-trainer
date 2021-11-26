import { IBaseModel } from '../base/base.model';
import { IMacroCycleModel } from './macro-cycle.model';
import { IWorkoutModel } from './workout.model';

export interface IMesoCycleModel extends IBaseModel {
  name: string;
  index: number;
  macroCycle: IMacroCycleModel;
  workouts: IWorkoutModel[];
}
