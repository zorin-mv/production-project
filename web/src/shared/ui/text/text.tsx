import { memo } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './text.module.scss';

export const TEXT_THEME = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

export const ALIGN_TEXT = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
};

export type TTextTheme = ValueOf<typeof TEXT_THEME>;
export type TTextAlign = ValueOf<typeof ALIGN_TEXT>;

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TTextTheme;
  align?: TTextAlign;
}

export const TextComponent = memo(({ className, title, text, theme = 'primary', align = 'left' }: ITextProps) => (
  <div
    data-testid="text-wrapper"
    className={classNames(classes.textWrapper, [className, classes[theme], classes[align]])}
  >
    {title ? <p className={classes.title}>{title}</p> : null}
    {text ? <p className={classes.text}>{text}</p> : null}
  </div>
));
