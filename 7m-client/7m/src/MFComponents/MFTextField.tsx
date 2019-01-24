import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import { FieldProps } from 'formik'

interface InputProps {
  readonly type: 'text' | 'number' | 'email' | 'password'
  readonly name: string
}

export type OwnProps<T> = FieldProps<T> & InputProps

export const MyTextField: React.SFC<OwnProps<any>> = ({
  type,
  field,
  form,
}: OwnProps<any>) => {
  const { errors, touched } = form
  return (
    <TextField
      label={field.name.toUpperCase()}
      placeholder={field.name.toUpperCase()}
      type={type}
      {...field}
      error={touched[field.name] && !!errors[field.name]}
      helperText={
        !!errors[field.name] && touched[field.name] && errors[field.name]
      }
    />
  )
}
