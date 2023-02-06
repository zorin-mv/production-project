import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/class-names";
import { Button, ThemeButton } from "shared/ui/button";

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguages = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(className)}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguages}
    >
      {t("lang")}
    </Button>
  );
};
