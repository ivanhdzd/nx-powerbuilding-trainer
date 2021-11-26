import { WORKOUT_EXERCISE_TYPE } from '../../enums/powerbuilding/workout-exercise-type.enum';
import { IBaseModel } from '../base/base.model';
import { IExerciseModel } from './exercise.model';
import { IWorkoutSerieModel } from './workout-serie.model';
import { IWorkoutModel } from './workout.model';

export interface IWorkoutExerciseModel extends IBaseModel {
  index: number;
  notes: string;
  type: WORKOUT_EXERCISE_TYPE;
  workout: IWorkoutModel;
  exercise: IExerciseModel;
  workoutSeries: IWorkoutSerieModel[];
}
