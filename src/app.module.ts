import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatInfoModule } from './matinfo/matinfo.module';
@Module({
  imports: [MatInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
