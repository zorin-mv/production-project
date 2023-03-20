import { memo } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './text.module.scss';

export const TEXT_THEME = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

export type TTextTheme = ValueOf<typeof TEXT_THEME>;

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TTextTheme;
}

export const Text = memo(({ className, title, text, theme = 'primary' }: ITextProps) => (
  <div data-testid="text-wrapper" className={classNames(classes.textWrapper, [className, classes[theme]])}>
    {title ? <p className={classes.title}>{title}</p> : null}
    {text ? <p className={classes.text}>{text}</p> : null}
  </div>
));
