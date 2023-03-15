export const CURRENCY = {
  rub: 'RUB',
  usd: 'USD',
  uah: 'UAH',
  eur: 'EUR',
} as const;

export type TCurrency = ValueOf<typeof CURRENCY>;
