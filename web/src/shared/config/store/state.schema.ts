import { IUserSchema } from 'entities/user/model/types/user';
import { IAuthSchema } from 'features/auth/model/types/auth.schema';

export interface IStateSchema {
  user: IUserSchema;
  auth: IAuthSchema;
}
