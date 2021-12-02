import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IBaseModel } from '@powerbuilding-trainer/shared/core';

export abstract class CustomBaseEntity implements IBaseModel {
  @ApiPropertyOptional()
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id?: string;

  @ApiPropertyOptional()
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
    update: false,
  })
  public createdAt?: Date;

  @ApiPropertyOptional()
  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  public updatedAt?: Date;
}
