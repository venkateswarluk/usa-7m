import * as React from 'react'
import { Header } from '../components/MainHeader'
import { CityBreakInclusionView } from '../views/CityBreakInclusionView'

import '../views/App.css'

export const CityBreakInclusionPage = () => {
  return (
    <div>
      <Header />
      <div>
        <CityBreakInclusionView />
      </div>
    </div>
  )
}
