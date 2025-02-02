import { INestApplication, ValidationPipe } from '@nestjs/common';
import { domains } from 'src/constants';
import * as cookieParser from "cookie-parser";

export const setUpMiddlewares = (app: INestApplication) => {
  app.enableCors({
    origin: [...domains],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: 'Content-Type',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Enable cookie parser middleware
  app.use(cookieParser());
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

};
