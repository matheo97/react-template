import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { PrivateRoute, Switch } from '../../components/Route'
import { pages } from '../../pages/pages'
import TabsTemplate from '../../templates/TabsTemplate'

function AppModule() {
  /*   const { user } = useAppState(state => state.auth) */
  return (
    <TabsTemplate>
      <Switch>
        {/*         <PrivateRoute page={pages.Shipments} exact>
          <ShipmentsListPage />
        </PrivateRoute>
        <Route path={pages.ForbiddenAccess.path} exact>
          <ForbiddenAccessPage />
        </Route> */}
      </Switch>
    </TabsTemplate>
  )
}

export default AppModule
