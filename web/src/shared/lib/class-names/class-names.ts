type TMods = Record<string, boolean | string | undefined>;

export const classNames = (cls: string = '', additional: Array<string | undefined> = [], mods: TMods = {}): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([className]) => className),
  ].join(' ');
