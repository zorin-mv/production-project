import { IStateSchema } from 'shared/config/store';

export const getProfileData = (state: IStateSchema) => state.profile?.data;
