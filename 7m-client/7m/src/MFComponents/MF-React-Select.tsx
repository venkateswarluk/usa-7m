import * as React from 'react'
import Select from 'react-select'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import { FieldProps } from 'formik'

import { OptionValues } from '../MaterialComponents'

interface Props {
  readonly options: OptionValues[] | undefined
  readonly placeholder: string
  readonly isMulti: boolean
}

export type OwnProps<T> = FieldProps<T> & Props

export const MyReactSelect: React.SFC<OwnProps<any>> = ({
  field,
  form,
  ...rest
}: OwnProps<any>) => {
  const { errors, touched } = form

  return (
    <div>
      <FormControl error={touched[field.name] && !!errors[field.name]} />
      <InputLabel>{field.name}</InputLabel>
      <Select
        options={rest.options}
        placeholder={rest.placeholder}
        isMulti={rest.isMulti}
        onChange={(option: any) => {
          rest.isMulti
            ? form.setFieldValue(field.name, [
                ...option.map((x: any) => x.value),
              ])
            : form.setFieldValue(field.name, option.value)
        }}
        onBlur={() => {
          form.setFieldTouched(field.name, true)
        }}
      />
      {!!errors[field.name] &&
        touched[field.name] && (
          <FormHelperText style={{ color: 'red' }}>
            {errors[field.name]}
          </FormHelperText>
        )}
    </div>
  )
}
