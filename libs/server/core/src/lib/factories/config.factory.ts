import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { ConfigObject } from '@nestjs/config/dist/types';
import { string2Boolean } from '@powerbuilding-trainer/shared/utils';
import { config, DotenvConfigOutput } from 'dotenv';
import { existsSync } from 'fs';
import { join } from 'path';

/**
 * Factory function that loads specific environment data from an argument.
 *
 * Reference: https://docs.nestjs.com/techniques/configuration#custom-configuration-files
 * @returns {ConfigFactory<ConfigObject>} Configuration factory.
 */
export function configFactory(): ConfigFactory<ConfigObject> {
  const filePath: string = join(__dirname, '..', '..', '..', '..', '.env');
  if (!existsSync(filePath)) {
    throw new Error(`Environment file '${filePath}' not found.`);
  }

  const { parsed }: DotenvConfigOutput = config({
    encoding: 'utf-8',
    path: filePath,
  });

  return (): ConfigObject =>
    Object.entries(parsed).reduce(
      (acc: ConfigObject, [key, value]: [string, string]): ConfigObject => {
        const boolValue: boolean | undefined = string2Boolean(value);
        if (typeof boolValue === 'boolean') {
          acc[key] = boolValue;
          return acc;
        }

        const numValue: number = +value;
        if (!isNaN(numValue)) {
          acc[key] = numValue;
          return acc;
        }

        acc[key] = value;
        return acc;
      },
      {}
    );
}
