import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GLOBAL_PREFIX } from './shared/global-prefix';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(GLOBAL_PREFIX);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
