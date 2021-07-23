import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  // @IsNumber()
  @IsString()
  password: number;
  @IsNotEmpty()
  @IsString()
  name?: string; //? make optional field in postman
}
export class LoginAuthDto {
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  // @IsNumber()
  @IsString()
  password: number;
}
