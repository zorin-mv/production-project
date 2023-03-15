import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';

import classes from './page-error.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(classes.pageError, [className])}>
      <p>{t('error')}</p>
      <Button onClick={reloadPage}>{t('reloadPage')}</Button>
    </div>
  );
};
