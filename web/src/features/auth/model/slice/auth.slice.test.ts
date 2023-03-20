import { IAuthSchema } from 'features/auth/model/types/auth.schema';

import { authActions, authReducer } from './auth.slice';

describe('auth-slice-test', () => {
  test('test set email', () => {
    const state: DeepPartial<IAuthSchema> = {
      email: 'test@mail.com',
    };
    expect(authReducer(state as IAuthSchema, authActions.setEmail('changedtest@mail.com'))).toEqual({
      email: 'changedtest@mail.com',
    });
  });

  test('test set password', () => {
    const state: DeepPartial<IAuthSchema> = {
      password: 'password',
    };
    expect(authReducer(state as IAuthSchema, authActions.setPassword('changedpassword'))).toEqual({
      password: 'changedpassword',
    });
  });
});
