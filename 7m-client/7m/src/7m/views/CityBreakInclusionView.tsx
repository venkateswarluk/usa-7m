import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper'

import { MFTextField } from '../../MaterialComponents'

export interface CityBreakInclusionFormValues {
  readonly cityId: number
  readonly days: number
  readonly inclusions: string
}

const FormSchema: () => yup.ObjectSchema<
  CityBreakInclusionFormValues
> = (): yup.ObjectSchema<CityBreakInclusionFormValues> =>
  yup.object({
    cityId: yup.number().required('Select City'),
    days: yup.number().required('days Required'),
    inclusions: yup.string().required('Description required'),
  })

export const respJson = (res: any, actions: any) => {
  if (res.ok) {
    actions.setSubmitting(false)
    actions.resetForm({
      cityId: 0,
      days: 0,
      inclusions: '',
    })
    return res
  } else {
    throw res
  }
}

export const handleSubmit = async (
  values: CityBreakInclusionFormValues,
  actions: any,
) => {
  const res = await fetch(`http://localhost:3001/cityBreak/inclusion`, {
    body: JSON.stringify(values),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  return respJson(res, actions)
}

export const CityBreakInclusionView = () => (
  <div>
    <Formik
      initialValues={{
        cityId: 0,
        days: 0,
        inclusions: '',
      }}
      onSubmit={(values: CityBreakInclusionFormValues, actions: any) => {
        handleSubmit(values, actions)
      }}
      validationSchema={FormSchema}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <div className="ActivityHeader"> CityBreak Inclusion</div>
          <Form className="loginComponent">
            <MFTextField type="number" name="cityId" />
            <MFTextField type="number" name="days" />
            <MFTextField type="text" name="inclusions" />
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
