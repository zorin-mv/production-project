import { IStateSchema } from 'shared/config/store';

export const getProfileReadonly = (state: IStateSchema) => state.profile?.readonly;
