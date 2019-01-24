import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper'

import { MFTextField } from '../../MaterialComponents'

export interface OptionAvailability {
  readonly maxAdults: number
  readonly maxChilds: number
  readonly adultPrice: number
  readonly childPrice: number
}

const FormSchema: () => yup.ObjectSchema<
  OptionAvailability
> = (): yup.ObjectSchema<OptionAvailability> =>
  yup.object({
    maxAdults: yup.number().required(' Required'),
    maxChilds: yup.number().required(' Required'),
    adultPrice: yup.number().required(' Required'),
    childPrice: yup.number().required(' Required'),
  })

export const respJson = (res: any, actions: any) => {
  if (res.ok) {
    actions.resetForm()
    return res
  } else {
    throw res
  }
}

export const OptionAvailabilityView = (props: any) => (
  <div>
    <Formik
      initialValues={props.initialValues}
      onSubmit={values => props.click(values)}
      validationSchema={FormSchema}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <Form>
            <div className="ActivityHeader">Activity Option</div>
            <MFTextField name="maxAdults" type="number" />
            <MFTextField name="maxChilds" type="number" />

            <MFTextField name="adultPrice" type="number" />

            <MFTextField name="childPrice" type="number" />

            <br />

            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </Form>
        </Paper>
      </div>
    </Formik>
  </div>
)
