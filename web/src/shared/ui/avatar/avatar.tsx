import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './avatar.module.scss';

interface IAvatarProps {
  src: string;
  className?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ src, className, size, alt }: IAvatarProps) => {
  const styles = useMemo<CSSProperties>(() => ({ width: size || 100, height: size || 100 }), [size]);

  return (
    <img alt={alt} src={src} data-testid="avatar" className={classNames(classes.avatar, [className])} style={styles} />
  );
};
