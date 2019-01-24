import * as React from 'react'
import { LoginForm } from '../views/LoginFormView'
import { Header } from '../components/Header'

import '../views/App.css'

export const LoginPage = (props: any) => {
  return (
    <div>
      <Header />
      <div>
        <LoginForm props={props} />
      </div>
    </div>
  )
}
