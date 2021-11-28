import { IBaseModel } from '../base/base.model';
import { IMesoCycleModel } from './meso-cycle.model';

export interface IMacroCycleModel extends IBaseModel {
  name: string;
  mesoCycles?: IMesoCycleModel[];
}

export type TMacroCycleModelArrayModelProps = 'mesoCycles';
