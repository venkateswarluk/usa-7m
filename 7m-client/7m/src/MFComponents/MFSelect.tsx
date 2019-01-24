import * as React from 'react'
import { FieldProps } from 'formik'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { OptionValues } from '../MaterialComponents'
import InputLabel from '@material-ui/core/InputLabel'

interface Props {
  readonly options: ReadonlyArray<OptionValues>
}

export type OwnProps<T> = FieldProps<T> & Props

export const MySelect: React.SFC<OwnProps<any>> = ({
  field,
  form,
  ...rest
}: OwnProps<any>) => {
  const { errors, touched } = form

  return (
    <div>
      <FormControl error={touched[field.name] && !!errors[field.name]}>
        <InputLabel>{field.name}</InputLabel>
        <Select {...rest} {...field}>
          {rest.options.map((opt: any) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
        {!!errors[field.name] &&
          touched[field.name] && (
            <FormHelperText>{errors[field.name]}</FormHelperText>
          )}
      </FormControl>
    </div>
  )
}
