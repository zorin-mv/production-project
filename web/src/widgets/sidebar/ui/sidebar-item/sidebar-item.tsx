import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';
import { AppLink } from 'shared/ui/app-link';

import classes from './sidebar-item.module.scss';

import { ISidebarItem } from './sidebar-items.typings';

interface ISidebarItemProps {
  item: ISidebarItem;
  collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation();
  const { Icon, path, text } = item;
  return (
    <AppLink
      data-testid="sidebar-item"
      theme="secondary"
      to={path}
      className={classNames(classes.item, [], {
        [classes.collapsed]: collapsed,
      })}
    >
      <Icon className={classes.icon} />
      <span className={classes.link}>{t(`${text}`)}</span>
    </AppLink>
  );
});
