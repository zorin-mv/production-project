type TMods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  additional: string[] = [],
  mods: TMods = {}
): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([className]) => className),
  ].join(' ');
