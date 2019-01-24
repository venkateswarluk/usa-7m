import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'

import { MFTextField } from '../../MaterialComponents'
import Paper from '@material-ui/core/Paper'

import * as yup from 'yup'

export interface ActivityCategory {
  readonly serviceType: string
  readonly categoryName: string
  readonly categoryId: number
}

const FormSchema: () => yup.ObjectSchema<
  ActivityCategory
> = (): yup.ObjectSchema<ActivityCategory> =>
  yup.object({
    serviceType: yup.string().required('ActivityName Required'),
    categoryName: yup.string().required(' Title Required'),
    categoryId: yup
      .number()
      .required(' Title Required')
      .moreThan(0, 'Enter CategoryId'),
  })

export const ActivityCategoryView = (props: any) => (
  <Formik
    initialValues={props.initialValues}
    onSubmit={values => props.click(values)}
    validationSchema={FormSchema}
  >
    <div className="ActivityViewContainer">
      <Paper>
        <Form>
          <MFTextField name="serviceType" type="text" />

          <MFTextField name="categoryName" type="text" />

          <MFTextField name="categoryId" type="number" />
          <br />
          <Button color="primary" variant="contained" type="submit">
            Next
          </Button>
        </Form>
      </Paper>
    </div>
  </Formik>
)
