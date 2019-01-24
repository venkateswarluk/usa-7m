import { MetadataArgsStorage } from 'typeorm/metadata-args/MetadataArgsStorage';
import { ColumnTypeUndefinedError } from 'typeorm/error/ColumnTypeUndefinedError';
import { ColumnMetadataArgs } from 'typeorm/metadata-args/ColumnMetadataArgs';
import { ColumnEmbeddedOptions } from 'typeorm/decorator/options/ColumnEmbeddedOptions';
import { EmbeddedMetadataArgs } from 'typeorm/metadata-args/EmbeddedMetadataArgs';
import { GeneratedMetadataArgs } from 'typeorm/metadata-args/GeneratedMetadataArgs';
import { ColumnOptions, getMetadataArgsStorage } from 'typeorm';
import { ColumnType } from 'typeorm/driver/types/ColumnTypes';

export const LowerCaseColumn = (
  typeOrOptions?:
    | ((type?: any) => () => void)
    | ColumnType
    | (ColumnOptions & ColumnEmbeddedOptions),
  options?: ColumnOptions & ColumnEmbeddedOptions,
) => {
  return (object: {}, propertyName: string) => {
    let type: ColumnType | undefined;
    if (
      typeof typeOrOptions === 'string' ||
      typeOrOptions instanceof Function
    ) {
      type = typeOrOptions as ColumnType;
    } else if (typeOrOptions) {
      options = typeOrOptions as ColumnOptions;
      type = typeOrOptions.type;
    }
    if (!options) {
      options = {} as ColumnOptions;
    }

    const reflectMetadataType =
      Reflect && (Reflect as any).getMetadata
        ? (Reflect as any).getMetadata('design:type', object, propertyName)
        : undefined;
    if (!type && reflectMetadataType) {
      type = reflectMetadataType;
    }

    if (!options.type && type) {
      options.type = type;
    }

    if (options.type === 'hstore' && !options.hstoreType) {
      options.hstoreType = reflectMetadataType === Object ? 'object' : 'string';
    }

    if (typeOrOptions instanceof Function) {
      getMetadataArgsStorage().embeddeds.push({
        target: object.constructor,
        propertyName: propertyName.toLocaleLowerCase(),
        isArray: reflectMetadataType === Array || options.array === true,
        prefix: options.prefix !== undefined ? options.prefix : undefined,
        type: typeOrOptions as (type?: any) => () => void,
      } as EmbeddedMetadataArgs);
    } else {
      if (!options.type) {
        throw new ColumnTypeUndefinedError(object, propertyName);
      }
      if (options.unique === true) {
        getMetadataArgsStorage().uniques.push({
          target: object.constructor,
          columns: [propertyName.toLocaleLowerCase()],
        });
      }

      getMetadataArgsStorage().columns.push({
        target: object.constructor,
        propertyName: propertyName.toLocaleLowerCase(),
        mode: 'regular',
        options,
      } as ColumnMetadataArgs);

      if (options.generated) {
        getMetadataArgsStorage().generations.push({
          target: object.constructor,
          propertyName: propertyName.toLocaleLowerCase(),
          strategy: options.type === 'uuid' ? 'uuid' : 'increment',
        } as GeneratedMetadataArgs);
      }
    }
  };
};
