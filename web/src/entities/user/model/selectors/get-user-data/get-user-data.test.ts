import { DeepPartial } from '@reduxjs/toolkit';
import { getUserData } from 'entities/user';
import { USER_ROLES } from 'entities/user/constants/roles';
import { IStateSchema } from 'shared/config/store';

describe('get-user-data', () => {
  test('should return user data', () => {
    const user = {
      token: 'testtoken',
      user: {
        id: 'test1',
        email: 'test@mail.com',
        role: USER_ROLES.USER,
      },
    };

    const state: DeepPartial<IStateSchema> = {
      user,
    };

    expect(getUserData(state as IStateSchema)).toEqual(user);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getUserData(state as IStateSchema)).toEqual(undefined);
  });
});
