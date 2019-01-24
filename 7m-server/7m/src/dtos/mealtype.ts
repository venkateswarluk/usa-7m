import * as t from 'tcomb';

export const MealTypeCreateRequest: t.Struct<{}> = t.struct({
  name: t.String,
  mealType: t.String,
  imageUrl: t.String,
  description: t.String,
  price: t.Number,
  items: t.String,
});

export interface MealtypeReq {
  readonly name: string;
  readonly types: string;
  readonly imageUrl: string;
  readonly description: string;
  readonly price: number;
  readonly items: string;
}

export interface MealtypeReq1 {
  readonly name: string;
  readonly types: string;
  readonly imageUrl: string;
  readonly description: string;
  readonly price: number;
  readonly items: string[];
}
