import { Module } from '@nestjs/common';
import { MatInfoController } from './matinfo.controller';
import { MatInfoService } from './matinfo.service';
import { matInfoProviders } from './matinfo.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MatInfoController],
  providers: [MatInfoService, ...matInfoProviders],
})
export class MatInfoModule {}
