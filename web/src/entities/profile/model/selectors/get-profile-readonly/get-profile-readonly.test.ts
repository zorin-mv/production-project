import { IStateSchema } from 'shared/config/store';

import { getProfileReadonly } from './get-profile-readonly';

describe('get-profile-readonly', () => {
  test('should return profile readonly', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: false,
      },
    };

    expect(getProfileReadonly(state as IStateSchema)).toBe(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileReadonly(state as IStateSchema)).toEqual(undefined);
  });
});
