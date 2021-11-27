import { Module, DynamicModule, Global } from '@nestjs/common';
import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { ConfigObject } from '@nestjs/config/dist/types';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CONFIG_KEYS, MICROSERVICES } from '@powerbuilding-trainer/server/core';

@Global()
@Module({})
export class ClientMicroservicesModule {
  public static async register(
    configFn: ConfigFactory<ConfigObject>
  ): Promise<DynamicModule> {
    const envVars: Record<string, unknown> = await configFn();

    const authHost: string = `${envVars[CONFIG_KEYS.AUTH_HOST]}`;
    const authPort: number = +`${envVars[CONFIG_KEYS.AUTH_PORT]}`;

    const adminHost: string = `${envVars[CONFIG_KEYS.ADMIN_HOST]}`;
    const adminPort: number = +`${envVars[CONFIG_KEYS.ADMIN_PORT]}`;

    return {
      module: ClientMicroservicesModule,
      imports: [
        ClientsModule.register([
          {
            name: MICROSERVICES.AUTH,
            transport: Transport.TCP,
            options: {
              host: authHost,
              port: authPort,
            },
          },
          {
            name: MICROSERVICES.ADMIN,
            transport: Transport.TCP,
            options: {
              host: adminHost,
              port: adminPort,
            },
          },
        ]),
      ],
    };
  }
}
