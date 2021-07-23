export class Auth {}
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  email: string;

  @Prop()
  password: number;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
