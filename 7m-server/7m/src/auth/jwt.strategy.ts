import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload-interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
      passReqToCallback: true
    });
  }
  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser({
      email: 'venky@gmail.com'
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
