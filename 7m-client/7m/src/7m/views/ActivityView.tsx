import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper'

import { MFTextField, MFReactSelect } from '../../MaterialComponents'

export interface Activity {
  readonly activityName: string
  readonly description: string
  readonly stars: number
  readonly thumbUrl: string
  readonly minChildAge: number
  readonly maxChildAge: number
  readonly destinationId: number
  readonly categoryId: number
}

export interface OptionValues {
  readonly value: number | string
  readonly label: string
}

export const categories: ReadonlyArray<OptionValues> = [
  { value: 588, label: 'Attraction Passes' },
  { value: 214, label: 'Museum' },
  { value: 213, label: 'Observation deck' },
  { value: 215, label: 'Entertainment' },
  { value: 212, label: 'Theme Parks' },
  { value: 216, label: 'Aquarium' },
  { value: 217, label: 'Cruise / Boat (Tour/Ride)' },
  { value: 219, label: 'Zoological Theme Park' },
  { value: 220, label: 'Political Attraction' },
  { value: 221, label: 'Bus (Tour/Ride)' },
  { value: 218, label: 'Helicopter Ride' },
  { value: 222, label: 'Wine Tour' },
  { value: 223, label: 'City Tour' },
  { value: 15, label: 'Transfer' },
  { value: 16, label: 'Guide' },
  { value: 224, label: 'Hop On Hop Off Tour' },
  { value: 225, label: 'Disney World' },
]

const destinations: ReadonlyArray<OptionValues> = [
  { value: 1, label: 'New York' },
  { value: 2, label: 'Orlando' },
  { value: 3, label: 'Houston' },
  { value: 4, label: 'Seattle' },
  { value: 5, label: 'Los Angeles' },
  { value: 6, label: 'San Diego' },
  { value: 7, label: 'San Francisco' },
  { value: 8, label: 'Lake Tahoe' },
  { value: 9, label: 'Washington DC' },
  { value: 10, label: 'Alexandria Bay' },
  { value: 11, label: 'Niagara' },
  { value: 12, label: 'Boston' },
  { value: 13, label: 'Philadelphia' },
  { value: 14, label: 'Atlanta' },
  { value: 15, label: 'Miami' },
  { value: 16, label: 'Tampa' },
  { value: 17, label: 'Chicago' },
  { value: 18, label: 'Las Vegas' },
  { value: 19, label: 'Denver' },
  { value: 20, label: 'New Orleans' },
  { value: 21, label: 'Key west' },
  { value: 22, label: 'Anchorage' },
]

const FormSchema: () => yup.ObjectSchema<Activity> = (): yup.ObjectSchema<
  Activity
> =>
  yup.object({
    activityName: yup.string().required('ActivityName Required'),
    description: yup.string().required(' Title Required'),
    stars: yup
      .number()
      .required(' Title Required')
      .moreThan(0, 'Stars Must MoreThan 0'),
    thumbUrl: yup.string().required(' Title Required'),
    minChildAge: yup
      .number()
      .required()
      .moreThan(0, 'MinChildAge Must MoreThan 0'),
    maxChildAge: yup
      .number()
      .required()
      .lessThan(9, 'MaxChildAge Must lessThan 9'),
    destinationId: yup
      .number()
      .required()
      .moreThan(0, 'Select destination'),

    categoryId: yup.number().required(),
  })

export const respJson = (res: any, actions: any) => {
  if (res.ok) {
    actions.resetForm()
    return res
  } else {
    throw res
  }
}

export const ActivityView = (props: any) => (
  <div>
    <Formik
      initialValues={props.initialValues}
      onSubmit={values => props.click(values)}
      validationSchema={FormSchema}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <Form>
            <div className="ActivityHeader">Activity Form</div>
            <MFTextField name="activityName" type="text" />
            <MFTextField name="description" type="text" />
            <MFTextField name="stars" type="number" />
            <MFTextField name="thumbUrl" type="text" />
            <MFTextField name="minChildAge" type="number" />
            <MFTextField name="maxChildAge" type="number" />
            <MFReactSelect name="destinationId" options={destinations} /> <br />
            <MFReactSelect name="categoryId" options={categories} /> <br />
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
