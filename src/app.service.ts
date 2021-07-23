import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  testHello(): string {
    return 'Hello World Test Test!';
  }
}
