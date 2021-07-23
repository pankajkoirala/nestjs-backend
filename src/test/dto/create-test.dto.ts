import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateTestDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsString()
  description?: string; //? make optional field in postman
}
