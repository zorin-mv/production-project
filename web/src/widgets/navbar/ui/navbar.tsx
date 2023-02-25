import { LoginModal } from 'features/auth';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';

import classes from './navbar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar = ({ className }: INavBarProps) => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  const onShowModal = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className={classNames(classes.navbar, [className])}>
      <div className={classes.links} />
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
      <Button onClick={onShowModal} theme="clear" isColorInverted>
        {t('Login')}
      </Button>
    </div>
  );
};
