// import { JwtPayload } from './interface/jwt-payload.interface';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Model } from 'mongoose';
import { User } from '../auth/entities/auth.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel('User') private AuthModel: Model<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '$$$$test$$$$',
    });
  }

  async validate(payload: {
    email: 'pankaj.koirala.77@gmail.com';
  }): Promise<User> {
    const { email } = payload;
    const user = await this.AuthModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
