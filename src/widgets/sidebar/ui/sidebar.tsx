import { LangSwitcher } from 'features/lang-switcher';
import { ThemeSwitcher } from 'features/theme-switcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about-us.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';
import { RoutePath } from 'shared/constant';
import { classNames } from 'shared/lib/class-names';
import { AppLink } from 'shared/ui/app-link';
import { Button, ButtonSize } from 'shared/ui/button';

import classes from './sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed((prev) => !prev);
  return (
    <div
      className={classNames(classes.sidebar, [className], {
        [classes.collapsed]: collapsed,
      })}
      data-testid="sidebar"
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classes.collapseBtn}
        theme="background"
        isColorInverted
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.items}>
        <AppLink theme="secondary" to={RoutePath.main} className={classes.item}>
          <MainIcon className={classes.icon} />
          <span className={classes.link}>{t('mainPageNav')}</span>
        </AppLink>
        <AppLink
          theme="secondary"
          to={RoutePath.about}
          className={classes.item}
        >
          <AboutIcon className={classes.icon} />
          <span className={classes.link}>{t('aboutPageNav')}</span>
        </AppLink>
      </div>
      <div className={classes.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} short={collapsed} />
      </div>
    </div>
  );
};
