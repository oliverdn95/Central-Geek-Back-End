import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      whitelist:true,
      forbidNonWhitelisted:true,
    })
  )
  const config = new DocumentBuilder()
    .setTitle("Central Geek é uma API de Desapego, Troca e Venda de Mangás")
    .setDescription("A API é uma central Geek aonde os usuários podem cadastrar, vender, trocar e desapegar de seus mangás. A API é desenvolvida em NestJS e TypeScript.")
    .setVersion("1.0")
    .addTag("usuario")
    .build();

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("api", app, document);

  useContainer(app.select(AppModule), {fallbackOnErrors:true});
  
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
