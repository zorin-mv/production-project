import { IStateSchema } from 'shared/config/store';
import { CURRENCY } from 'shared/constant/common';

import { getProfileData } from './get-profile-data';

describe('get-profile-data', () => {
  test('should return profile data', () => {
    const profile = {
      age: 20,
      avatar: '',
      city: 'Kharkiv',
      country: 'Ukraine',
      currency: CURRENCY.uah,
      firstName: 'Test',
      lastName: 'test',
      id: 'test-id',
    };

    const state: DeepPartial<IStateSchema> = {
      profile: {
        data: profile,
      },
    };

    expect(getProfileData(state as IStateSchema)).toEqual(profile);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileData(state as IStateSchema)).toEqual(undefined);
  });
});
