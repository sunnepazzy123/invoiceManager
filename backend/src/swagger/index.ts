import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerDoc = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Invoice Manager 2.0')
    .setDescription('Invoice Manager 2.0 API description')
    .setVersion('1.0')
    .addTag('Invoice Manager 2.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);
};
