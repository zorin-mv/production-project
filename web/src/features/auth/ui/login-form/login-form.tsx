import { memo } from 'react';
import { classNames } from 'shared/lib/class-names';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';

import { IResponseError } from 'shared/types/error-response.typings';
import { authReducer } from '../../model/slice/auth.slice';
import classes from './login-form.module.scss';

import { useLoginFormState } from './login-form.state';

export interface ILoginFormProps {
  onSuccess: () => void;
  className?: string;
}

const initialReducers: TReducersList = { auth: authReducer };

const LoginForm = memo(({ className, onSuccess }: ILoginFormProps) => {
  const { email, error, isLoading, password, onChangeEmail, onChangePassword, onLoginClick, t } = useLoginFormState({
    onSuccess,
  });

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div data-testid="login-form" className={classNames(classes.loginForm, [className])}>
        <Text title={t('auth-form')} />
        {error ? (
          <Text
            className={classes.error}
            theme="error"
            text={'data' in error ? (error as IResponseError).data.message : 'error'}
          />
        ) : null}
        <Input className={classes.input} placeholder={t('email')} autoFocus onChange={onChangeEmail} value={email} />
        <Input
          className={classes.input}
          placeholder={t('password')}
          onChange={onChangePassword}
          value={password}
          type="password"
        />
        <Button theme="outline" className={classes.loginBtn} onClick={onLoginClick} disabled={isLoading}>
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
