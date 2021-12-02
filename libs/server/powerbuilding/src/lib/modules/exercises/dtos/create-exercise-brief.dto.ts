import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import {
  IExerciseModel,
  TBaseModelAutogeneratedProps,
  TExerciseModelArrayModelProps,
} from '@powerbuilding-trainer/shared/core';

type TCreateExerciseBriefDTO = Omit<
  IExerciseModel,
  TBaseModelAutogeneratedProps | TExerciseModelArrayModelProps
>;

export class CreateExerciseBriefDTO implements TCreateExerciseBriefDTO {
  @ApiProperty()
  @Expose()
  @IsString()
  public name: string;

  @ApiPropertyOptional()
  @Expose()
  @IsString()
  public description?: string;
  constructor(dto: CreateExerciseBriefDTO) {
    Object.assign(this, dto);
  }
}