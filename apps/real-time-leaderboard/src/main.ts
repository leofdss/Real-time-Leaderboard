import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { GLOBAL_PREFIX } from './shared/global-prefix';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      strategy: 'excludeAll',
    }),
  );

  app.enableCors();
  app.setGlobalPrefix(GLOBAL_PREFIX);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
