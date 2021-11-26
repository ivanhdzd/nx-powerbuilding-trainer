import { IBaseModel } from '../base/base.model';
import { IWorkoutExerciseModel } from './workout-exercise.model';

export interface IExerciseModel extends IBaseModel {
  name: string;
  description: string;
  workoutExercises: IWorkoutExerciseModel[];
}
