import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

import classes from './login-form.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div
      data-testid="login-form"
      className={classNames(classes.loginForm, [className])}
    >
      <Input className={classes.input} placeholder={t('email')} autoFocus />
      <Input className={classes.input} placeholder={t('password')} />
      <Button theme="outline" className={classes.loginBtn}>
        {t('Login')}
      </Button>
    </div>
  );
};
