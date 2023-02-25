import { USER_ROLES } from '../../constants/roles';

export type TUserRoles = ValueOf<typeof USER_ROLES>;

export interface IUser {
  id: string;
  role: TUserRoles;
  email: string;
  created: Date;
}

export interface IUserSchema {
  token?: string;
  user?: IUser;
}
