import { IBaseModel } from '../base/base.model';
import { IWorkoutExerciseModel } from './workout-exercise.model';
import { IWorkoutSerieModel } from './workout-serie.model';
import { IWorkoutModel } from './workout.model';

export interface IMicroCycleModel extends IBaseModel {
  name: string;
  position: number;
  workout?: IWorkoutModel;
  workoutSeries?: IWorkoutSerieModel[];
  workoutExercises?: IWorkoutExerciseModel[];
}
