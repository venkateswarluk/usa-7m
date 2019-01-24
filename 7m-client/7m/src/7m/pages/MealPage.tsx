import * as React from 'react'
import { MealTypeView } from '../views/MealTypeView'
import { Header } from '../components/MainHeader'

import '../views/App.css'

export const MealPage = (props: any) => {
  return (
    <div>
      <Header />
      <div>
        <MealTypeView props={props} />
      </div>
    </div>
  )
}
