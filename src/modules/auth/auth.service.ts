import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignInDto } from '../user/dto/signin-dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInObj: SignInDto) {
    const user = await this.userService.findByUsername(signInObj.username);
    if (user?.password !== signInObj.password) {
      throw new UnauthorizedException();
    }
    const payload = {
      username: user.username,
      sub: user?._id,
      role: user?.roleId,
      firstName: user?.firstName,
      lastName: user?.lastName,
    };
    console.log(payload);
    
    return {
      access_token: await this.jwtService.signAsync(payload),
      firstName: user?.firstName,
      lastName: user?.lastName,
    };
  }
}
