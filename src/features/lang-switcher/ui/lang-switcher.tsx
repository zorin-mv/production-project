import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';

interface ILangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguages = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(className)}
      theme="clear"
      onClick={toggleLanguages}
    >
      {short ? t('langShort') : t('lang')}
    </Button>
  );
};
