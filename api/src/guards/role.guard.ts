import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ERRORS } from 'src/constants/errors';
import { TRoles } from 'src/constants/user-roles';
import { validateToken } from 'src/utils/validate-token';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private roles: TRoles[]) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      throw new HttpException(ERRORS.invalidRole, HttpStatus.FORBIDDEN);
    }

    await validateToken(request.headers.authorization, this.roles);
    return true;
  }
}
