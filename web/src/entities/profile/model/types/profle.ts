import { TCurrency } from 'shared/constant/common';

export interface IProfile {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  avatar: string;
  currency: TCurrency;
}

export interface IProfileSchema {
  readonly: boolean;
  data?: IProfile;
}
