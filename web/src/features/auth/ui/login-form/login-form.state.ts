import { ChangeEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthEmail } from '../../model/selectors/get-auth-email/get-auth-email';
import { getAuthPassword } from '../../model/selectors/get-auth-password/get-auth-password';
import { authActions } from '../../model/slice/auth.slice';

import { useLogInMutation } from '../../model/services/auth-api/auth.api';

interface IUseLoginFormStateProps {
  onSuccess: () => void;
}

export const useLoginFormState = ({ onSuccess }: IUseLoginFormStateProps) => {
  const { t } = useTranslation();

  const [loginUser, { isLoading, error }] = useLogInMutation();

  const dispatch = useDispatch();

  const email = useSelector(getAuthEmail);
  const password = useSelector(getAuthPassword);

  const onChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(authActions.setEmail(event.target.value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(authActions.setPassword(event.target.value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    await loginUser({ email, password });
    onSuccess?.();
  }, [email, password, loginUser, onSuccess]);

  return {
    t,
    onLoginClick,
    onChangePassword,
    onChangeEmail,
    isLoading,
    error,
    password,
    email,
  };
};
