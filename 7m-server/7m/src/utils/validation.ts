import { validate } from 'tcomb-validation';

export const validateRequest = (reqBody: any, type: any) => {
  const result = validate(reqBody, type);
  return {
    isValid: result.isValid(),
    errors: result.errors.map(x => x.message),
  };
};
