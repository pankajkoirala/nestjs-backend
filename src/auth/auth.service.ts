import { InjectModel } from '@nestjs/mongoose';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto, LoginAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/auth.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private JwtService: JwtService,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
    const p = await new this.userModel(createAuthDto);

    return p.save();
  }
  async login(loginAuthDto: LoginAuthDto) {
    console.log(
      '🚀 ~ file: auth.service.ts ~ line 12 ~ AuthService ~ create ~ createAuthDto',
      loginAuthDto,
    );
    const { email, password } = loginAuthDto;
    const user = await this.userModel.findOne({ email: email });
    if (user) {
      return await this.JwtService.sign(JSON.stringify(user));
    } else {
      throw new UnauthorizedException('invalid credentials');
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
