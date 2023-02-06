import { LangSwitcher } from 'features/lang-switcher';
import { ThemeSwitcher } from 'features/theme-switcher';
import { useState } from 'react';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';

import classes from './sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);
  return (
    <div
      className={classNames(classes.sidebar, [className], {
        [classes.collapsed]: collapsed,
      })}
    >
      <Button onClick={onToggle}>Toogle</Button>
      <div className={classes.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};
