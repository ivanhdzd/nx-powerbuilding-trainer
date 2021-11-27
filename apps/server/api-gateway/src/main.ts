import { NestFactory } from '@nestjs/core';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { ConfigFactory, ConfigObject, ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule, OpenAPIObject } from '@nestjs/swagger';
import { configFactory, CONFIG_KEYS } from '@powerbuilding-trainer/server/core';

import { AppModule } from './app/app.module';

async function bootstrap(_: ConfigFactory<ConfigObject>): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config: ConfigService = app.get(ConfigService);
  const logger: Logger = app.get(Logger);

  const globalPrefix: string = 'api';
  app.setGlobalPrefix(globalPrefix);

  const swaggerTitle: string = config.get<string>(CONFIG_KEYS.SWAGGER_TITLE);
  const swaggerDescription: string = config.get<string>(
    CONFIG_KEYS.SWAGGER_DESCRIPTION
  );
  const swaggerVersion: string = config.get<string>(
    CONFIG_KEYS.SWAGGER_VERSION
  );
  const options: Pick<
    OpenAPIObject,
    'openapi' | 'info' | 'servers' | 'security' | 'tags' | 'externalDocs'
  > = new DocumentBuilder()
    .setTitle(swaggerTitle)
    .setDescription(swaggerDescription)
    .setVersion(swaggerVersion)
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  const host: string = config.get<string>(CONFIG_KEYS.API_GATEWAY_HOST);
  const port: number = config.get<number>(CONFIG_KEYS.API_GATEWAY_PORT);
  const uri: string = `http://${host}:${port}/${globalPrefix}`;
  await app
    .listen(port)
    .then((): void => logger.log(`Microservice running at ${uri}`))
    .catch((error: Error): void => logger.error(error));
}

bootstrap(configFactory());
