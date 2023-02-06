import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/class-names';
import { Theme } from 'shared/lib/theme/theme.context';
import { useTheme } from 'shared/lib/theme/useTheme';
import { Button, ThemeButton } from 'shared/ui/button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      onClick={toogleTheme}
      className={classNames(className)}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
