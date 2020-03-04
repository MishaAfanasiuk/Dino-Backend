import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(
    join(__dirname, '..', 'assets'),
    {
    prefix: '/assets/',
  });

  await app.listen(port, '0.0.0.0');
}
bootstrap();
