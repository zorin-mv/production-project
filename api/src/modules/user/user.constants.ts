export const USER_ROUTES = {
  main: 'user',
  getUserById: 'get-user-by-id',
  getUserByToken: 'get-user-by-token',
};

export const USER_ERRORS = {
  alreadyExists:
    'One of our members already have this email address. Please try another email address.',
  loginError: 'Wrong email or/and password',
  wrongPassword: "Looks like that's the wrong password. Try again or reset.",
  notRecoverPassword: 'This user did not recover password',
};
