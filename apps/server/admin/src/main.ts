import { NestFactory } from '@nestjs/core';
import { INestMicroservice, Logger, ValidationPipe } from '@nestjs/common';
import { ConfigFactory, ConfigObject } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { configFactory, CONFIG_KEYS } from '@powerbuilding-trainer/server/core';

import { AppModule } from './app/app.module';

async function bootstrap(configFn: ConfigFactory<ConfigObject>): Promise<void> {
  const envVars: Record<string, boolean | number | string> = await configFn();
  const host: string = `${envVars[CONFIG_KEYS.ADMIN_HOST]}`;
  const port: number = +`${envVars[CONFIG_KEYS.ADMIN_PORT]}`;
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host,
        port,
      },
    }
  );
  const logger: Logger = app.get(Logger);
  app.useGlobalPipes(new ValidationPipe());
  const uri: string = `http://${host}:${port}`;
  await app
    .listen()
    .then((): void => logger.log(`Microservice running at ${uri}`))
    .catch((error: Error): void => logger.error(error));
}

bootstrap(configFactory());
