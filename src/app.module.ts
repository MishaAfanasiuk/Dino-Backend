import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './modules/menu/menu.module';
import { MongodbService } from './modules/database/mongodb.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './modules/news/news.module';
import { EventsModule } from './modules/events/events.module';
import { DiscountsModule } from './modules/discounts/discounts.module';
@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://dno:${process.env.DB_PASSWORD}@dino-6io1u.mongodb.net/test?retryWrites=true&w=majority`, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    EventsModule,
    AuthModule,
    MenuModule,
    NewsModule,
    DiscountsModule
  ],
  controllers: [AppController],
  providers: [AppService, MongodbService],
  exports: [MongodbService]
})
export class AppModule {}
