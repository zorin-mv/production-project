type TMods = Record<string, boolean | string>;

export const classNames = (
  className: string,
  additional: string[] = [],
  mods: TMods = {}
): string =>
  [
    className,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([className]) => className),
  ].join(' ');
