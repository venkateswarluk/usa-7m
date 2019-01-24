import * as t from 'tcomb';

export const UserCreateRequest: t.Struct<{}> = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: t.String,
  password: t.String,
});
