import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT || 3005;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    {
      logger: ['error', 'warn', 'debug', 'verbose', 'log']
    }
  );
  app.enableCors();
  app.useStaticAssets(
    join(__dirname, '..', 'assets'),
    {
    prefix: '/assets/',
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs')

  const options = new DocumentBuilder()
    .setTitle('Dino api')
    .setDescription('The dino restaurant API description')
    .setVersion('1.0')
    .addTag('dino')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      }),
  );

  await app.listen(port, '0.0.0.0');
}
bootstrap();
