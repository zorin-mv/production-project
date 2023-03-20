import { IStateSchema } from 'shared/config/store';

import { getAuthPassword } from './get-auth-password';

describe('get-auth-password', () => {
  test('should return user password', () => {
    const password = 'testpassword';
    const state: DeepPartial<IStateSchema> = {
      auth: {
        password,
      },
    };
    expect(getAuthPassword(state as IStateSchema)).toEqual(password);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getAuthPassword(state as IStateSchema)).toEqual('');
  });
});
