import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';

import classes from './navbar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar = ({ className }: INavBarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.navbar, [className])}>
      <div className={classes.links} />
    </div>
  );
};
