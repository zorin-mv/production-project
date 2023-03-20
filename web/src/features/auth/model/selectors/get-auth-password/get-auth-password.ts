import { IStateSchema } from 'shared/config/store';

export const getAuthPassword = (state: IStateSchema) => state?.auth?.password || '';
