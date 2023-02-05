import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/class-names";
import classes from "./button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => {
  return (
    <button
      className={classNames(classes.button, [className], {
        [classes[theme]]: !!theme,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
