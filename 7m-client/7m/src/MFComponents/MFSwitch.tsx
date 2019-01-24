import * as React from 'react'
import { FieldProps } from 'formik'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

interface Props {
  readonly label?: string
}

export type OwnProps<T> = FieldProps<T> & Props

export const MySwitch: React.SFC<OwnProps<any>> = ({
  field,
  form,
  ...rest
}: OwnProps<any>) => {
  const { errors, touched } = form
  return (
    <FormControl error={touched[field.name] && !!errors[field.name]}>
      <FormControlLabel
        label={rest.label}
        {...rest}
        control={
          <Switch
            {...field}
            value={field.name}
            checked={field.value}
            {...rest}
          />
        }
      />
      {!!errors[field.name] &&
        touched[field.name] && (
          <FormHelperText>{errors[field.name]}</FormHelperText>
        )}
    </FormControl>
  )
}
