import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { FileUploaderModule } from './file-uploader/file-uploader.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-backend', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    AuthModule,
    FileUploaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
