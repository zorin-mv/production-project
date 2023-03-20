import { getAuthEmail } from 'features/auth/model/selectors/get-auth-email/get-auth-email';
import { IStateSchema } from 'shared/config/store';

describe('get-auth-email', () => {
  test('should return user email', () => {
    const email = 'test@mail.com';
    const state: DeepPartial<IStateSchema> = {
      auth: {
        email,
      },
    };
    expect(getAuthEmail(state as IStateSchema)).toEqual(email);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getAuthEmail(state as IStateSchema)).toEqual('');
  });
});
