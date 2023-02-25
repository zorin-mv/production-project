import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import helmet from 'helmet';

import { swagger } from './constants/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(swagger.title)
    .setDescription(swagger.description)
    .setVersion(swagger.version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.use(json({ limit: '10240mb' }));
  app.use(urlencoded({ limit: '10240mb', extended: true }));

  app.use(helmet({ contentSecurityPolicy: false }));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: process.env.NODE_ENV === 'PRODUCTION',
    })
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port || 8080);
}
bootstrap();
