import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TestSchema } from './entities/test.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'test', schema: TestSchema }])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
