import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MenuModule } from './modules/menu/menu.module';
import { MongodbService } from './modules/database/mongodb.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, MongodbService],
  exports: [MongodbService]
})
export class AppModule {}
