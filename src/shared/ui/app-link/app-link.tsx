import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/class-names";
import classes from "./app-link.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = ({
  children,
  className,
  theme = AppLinkTheme.PRIMARY,
  ...restProps
}) => {
  return (
    <Link
      className={classNames(classes.appLink, [className, classes[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
