import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './button.module.scss';

export const ThemeButton = {
  CLEAR: 'clear',
};

export type TThemeButton = ValueOf<typeof ThemeButton>;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
  theme?: TThemeButton;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => (
  <button
    className={classNames(classes.button, [className], {
      [classes[theme]]: !!theme,
    })}
    type="button"
    {...props}
  >
    {children}
  </button>
);
