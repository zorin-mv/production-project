import { getAuthEmail } from 'features/auth/model/selectors/get-auth-email/get-auth-email';
import { getAuthPassword } from 'features/auth/model/selectors/get-auth-password/get-auth-password';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { IReduxStoreWithManager } from 'shared/config/store/state.schema';
import { classNames } from 'shared/lib/class-names';
import {
  DynamicModuleLoader,
  TReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';

import { useLogInMutation } from 'features/auth/model/services/auth/auth.api';
import { IResponseError } from 'shared/types/error-response.typings';
import { authActions, authReducer } from '../../model/slice/auth.slice';
import classes from './login-form.module.scss';

export interface ILoginFormProps {
  className?: string;
  onCloseModal?: () => void;
}

const initialReducers: TReducersList = { auth: authReducer };

const LoginForm = memo(({ className, onCloseModal }: ILoginFormProps) => {
  const { t } = useTranslation();

  const store = useStore() as IReduxStoreWithManager;

  const [loginUser, { isLoading, error }] = useLogInMutation();

  const dispatch = useDispatch();

  const email = useSelector(getAuthEmail);
  const password = useSelector(getAuthPassword);

  useEffect(() => {
    store.reducerManager.add('auth', authReducer);
    dispatch({ type: '@@INIT auth reducer' });

    return () => {
      store.reducerManager.remove('auth');
      dispatch({ type: '@@DESTROY auth reducer' });
    };
  }, []);

  const onChangeEmail = useCallback(
    (email: string) => {
      dispatch(authActions.setEmail(email));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(authActions.setPassword(password));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    await loginUser({ email, password });
    onCloseModal?.();
  }, [email, password, loginUser, onCloseModal]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div
        data-testid="login-form"
        className={classNames(classes.loginForm, [className])}
      >
        <Text title={t('auth-form')} />
        {error ? (
          <Text
            className={classes.error}
            theme="error"
            text={
              'data' in error ? (error as IResponseError).data.message : 'error'
            }
          />
        ) : null}
        <Input
          className={classes.input}
          placeholder={t('email')}
          autoFocus
          onChange={onChangeEmail}
          value={email}
        />
        <Input
          className={classes.input}
          placeholder={t('password')}
          onChange={onChangePassword}
          value={password}
          type="password"
        />
        <Button
          theme="outline"
          className={classes.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
