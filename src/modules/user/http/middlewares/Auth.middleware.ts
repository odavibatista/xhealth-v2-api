import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JWTProvider } from '../../infra/providers/jwt.provider';
import { NotAuthenticatedException } from '../../../../shared/domain/errors/NotAuthenticated.exception';
import { BadTokenEception } from '../../../../shared/domain/errors/BadToken.exception';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private jwtProvider: JWTProvider) {}
  use(req: Request, _res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const userIp =
      req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

    if (!authHeader) {
      throw new NotAuthenticatedException();
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = this.jwtProvider.validate({
        token,
        secret: String(process.env.APP_SECRET),
      });

      req.userIp = userIp;

      if (decoded.admin) {
        req.administrator = {
          id: decoded.admin.id,
          administrator_name: decoded.admin.administrator_name,
        };
      }

      if (decoded.user) {
        req.user = {
          id: decoded.user.id_user,
          plan: decoded.user.plan_id,
        };
      }

      return next();
    } catch (error) {
      throw new BadTokenEception();
    }
  }
}
