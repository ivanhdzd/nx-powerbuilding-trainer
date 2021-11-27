import { IBaseModel } from '../base/base.model';
import { IMicroCycleModel } from './micro-cycle.model';
import { IWorkoutExerciseModel } from './workout-exercise.model';

export interface IWorkoutSerieModel extends IBaseModel {
  position: number;
  reps: number;
  notes: string;
  microCycle?: IMicroCycleModel;
  workoutExercise?: IWorkoutExerciseModel;
}
