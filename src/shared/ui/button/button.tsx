import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './button.module.scss';

export const ButtonTheme = {
  CLEAR: 'clear',
  OUTLINE: 'outline',
  BACKGROUND: 'background',
  BACKGROUND_INVERTED: 'backgroundInverted',
} as const;

export const ButtonSize = {
  M: 'size_m',
  L: 'size_l',
  XL: 'size_xl',
} as const;

export type TButtonTheme = ValueOf<typeof ButtonTheme>;
export type TButtonSize = ValueOf<typeof ButtonSize>;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: TButtonTheme;
  square?: boolean;
  size?: TButtonSize;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = ButtonSize.M,
  ...props
}) => (
  <button
    className={classNames(
      classes.button,
      [className, classes[theme], classes[size]],
      {
        [classes.square]: square,
      }
    )}
    type="button"
    {...props}
  >
    {children}
  </button>
);
