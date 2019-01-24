import * as React from 'react'
import { FieldProps } from 'formik'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'

interface Props {
  readonly label?: string
  readonly name: string
  readonly checked: boolean
}

export type OwnProps<T> = FieldProps<T> & Props

export const MyCheckbox: React.SFC<OwnProps<any>> = ({
  field,
  form,
  ...rest
}: OwnProps<any>) => {
  const { errors, touched } = form
  console.log(form, field)
  console.log(rest)
  return (
    <FormControl error={touched[field.name] && !!errors[field.name]}>
      {<Checkbox {...field} checked={rest.checked} {...rest} />}

      {!!errors[field.name] &&
        touched[field.name] && (
          <FormHelperText>{errors[field.name]}</FormHelperText>
        )}
    </FormControl>
  )
}
