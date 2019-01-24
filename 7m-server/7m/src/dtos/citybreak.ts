import * as t from 'tcomb';

export const CityBreakCreateRequest: t.Struct<{}> = t.struct({
  cityId: t.Integer,
  days: t.Integer,
  description: t.String,
  price: t.Number,
  imageUrl: t.String,
  phone: t.String,
  starRating: t.Number,
});

export const CityBreakDetailsRequest: t.Struct<{}> = t.struct({
  cityId: t.Integer,
  days: t.Integer,
  dayNo: t.Integer,
  dayInfo: t.String,
});

export const CityBreakInclusionRequest: t.Struct<{}> = t.struct({
  cityId: t.Integer,
  days: t.Integer,
  inclusions: t.String,
});

export const CityBreakExclusionRequest: t.Struct<{}> = t.struct({
  cityId: t.Integer,
  exclusions: t.String,
});

export interface CityBreakReq {
  readonly cityId: number;
  readonly days: number;
  readonly description: string;
  readonly price: number;
  readonly imageUrl: string;
  readonly phone: string;
  readonly starRating: number;
}

export interface CityBreakDetailsReq {
  readonly cityId: number;
  readonly days: number;
  readonly dayNo: number;
  readonly dayInfo: string;
}

export interface CityBreakInclusionReq {
  readonly cityId: number;
  readonly days: number;
  readonly inclusions: string;
}

export interface CityBreakExclusionReq {
  readonly cityId: number;
  readonly exclusions: string;
}

export interface CityBreakLocationReq {
  readonly city: string;
  readonly country: string;
  readonly cityId: number;
}
