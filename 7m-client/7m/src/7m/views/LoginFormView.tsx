import * as React from 'react'

import * as yup from 'yup'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import { MFTextField } from '../../MaterialComponents'
import Paper from '@material-ui/core/Paper'

import './App.css'

export interface LoginFormValues {
  readonly email: string
  readonly password: string
}

const loginFormSchema: (p: number) => yup.ObjectSchema<LoginFormValues> = (
  minPasswordLength: number,
) =>
  yup.object({
    email: yup
      .string()
      .email()
      .required('Email required'),
    password: yup
      .string()
      .min(minPasswordLength)
      .required('Password required'),
  })

interface LoginFormProps {
  readonly minPasswordLength?: number
  readonly props?: any
}

export const respJson = (res: any, actions: any, props: any) => {
  if (res.ok) {
    actions.setSubmitting(false)
    props.history.push('/activities/activity')
    return res
  } else {
    actions.setErrors({ password: 'Email or Password Incorrect' })
    throw res
  }
}

export const handleSubmit = async (
  values: LoginFormValues,
  actions: any,
  props: any,
) => {
  const res = await fetch(`http://183.82.121.156:4001/auth/token`, {
    body: JSON.stringify(values),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  return respJson(res, actions, props)
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  minPasswordLength = 8,
  props,
}: any) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values: LoginFormValues, actions: any) => {
      handleSubmit(values, actions, props)
    }}
    validationSchema={loginFormSchema(minPasswordLength)}
    render={() => (
      <div className="signInContainer ">
        <div>
          <Paper>
            <Form>
              <MFTextField type="email" name="email" />
              <br />
              <MFTextField type="password" name="password" />
              <br />
              <div className="button-container">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="medium"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Paper>
        </div>
      </div>
    )}
  />
)
