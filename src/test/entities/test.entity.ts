import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Test extends Document {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
