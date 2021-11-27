import { ExerciseEntity } from '../modules/exercises';
import { MacroCycleEntity } from '../modules/macro-cycles';
import { MesoCycleEntity } from '../modules/meso-cycles';
import { MicroCycleEntity } from '../modules/micro-cycles';
import { WorkoutExerciseEntity } from '../modules/workout-exercises';
import { WorkoutSerieEntity } from '../modules/workout-series';
import { WorkoutEntity } from '../modules/workouts';

type TPowerbuildingEntity =
  | typeof ExerciseEntity
  | typeof MacroCycleEntity
  | typeof MesoCycleEntity
  | typeof MicroCycleEntity
  | typeof WorkoutExerciseEntity
  | typeof WorkoutSerieEntity
  | typeof WorkoutEntity;

export const POWERBUILDING_ENTITIES: TPowerbuildingEntity[] = [
  ExerciseEntity,
  MacroCycleEntity,
  MesoCycleEntity,
  MicroCycleEntity,
  WorkoutExerciseEntity,
  WorkoutSerieEntity,
  WorkoutEntity,
];
