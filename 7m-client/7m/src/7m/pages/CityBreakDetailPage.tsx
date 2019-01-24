import * as React from 'react'
import { Header } from '../components/MainHeader'
import { CityBreakDetailsView } from '../views/CityBreakDetailsView'

import '../views/App.css'

export const CityBreakDetailPage = () => {
  return (
    <div>
      <Header />
      <div>
        <CityBreakDetailsView />
      </div>
    </div>
  )
}
