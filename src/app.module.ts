import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './modules/menu/menu.module';
import { MongodbService } from './modules/database/mongodb.service';

@Module({
  imports: [MenuModule],
  controllers: [AppController],
  providers: [AppService, MongodbService],
  exports: [MongodbService]
})
export class AppModule {}
