import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';

import { useLogInMutation } from 'features/auth/model/services/auth/auth.api';
import { IResponseError } from 'shared/types/error-response.typings';
import { authActions } from '../../model/slice/auth.slice';
import classes from './login-form.module.scss';

import { getAuthState } from '../../model/selectors/get-auth-state/get-auth-state';

interface ILoginFormProps {
  className?: string;
  onCloseModal?: () => void;
}

export const LoginForm = memo(
  ({ className, onCloseModal }: ILoginFormProps) => {
    const { t } = useTranslation();

    const [loginUser, { isLoading, error }] = useLogInMutation();

    const dispatch = useDispatch();

    const { email, password } = useSelector(getAuthState);

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

    const onLoginClick = useCallback(() => {
      loginUser({ email, password });
      onCloseModal?.();
    }, [email, password, loginUser, onCloseModal]);

    return (
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
    );
  }
);
