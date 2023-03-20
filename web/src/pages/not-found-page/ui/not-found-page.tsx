import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';

import classes from './not-found-page.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation();

  return <div className={classNames(classes.notFoundPage, [className])}>{t('not found')}</div>;
};
