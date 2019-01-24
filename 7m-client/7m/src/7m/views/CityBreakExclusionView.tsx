import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper'

import { MFTextField } from '../../MaterialComponents'

export interface CityBreakExclusionFormValues {
  readonly cityId: number
  readonly exclusions: string
}

const FormSchema: () => yup.ObjectSchema<
  CityBreakExclusionFormValues
> = (): yup.ObjectSchema<CityBreakExclusionFormValues> =>
  yup.object({
    cityId: yup.number().required('Select City'),

    exclusions: yup.string().required('Description required'),
  })

export const respJson = (res: any, actions: any) => {
  if (res.ok) {
    actions.setSubmitting(false)
    return res
  } else {
    throw res
  }
}

export const handleSubmit = async (
  values: CityBreakExclusionFormValues,
  actions: any,
) => {
  const res = await fetch(`http://localhost:3001/cityBreak/exclusion`, {
    body: JSON.stringify(values),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  return respJson(res, actions)
}

export const CityBreakExclusionView = () => (
  <div>
    <Formik
      initialValues={{
        cityId: 0,
        exclusions: '',
      }}
      onSubmit={(values: CityBreakExclusionFormValues, actions: any) => {
        handleSubmit(values, actions)
      }}
      validationSchema={FormSchema}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <div className="ActivityHeader"> CityBreak Exclusion</div>
          <Form className="loginComponent">
            <MFTextField type="number" name="cityId" />
            <MFTextField type="text" name="exclusions" />
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
