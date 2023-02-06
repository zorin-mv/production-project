import { useState } from "react";
import { classNames } from "shared/lib/class-names";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import classes from "./sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);
  return (
    <div
      className={classNames(classes.sidebar, [className], {
        [classes.collapsed]: collapsed,
      })}
    >
      <button onClick={onToggle}>Toogle</button>
      <div className={classes.swithers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
