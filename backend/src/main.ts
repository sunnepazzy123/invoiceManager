import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUpMiddlewares } from './middlewares/index.middleware';
import { swaggerDoc } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setUpMiddlewares(app);

  // swagger docs
  swaggerDoc(app);

  await app.listen(4006);
}
bootstrap();
