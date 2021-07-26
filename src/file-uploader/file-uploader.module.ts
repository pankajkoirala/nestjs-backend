import { Module } from '@nestjs/common';
import { FileUploaderService } from './file-uploader.service';
import { FileUploaderController } from './file-uploader.controller';

@Module({
  controllers: [FileUploaderController],
  providers: [FileUploaderService]
})
export class FileUploaderModule {}
