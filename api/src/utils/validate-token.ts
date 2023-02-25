import * as jwt from 'jsonwebtoken';

import { HttpException, HttpStatus } from '@nestjs/common';
import { ERRORS } from 'src/constants/errors';
import { BEARER } from 'src/constants/etc';

export const validateToken = async (auth: string, roles?: string[]) => {
  const [bearer, token] = auth.split(' ');
  if (bearer !== BEARER) {
    throw new HttpException(ERRORS.invalidToken, HttpStatus.FORBIDDEN);
  }
  const resp: any = jwt.decode(token);

  if (resp.role && !roles?.includes(resp.role)) {
    throw new HttpException(ERRORS.invalidRole, HttpStatus.FORBIDDEN);
  }

  if (!resp.expiresIn || Date.now() > resp.expiresIn) {
    throw new HttpException(ERRORS.tokenExpired, HttpStatus.UNAUTHORIZED);
  }

  return resp;
};
