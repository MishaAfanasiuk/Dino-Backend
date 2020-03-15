import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(
    join(__dirname, '..', 'assets'),
    {
    prefix: '/assets/',
  });

  const options = new DocumentBuilder()
    .setTitle('Dino api')
    .setDescription('The dino restaurant API description')
    .setVersion('1.0')
    .addTag('dino')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, '0.0.0.0');
}
bootstrap();
