import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/class-names';

import classes from './app-link.module.scss';

export const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export type TAppLinkTheme = ValueOf<typeof AppLinkTheme>;

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: TAppLinkTheme;
  children?: ReactNode;
}

export const AppLink = (props: IAppLinkProps) => {
  const { children, className, theme = AppLinkTheme.PRIMARY, ...restProps } = props;

  return (
    <Link className={classNames(classes.appLink, [className, classes[theme]])} {...restProps}>
      {children}
    </Link>
  );
};
