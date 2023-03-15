import { IStateSchema } from 'shared/config/store';

export const getAuthEmail = (state: IStateSchema) => state?.auth?.email || '';
