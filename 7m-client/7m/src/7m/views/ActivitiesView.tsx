import * as React from 'react'
import { Activity, ActivityView } from './ActivityView'
import { ActivityOption, ActivityOptionView } from './ActivityOptionView'
import { ActivityDetails, ActivityDetailsView } from './ActivityDetailsView'
import {
  OptionAvailability,
  OptionAvailabilityView,
} from './OptionAvailabilityView'
import { RouteComponentProps } from 'react-router-dom'
import { Header } from '../components/MainHeader'

export interface Params {
  readonly currentPage: string
}

export interface Activities1 extends RouteComponentProps<Params> {
  readonly activity: Activity
  readonly activityOptions: ActivityOption
  readonly activityDetails: ActivityDetails
  readonly optionAvailabilities: OptionAvailability
}

const activityInitialValues: Activity = {
  activityName: '',
  description: '',
  stars: 0,
  thumbUrl: '',
  minChildAge: 0,
  maxChildAge: 0,
  destinationId: 0,
  categoryId: 0,
}

const optionInitialValues: ActivityOption = {
  typeVal: '',
  typeDescription: '',
  name: '',
}

const detailsInitialValues: ActivityDetails = {
  shortDescription: '',
  longDescription: '',
  images: '',
  videos: '',
  activityPhone: '',
}

const availabilityValues: OptionAvailability = {
  maxAdults: 0,
  maxChilds: 0,
  adultPrice: 0.0,
  childPrice: 0.0,
}

export class Activities extends React.Component<Activities1> {
  readonly state = {
    activity: { ...activityInitialValues },
    activityOptions: { ...optionInitialValues },
    activityDetails: { ...detailsInitialValues },
    optionAvailabilities: { ...availabilityValues },
  }

  readonly handleActivityNextClick = (values: Activity) => {
    this.setState({ activity: values })
    this.props.history.push('/activities/activity-details')
  }

  readonly handleActivityDetCreateClick = (values: ActivityDetails) => {
    this.setState({ activityDetails: values })
    this.props.history.push('/activities/activity-option')
  }
  readonly handleActivityOptCreateClick = (values: ActivityOption) => {
    this.setState({ activityOptions: values })
    this.props.history.push('/activities/activity-availability')
  }

  readonly handleActivityAvlCreateClick = async (
    values: OptionAvailability,
  ) => {
    this.setState({ optionAvailabilities: values })
    const res = await fetch(`http://183.82.121.156:4001/sevenm/activity`, {
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    if (res.ok) {
      this.setState({
        activity: {},
        activityOptions: {},
        activityDetails: {},
        optionAvailabilities: {},
      })
      this.props.history.push('/activities/activity')
    }
  }

  render(): JSX.Element {
    const {
      activity,
      activityOptions,
      activityDetails,
      optionAvailabilities,
    } = this.state

    const { match } = this.props

    const currentPage = match ? match.params.currentPage : ''

    return (
      <div className="loginComponent">
        <Header />
        <div className="login-container">
          {currentPage === 'activity' && (
            <ActivityView
              initialValues={activity}
              click={this.handleActivityNextClick}
            />
          )}

          {currentPage === 'activity-details' && (
            <ActivityDetailsView
              initialValues={activityDetails}
              click={this.handleActivityDetCreateClick}
            />
          )}

          {currentPage === 'activity-option' && (
            <ActivityOptionView
              initialValues={activityOptions}
              click={this.handleActivityOptCreateClick}
            />
          )}

          {currentPage === 'activity-availability' && (
            <OptionAvailabilityView
              initialValues={optionAvailabilities}
              click={this.handleActivityAvlCreateClick}
            />
          )}
        </div>
      </div>
    )
  }
}
