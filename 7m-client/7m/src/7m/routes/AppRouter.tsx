import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { Activities } from '../views/ActivitiesView'
import { Link } from 'react-router-dom'
import { Header } from '../components/MainHeader'
import { CityBreakPage } from '../pages/CityBreakPage'
import { CityBreakDetailPage } from '../pages/CityBreakDetailPage'
import { CityBreakInclusionPage } from '../pages/CityBreakInclusionPage'
import { CityBreakExclusionPage } from '../pages/CityBreakExclusionPage'

import { MealPage } from '../pages/MealPage'

const CityBreakPage1 = () => (
  <div>
    <Header />
    <div className="cityBreakHeader">
      <Link className="link" to="/cityBreak/cityBreak">
        City Break
      </Link>
      <Link className="link" to="/cityBreak/details">
        City Break Details
      </Link>
      <Link className="link" to="/cityBreak/inclusion">
        City Break Inclusions
      </Link>
      <Link className="link" to="/cityBreak/exclusion">
        City Break Exclusions
      </Link>
    </div>
  </div>
)

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={LoginPage} />
      <Route path="/activities/:currentPage" component={Activities} />
      <Route path="/meals" exact={true} component={MealPage} />
      <Route path="/cityBreak" exact={true} component={CityBreakPage1} />
      <Route path="/cityBreak/cityBreak" component={CityBreakPage} />
      <Route path="/cityBreak/details" component={CityBreakDetailPage} />
      <Route path="/cityBreak/inclusion" component={CityBreakInclusionPage} />
      <Route path="/cityBreak/exclusion" component={CityBreakExclusionPage} />
    </Switch>
  </Router>
)
