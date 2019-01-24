import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'

import { MFTextField } from '../../MaterialComponents'
import Paper from '@material-ui/core/Paper'

export interface ActivityDetails {
  readonly shortDescription: string
  readonly longDescription: string
  readonly images?: string
  readonly videos?: string
  readonly activityPhone: string
}

const FormSchema: () => yup.ObjectSchema<
  ActivityDetails
> = (): yup.ObjectSchema<ActivityDetails> =>
  yup.object({
    shortDescription: yup.string().required(' TipeVal Required'),
    longDescription: yup.string().required('TypeDescription Required'),
    images: yup.string(),
    videos: yup.string(),
    activityPhone: yup.string().required('Name Required'),
  })

export const respJson = (res: any, actions: any) => {
  if (res.ok) {
    actions.resetForm()
    return res
  } else {
    throw res
  }
}

export const ActivityDetailsView = (props: any) => (
  <div>
    <Formik
      initialValues={props.initialValues}
      onSubmit={values => {
        const newValues = {
          ...values,
          images: values.images.split(','),
          videos: values.videos.split(','),
        }
        props.click(newValues)
      }}
      validationSchema={FormSchema}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <Form>
            <div className="ActivityHeader">Activity Details Form</div>

            <MFTextField name="shortDescription" type="text" />

            <MFTextField name="longDescription" type="text" />
            <br />
            <MFTextField name="images" type="text" />
            <br />
            <MFTextField name="videos" type="text" />
            <br />
            <MFTextField name="activityPhone" type="text" />
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
