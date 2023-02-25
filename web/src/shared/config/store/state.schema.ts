import { ICounterSchema } from 'entities/counter';
import { IUserSchema } from 'entities/user/model/types/user';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
}
