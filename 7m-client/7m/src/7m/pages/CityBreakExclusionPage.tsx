import * as React from 'react'
import { Header } from '../components/MainHeader'
import { CityBreakExclusionView } from '../views/CityBreakExclusionView'

export const CityBreakExclusionPage = () => {
  return (
    <div>
      <Header />
      <div>
        <CityBreakExclusionView />
      </div>
    </div>
  )
}
