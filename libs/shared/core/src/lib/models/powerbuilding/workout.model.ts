import { IBaseModel } from '../base/base.model';
import { IMesoCycleModel } from './meso-cycle.model';
import { IMicroCycleModel } from './micro-cycle.model';
import { IWorkoutExerciseModel } from './workout-exercise.model';

export interface IWorkoutModel extends IBaseModel {
  name: string;
  index: number;
  mesoCycle: IMesoCycleModel;
  microCycles: IMicroCycleModel[];
  workoutExercises: IWorkoutExerciseModel[];
}
