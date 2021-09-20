import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { pages } from '../../pages/pages'
import { useAppState } from '../../store'
import { RouteProps } from './Route.props'

const PublicRoute = ({ children, ...props }: RouteProps) => {
  const isLogged = useAppState(state => state.auth.isLogged)

  return (
    <Route
      {...props}
      render={({ location }) =>
        !isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: pages.Home.url({}),
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PublicRoute
