import { IStateSchema } from 'shared/config/store';

export const getProfileLoading = (state: IStateSchema) => state.profile?.isLoading;
