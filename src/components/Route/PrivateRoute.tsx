import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { pages } from '../../pages/pages'
import { useAppState } from '../../store'
import { RouteProps } from './Route.props'

const PrivateRoute = ({ page, children, ...props }: RouteProps) => {
  const auth = useAppState(state => state.auth)
  return (
    <Route
      {...props}
      render={({ location }) =>
        auth.isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: auth.isLogged
                ? pages.Home.url({})
                : pages.ForbiddenAccess.url({}),
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
