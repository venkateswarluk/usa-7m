import { JwtService } from '@nestjs/jwt';
import { Injectable, Body } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload-interface';
import { Credentials } from '../dtos/credentials';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken(credentials: Credentials) {
    const user = await this.userService.login(credentials);
    if (user) {
      const u: JwtPayload = { email: user.email };
      const accessToken = this.jwtService.sign(u);
      return {
        token: accessToken,
        id: user.id,
        email: user.email,
        role: user.role,
      };
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findOneByEmail(payload.email);
  }
}
