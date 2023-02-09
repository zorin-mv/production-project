import { classNames } from 'shared/lib/class-names';

import classes from './spinner.module.scss';

interface ISpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: ISpinnerProps) => (
  <div className={classNames(classes.spinner, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
