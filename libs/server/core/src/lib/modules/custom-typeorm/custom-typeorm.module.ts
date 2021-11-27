import { Module, DynamicModule, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { join, resolve } from 'path';

import { CONFIG_KEYS } from '../../enums/config-keys.enum';
import { configFactory } from '../../factories';

const migrationsDir: string = join('typeorm', 'migrations');
const pathRootProject: string = resolve(__dirname, '..', '..', '..', '..');
const pathMigrations: string = join(pathRootProject, migrationsDir);
const patternMigrations: string = join(pathMigrations, '**', '*{.ts,.js}');

@Global()
@Module({})
export class CustomTypeOrmModule {
  public static forRoot(entities?: any[]): DynamicModule {
    return {
      module: CustomTypeOrmModule,
      imports: [
        ConfigModule.forRoot({ load: [configFactory] }),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService): ConnectionOptions => ({
            type: 'mysql',
            host: configService.get<string>(CONFIG_KEYS.DB_HOST),
            port: configService.get<number>(CONFIG_KEYS.DB_PORT),
            username: configService.get<string>(CONFIG_KEYS.DB_USERNAME),
            password: configService.get<string>(CONFIG_KEYS.DB_PASSWORD),
            database: configService.get<string>(CONFIG_KEYS.DB_DATABASE),
            entities,
            logging: configService.get<boolean>(CONFIG_KEYS.DB_LOGGING),
            synchronize: configService.get<boolean>(CONFIG_KEYS.DB_SYNCHRONIZE),
            migrationsRun: configService.get<boolean>(
              CONFIG_KEYS.DB_MIGRATIONS_RUN
            ),
            migrations: [patternMigrations],
            cli: {
              migrationsDir,
            },
          }),
        }),
      ],
      exports: [TypeOrmModule],
    };
  }
}
