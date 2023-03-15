export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

export type TRoles = ValueOf<typeof USER_ROLES>;
