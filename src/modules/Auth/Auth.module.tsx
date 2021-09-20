import React from 'react'
import { Route } from 'react-router-dom'
import { Switch, PublicRoute } from '../../components/Route'
import { pages } from '../../pages/pages'
import SignInPage from '../../pages/SignIn'
import ForgotPasswordPage from '../../pages/ForgotPassword'
import ActivateUserPage from '../../pages/ActivateUser'
import OauthRedirectPage from 'pages/OauthRedirect'
import TermsOfServicePage from 'pages/TermsOfService'

function AuthModule() {
  return (
    <Switch>
      <PublicRoute page={pages.SignIn} exact>
        <SignInPage />
      </PublicRoute>
      <PublicRoute page={pages.ForgotPassword} exact>
        <ForgotPasswordPage />
      </PublicRoute>
      <PublicRoute page={pages.ForgotPassword} exact>
        <ForgotPasswordPage />
      </PublicRoute>
      <PublicRoute page={pages.OauthRedirect} exact>
        <OauthRedirectPage />
      </PublicRoute>
      <Route path={pages.ActivateUser.path} exact>
        <ActivateUserPage />
      </Route>
      <Route path={pages.Terms.path} exact>
        <TermsOfServicePage />
      </Route>
    </Switch>
  )
}

export default AuthModule
