import { FC, lazy } from 'react';

import { ILoginFormProps } from './login-form';

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(() => import('./login-form'));
