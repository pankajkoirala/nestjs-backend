import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
const express = require('express');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use('/upload', express.static(join(__dirname, '..', 'upload'))); // <-
  await app.listen(3000);
}
bootstrap();
