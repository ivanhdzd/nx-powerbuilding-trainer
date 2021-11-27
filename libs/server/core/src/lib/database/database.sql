DROP DATABASE IF EXISTS powerbuilding_trainer;

CREATE DATABASE IF NOT EXISTS powerbuilding_trainer;

USE powerbuilding_trainer;

/* EXERCISE */

DROP TABLE IF EXISTS exercises;

CREATE TABLE IF NOT EXISTS exercises(
  id VARCHAR(32) NOT NULL UNIQUE PRIMARY KEY DEFAULT (uuid()),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  name VARCHAR(64) NOT NULL,
  description TEXT
);

/* MACRO_CYCLES */

DROP TABLE IF EXISTS macro_cycles;

CREATE TABLE IF NOT EXISTS macro_cycles(
  id VARCHAR(32) NOT NULL UNIQUE PRIMARY KEY DEFAULT (uuid()),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  name VARCHAR(64) NOT NULL
);

/* MESO_CYCLES */

DROP TABLE IF EXISTS meso_cycles;

CREATE TABLE IF NOT EXISTS meso_cycles(
  id VARCHAR(32) NOT NULL UNIQUE PRIMARY KEY DEFAULT (uuid()),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  name VARCHAR(64) NOT NULL,
  position TINYINT NOT NULL,
  macro_cycle_id VARCHAR(32) NOT NULL,
  FOREIGN KEY (macro_cycle_id) REFERENCES macro_cycles(id)
);

/* WORKOUTS */

DROP TABLE IF EXISTS workouts;

CREATE TABLE IF NOT EXISTS workouts(
  id VARCHAR(32) NOT NULL UNIQUE PRIMARY KEY DEFAULT (uuid()),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  name VARCHAR(64) NOT NULL,
  position TINYINT NOT NULL,
  meso_cycle_id VARCHAR(32) NOT NULL,
  FOREIGN KEY (meso_cycle_id) REFERENCES meso_cycles(id)
);

/* MICRO_CYCLES */

DROP TABLE IF EXISTS micro_cycles;

CREATE TABLE IF NOT EXISTS micro_cycles(
  id VARCHAR(32) NOT NULL UNIQUE PRIMARY KEY DEFAULT (uuid()),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  name VARCHAR(64) NOT NULL,
  position TINYINT NOT NULL,
  workout_id VARCHAR(32) NOT NULL,
  FOREIGN KEY (workout_id) REFERENCES workouts(id)
);


/* WORKOUT_EXERCISES */

DROP TABLE IF EXISTS workout_exercises;

CREATE TABLE IF NOT EXISTS workout_exercises(
  id VARCHAR(32) NOT NULL UNIQUE PRIMARY KEY DEFAULT (uuid()),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  position TINYINT NOT NULL,
  notes TEXT NOT NULL,
  type VARCHAR(32) NOT NULL,
  workout_id VARCHAR(32) NOT NULL,
  exercise_id VARCHAR(32) NOT NULL,
  FOREIGN KEY (workout_id) REFERENCES workouts(id),
  FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);

/* MICRO_CYCLES_WORKOUT_EXERCISES */

DROP TABLE IF EXISTS micro_cycles_workout_exercises;

CREATE TABLE IF NOT EXISTS micro_cycles_workout_exercises(
  micro_cycle_id VARCHAR(32) NOT NULL,
  workout_exercise_id VARCHAR(32) NOT NULL,
  FOREIGN KEY (micro_cycle_id) REFERENCES micro_cycles(id),
  FOREIGN KEY (workout_exercise_id) REFERENCES workout_exercises(id)
);

/* WORKOUT_SERIES */

DROP TABLE IF EXISTS workout_series;

CREATE TABLE IF NOT EXISTS workout_series(
  id VARCHAR(32) NOT NULL UNIQUE PRIMARY KEY DEFAULT (uuid()),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  position TINYINT NOT NULL,
  reps TINYINT NOT NULL,
  notes TEXT NOT NULL,
  micro_cycle_id VARCHAR(32) NOT NULL,
  workout_exercise_id VARCHAR(32) NOT NULL,
  FOREIGN KEY (micro_cycle_id) REFERENCES micro_cycles(id),
  FOREIGN KEY (workout_exercise_id) REFERENCES workout_exercises(id)
);
