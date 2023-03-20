import { IStateSchema } from 'shared/config/store';

export const getProfileError = (state: IStateSchema) => state.profile?.error;
