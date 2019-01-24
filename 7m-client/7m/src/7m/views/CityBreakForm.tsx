import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper'
import { MFTextField } from '../../MaterialComponents'

// import Snackbar from '@material-ui/core/Snackbar'

export interface CityBreakFormValues {
  readonly cityId: number
  readonly days: number
  readonly description: string
  readonly price: number
  readonly imageUrl: string
  readonly phone: string
  readonly starRating: number
}

const FormSchema: () => yup.ObjectSchema<
  CityBreakFormValues
> = (): yup.ObjectSchema<CityBreakFormValues> =>
  yup.object({
    cityId: yup.number().required('Select City'),
    days: yup.number().required('days Required'),
    description: yup.string().required('Description required'),
    price: yup.number().required('Price required'),
    imageUrl: yup.string().required('MealType required'),
    phone: yup.string().required('MealType required'),
    starRating: yup.number().required('MealType required'),
  })

export const respJson = (res: any, actions: any) => {
  if (res.ok) {
    actions.setSubmitting(false)
    actions.resetForm({
      cityId: 0,
      days: 0,
      description: '',
      price: 0.0,
      imageUrl: '',
      phone: '',
      starRating: 0,
    })
  } else {
    throw res
  }
}

export const handleSubmit = async (
  values: CityBreakFormValues,
  actions: any,
) => {
  const res = await fetch(`http://192.168.1.3:3001/cityBreak/cityBreak`, {
    body: JSON.stringify(values),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  return respJson(res, actions)
}

export const CityBreakView = () => (
  <div>
    <Formik
      initialValues={{
        cityId: 0,
        days: 0,
        description: '',
        price: 0.0,
        imageUrl: '',
        phone: '',
        starRating: 0,
      }}
      onSubmit={(values: CityBreakFormValues, actions: any) => {
        handleSubmit(values, actions)
      }}
      validationSchema={FormSchema}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <div className="ActivityHeader"> CityBreak Form</div>
          <Form className="loginComponent">
            <MFTextField type="number" name="cityId" />
            <MFTextField type="number" name="days" />
            <MFTextField type="text" name="description" />
            <MFTextField type="number" name="price" />
            <MFTextField type="text" name="imageUrl" />
            <MFTextField type="text" name="phone" />
            <MFTextField type="number" name="starRating" />
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
