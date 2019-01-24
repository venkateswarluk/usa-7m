import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper'

import { MFTextField } from '../../MaterialComponents'

export interface MealTypeFormValues {
  readonly name: string
  readonly mealType: string
  readonly description: string
  readonly imageUrl: string
  readonly price: number
  readonly items: string
}

const FormSchema: () => yup.ObjectSchema<
  MealTypeFormValues
> = (): yup.ObjectSchema<MealTypeFormValues> =>
  yup.object({
    name: yup.string().required('Name required'),
    mealType: yup.string().required('MealType required'),
    description: yup.string().required('Description required'),
    imageUrl: yup.string().required('imageUrl required'),
    price: yup.number().required('price required'),
    items: yup.string(),
  })

export const respJson = (res: any, actions: any, props: any) => {
  console.log(props.history)
  if (res.ok) {
    actions.setSubmitting(false)
    actions.resetForm({
      name: '',
      mealType: '',
      description: '',
      imageUrl: '',
      price: 0.0,
      items: '',
    })
    return res
  } else {
    throw res
  }
}

export const handleSubmit = async (
  values: MealTypeFormValues,
  actions: any,
  props: any,
) => {
  console.log(props)
  console.log(values)
  const res = await fetch(`http://183.82.121.156:4001/meals/mealtype`, {
    body: JSON.stringify(values),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  respJson(res, actions, props)
}

export const MealTypeView = (props: any) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        mealType: '',
        description: '',
        imageUrl: '',
        price: 0.0,
        items: '',
      }}
      onSubmit={(values: MealTypeFormValues, actions: any) => {
        handleSubmit(values, actions, props)
      }}
      validationSchema={FormSchema}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <Form>
            <div className="ActivityHeader"> Meal Form</div>
            <MFTextField type="text" name="name" />
            <br />
            <MFTextField type="text" name="mealType" />
            <br />
            <MFTextField type="text" name="description" />
            <br />
            <MFTextField type="text" name="imageUrl" />
            <br />
            <MFTextField type="number" name="price" /> <br />
            <MFTextField type="text" name="items" /> <br />
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
