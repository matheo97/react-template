import React from 'react'
import { Route } from 'react-router-dom'
import { Switch, PublicRoute } from '../../components/Route'
import { pages } from '../../pages/pages'
function AuthModule() {
  return (
    <Switch>
      {/*       <PublicRoute page={pages.SignIn} exact>
        <SignInPage />
      </PublicRoute>
      <PublicRoute page={pages.ForgotPassword} exact>
        <ForgotPasswordPage />
      </PublicRoute>
      <PublicRoute page={pages.ForgotPassword} exact>
        <ForgotPasswordPage />
      </PublicRoute> */}
    </Switch>
  )
}

export default AuthModule
