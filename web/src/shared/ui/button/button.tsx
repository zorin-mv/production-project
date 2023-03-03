import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './button.module.scss';

export const ButtonTheme = {
  CLEAR: 'clear',
  OUTLINE: 'outline',
  BACKGROUND: 'background',
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
  isColorInverted?: boolean;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = memo((props: IButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    isColorInverted,
    disabled,
    ...restProps
  } = props;

  return (
    <button
      className={classNames(
        classes.button,
        [className, classes[theme], classes[size]],
        {
          [classes.square]: square,
          [classes.invertedColor]: isColorInverted,
          [classes.disabled]: disabled,
        }
      )}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
});
