import * as React from 'react'
import { FieldProps } from 'formik'

export type ErrorMessageProps = {
  readonly name: string
}

export type OwnProps<T> = FieldProps<T> & ErrorMessageProps

export const MyErrorMessage: React.StatelessComponent<OwnProps<any>> = ({
  form,
  field,
}: OwnProps<any>) => {
  const { errors, touched } = form
  return (
    <div>
      <div style={{ color: 'red' }}>
        {!!errors[field.name] && touched[field.name] && errors[field.name]}
      </div>
    </div>
  )
}
