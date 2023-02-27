import { getUserData } from 'entities/user';
import { LoginModal } from 'features/auth';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';

import { useLazyLogOutQuery } from 'features/auth/model/services/auth/auth.api';
import classes from './navbar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar = ({ className }: INavBarProps) => {
  const { t } = useTranslation();

  const [logout] = useLazyLogOutQuery();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { token, user } = useSelector(getUserData);

  const onCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  const onShowModal = () => {
    setIsAuthModalOpen(true);
  };

  const onLogout = () => {
    logout();
  };

  if (token && user) {
    return (
      <div className={classNames(classes.navbar, [className])}>
        <div className={classes.content}>
          <Button onClick={onLogout} theme="clear" isColorInverted>
            {t('Logout')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(classes.navbar, [className])}>
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
      <div className={classes.content}>
        <Button onClick={onShowModal} theme="clear" isColorInverted>
          {t('Login')}
        </Button>
      </div>
    </div>
  );
};
