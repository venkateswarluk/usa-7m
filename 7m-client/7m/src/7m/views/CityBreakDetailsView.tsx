import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper'

import { MFTextField } from '../../MaterialComponents'

export interface CityBreakDetailsFormValues {
  readonly cityId: number
  readonly days: number
  readonly dayNo: number
  readonly dayInfo: string
}

const FormSchema: () => yup.ObjectSchema<
  CityBreakDetailsFormValues
> = (): yup.ObjectSchema<CityBreakDetailsFormValues> =>
  yup.object({
    cityId: yup.number().required('Select City'),
    days: yup.number().required('days Required'),
    dayNo: yup.number().required('Description required'),
    dayInfo: yup.string().required('Price required'),
  })

export const respJson = (res: any, actions: any) => {
  if (res.ok) {
    actions.setSubmitting(false)
    actions.resetForm({
      cityId: 0,
      days: 0,
      dayNo: 0,
      dayInfo: '',
    })
    return res
  } else {
    throw res
  }
}

export const handleSubmit = async (
  values: CityBreakDetailsFormValues,
  actions: any,
) => {
  const res = await fetch(`http://localhost:3001/cityBreak/details`, {
    body: JSON.stringify(values),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  return respJson(res, actions)
}

export const CityBreakDetailsView = () => (
  <div>
    <Formik
      initialValues={{
        cityId: 0,
        days: 0,
        dayNo: 0,
        dayInfo: '',
      }}
      onSubmit={(values: CityBreakDetailsFormValues, actions: any) => {
        handleSubmit(values, actions)
      }}
      validationSchema={FormSchema}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <div className="ActivityHeader"> CityBreak Details </div>
          <Form className="loginComponent">
            <MFTextField type="number" name="cityId" />
            <MFTextField type="number" name="days" />
            <MFTextField type="number" name="dayNo" />
            <MFTextField type="text" name="dayInfo" />
            <br />
            <div className="button-item">
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
    </Formik>
  </div>
)
