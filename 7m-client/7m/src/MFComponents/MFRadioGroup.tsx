import * as React from 'react'
import { FieldProps } from 'formik'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import { OptionValues } from '../MaterialComponents'

interface Props {
  readonly options: ReadonlyArray<OptionValues>
  readonly label?: string
}

export type OwnProps<T> = FieldProps<T> & Props

export const MyRadioGroup: React.SFC<OwnProps<any>> = ({
  field,
  form,
  ...rest
}: OwnProps<any>) => {
  const { errors, touched } = form
  return (
    <FormControl error={touched[field.name] && !!errors[field.name]}>
      {rest.label && <FormLabel>{rest.label}</FormLabel>}

      <RadioGroup {...field}>
        {rest.options.map((opt: any) => (
          <FormControlLabel key={opt.value} {...opt} control={<Radio />} />
        ))}
      </RadioGroup>
      {!!errors[field.name] &&
        touched[field.name] && (
          <FormHelperText>{errors[field.name]}</FormHelperText>
        )}
    </FormControl>
  )
}
