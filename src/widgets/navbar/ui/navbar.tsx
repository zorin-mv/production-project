import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/class-names";
import { AppLink } from "shared/ui/app-link";
import { AppLinkTheme } from "shared/ui/app-link/app-link";
import classes from "./navbar.module.scss";

interface INavBarProps {
  className?: string;
}

export const NavBar = ({ className }: INavBarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.navbar, [className])}>
      <div className={classes.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          {t("mainPageNav")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          {t("aboutPageNav")}
        </AppLink>
      </div>
    </div>
  );
};
