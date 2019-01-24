import * as React from 'react'
import { FieldProps } from 'formik'
import TextField from '@material-ui/core/TextField'

interface Props {
  readonly name: string
  readonly type: 'date' | 'datetime-local' | 'time'
}

export type OwnProps<T> = FieldProps<T> & Props

export const MyDatePicker: React.SFC<OwnProps<any>> = ({
  type,
  field,
  form,
}: OwnProps<any>) => {
  const { errors, touched } = form
  return (
    <label htmlFor={field.name}>
      <TextField
        type={type}
        {...field}
        error={touched[field.name] && !!errors[field.name]}
        helperText={
          !!errors[field.name] && touched[field.name] && errors[field.name]
        }
      />
    </label>
  )
}
