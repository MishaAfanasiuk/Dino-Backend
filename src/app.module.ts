import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './modules/menu/menu.module';
import { MongodbService } from './modules/database/mongodb.service';
import { AuthModule } from './modules/auth/auth.module';
import { LocationModule } from './modules/location/location.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './modules/news/news.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://dno:${process.env.DB_PASSWORD}@dino-6io1u.mongodb.net/test?retryWrites=true&w=majority`, {
      dbName: process.env.DB_NAME
    }),
    EventsModule,
    AuthModule,
    MenuModule,
    LocationModule,
    NewsModule
  ],
  controllers: [AppController],
  providers: [AppService, MongodbService],
  exports: [MongodbService]
})
export class AppModule {}
