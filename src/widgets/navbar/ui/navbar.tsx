import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';

import classes from './navbar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar = ({ className }: INavBarProps) => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setisAuthModalOpen] = useState(false);

  const toggleModal = () => {
    setisAuthModalOpen((prev) => !prev);
  };

  return (
    <div className={classNames(classes.navbar, [className])}>
      <div className={classes.links} />
      <Modal isOpen={isAuthModalOpen} onClose={toggleModal} />
      <Button onClick={toggleModal} theme="clear" isColorInverted>
        {t('Login')}
      </Button>
    </div>
  );
};
