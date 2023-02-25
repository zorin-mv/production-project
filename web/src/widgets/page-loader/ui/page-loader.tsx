import { classNames } from 'shared/lib/class-names';
import { Spinner } from 'shared/ui/spinner';

import classes from './page-loader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => (
  <div className={classNames(classes.pageLoader, [className])}>
    <Spinner />
  </div>
);
