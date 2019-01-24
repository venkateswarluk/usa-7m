import * as React from 'react'
import { MyTextField } from './MFComponents/MFTextField'
import { MySelect } from './MFComponents/MFSelect'
import { MyDatePicker } from './MFComponents/MFDatePicker'
import { MyCheckbox } from './MFComponents/MFCheckBox'
import { MyRadioGroup } from './MFComponents/MFRadioGroup'
import { MySwitch } from './MFComponents/MFSwitch'
import { MyErrorMessage } from './MFComponents/MFErrorMessage'
import { MyReactSelect } from './MFComponents/MF-React-Select'

import { Field } from 'formik'

export type OptionValues = {
  readonly value: string | number
  readonly label: string
}

const capitalizeFirst = (word: string) =>
  word.charAt(0).toUpperCase() + word.substring(1)

interface TextFieldProps {
  readonly type: 'text' | 'number' | 'email' | 'password'
  readonly name: string
}

export interface SelectProps {
  readonly name: string
  readonly options: ReadonlyArray<OptionValues>
}

interface DatePickerProps {
  readonly name: string
  readonly type: 'date' | 'datetime-local' | 'time'
}

interface CheckboxProps {
  readonly name: string
  readonly value: boolean
}

export const MFTextField: React.SFC<TextFieldProps> = ({
  type,
  name,
}: TextFieldProps) => (
  <div>
    <Field
      label={capitalizeFirst(name)}
      name={name}
      type={type}
      component={MyTextField}
    />
  </div>
)

export const MFSelect: React.SFC<SelectProps> = ({
  options,
  name,
}: SelectProps) => (
  <div>
    <Field label={name} name={name} options={options} component={MySelect} />
  </div>
)

export const MFDatePicker: React.SFC<DatePickerProps> = ({
  type,
  name,
}: DatePickerProps) => (
  <div>
    <Field
      label={capitalizeFirst(name)}
      name={name}
      type={type}
      component={MyDatePicker}
    />
  </div>
)

export const MFCheckbox: React.SFC<CheckboxProps> = ({
  name,
  value,
}: CheckboxProps) => (
  <div>
    <Field value={value} name={name} component={MyCheckbox} />
  </div>
)

export const MFRadio: React.SFC<SelectProps> = ({
  options,
  name,
}: SelectProps) => (
  <div>
    <Field
      label={capitalizeFirst(name)}
      name={name}
      options={options}
      component={MyRadioGroup}
    />
  </div>
)

export const MFSwitch: React.SFC<CheckboxProps> = ({ name }: CheckboxProps) => (
  <div>
    <Field label={capitalizeFirst(name)} name={name} component={MySwitch} />
  </div>
)

export interface ReactSelectProps {
  readonly name: string
  readonly options: ReadonlyArray<OptionValues>
  readonly isMulti?: boolean
}

export const MFReactSelect: React.SFC<ReactSelectProps> = ({
  options,
  name,
  isMulti,
}: ReactSelectProps) => (
  <div>
    <Field
      label={name}
      name={name}
      options={options}
      isMulti={isMulti}
      component={MyReactSelect}
    />
  </div>
)

type ErrorMessageProps = {
  readonly name: string
}

export const MFErrorMessage: React.SFC<ErrorMessageProps> = ({
  name,
}: ErrorMessageProps) => (
  <div>
    <Field
      label={capitalizeFirst(name)}
      name={name}
      component={MyErrorMessage}
    />
  </div>
)
