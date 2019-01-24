import * as React from 'react'
import { Header } from '../components/MainHeader'
import { CityBreakView } from '../views/CityBreakForm'

import '../views/App.css'

export const CityBreakPage = () => {
  return (
    <div>
      <Header />
      <div>
        <CityBreakView />
      </div>
    </div>
  )
}
