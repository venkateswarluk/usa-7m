import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper'

import { MFTextField } from '../../MaterialComponents'

export interface ActivityOption {
  readonly typeVal: string
  readonly typeDescription: string
  readonly name: string
}

const FormSchema: () => yup.ObjectSchema<ActivityOption> = (): yup.ObjectSchema<
  ActivityOption
> =>
  yup.object({
    typeVal: yup.string().required(' TipeVal Required'),
    typeDescription: yup.string().required('TypeDescription Required'),
    name: yup.string().required('Name Required'),
  })

export const respJson = (res: any, actions: any) => {
  if (res.ok) {
    actions.resetForm()
    return res
  } else {
    throw res
  }
}

export const ActivityOptionView = (props: any) => (
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

            <MFTextField name="typeVal" type="text" />

            <MFTextField name="typeDescription" type="text" />
            <br />
            <MFTextField name="name" type="text" />
            <br />

            <Button color="primary" variant="contained" type="submit">
              Next
            </Button>
          </Form>
        </Paper>
      </div>
    </Formik>
  </div>
)
