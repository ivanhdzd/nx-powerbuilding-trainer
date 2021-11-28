import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { MICROSERVICES, CONFIG_KEYS } from '@powerbuilding-trainer/server/core';

export const ClientAdminProvider: FactoryProvider<ClientProxy> = {
  inject: [ConfigService],
  provide: MICROSERVICES.ADMIN,
  useFactory: (configService: ConfigService): ClientProxy => {
    const host: string = configService.get<string>(CONFIG_KEYS.ADMIN_HOST);
    const port: number = configService.get<number>(CONFIG_KEYS.ADMIN_PORT);
    return ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host, port },
    });
  },
};
