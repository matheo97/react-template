import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { PrivateRoute, Switch } from '../../components/Route'
import { pages } from '../../pages/pages'
import ShipmentsListPage from '../../pages/ShipmentsList'
import ShipmentDetailsPage from '../../pages/ShipmentDetails'
import BusinessPartnersPage from 'pages/BusinessPartners'
import DriversListPage from 'pages/DriversList'
import UsersListPage from 'pages/UsersList'
import LocationListPage from 'pages/LocationList'
import ProfilePage from '../../pages/Profile'
import CarriersListPage from 'pages/CarriersList'
import BusinessPartnerLocationsPage from 'pages/BusinessPartnerLocations'
import ProductCarrierMappingPage from 'pages/ProductCarrierMapping'
import ProductsListPage from 'pages/ProductsList'
import CompanyProfilePage from 'pages/CompanyProfile'
import PassConfigPage from 'pages/PassConfig'
import AutomationSwitchPage from 'pages/AutomationSwitch'
import PassConfigDetailsPage from 'pages/PassConfigDetails'
import TeamListPage from 'pages/TeamList'
import ForbiddenAccessPage from 'pages/ForbiddenAccess'
import AdminUsersListPage from 'pages/AdminUsersList'
import AdminCarriersListPage from 'pages/AdminCarriersList'
import AdminCompanyListPage from 'pages/AdminCompanyList'
import AdminCarrierProfilePage from 'pages/AdminCarrierProfile'
import AdminCompanyProfilePage from 'pages/AdminCompanyProfile'
import SidebarNavbarTemplate from 'templates/SidebarNavbarTemplate'
import { useAppState } from 'store'
import LookupTables from 'pages/LookupTables'
import LookupValues from 'pages/LookupValues'

function AppModule() {
  const { user } = useAppState(state => state.auth)
  return (
    <SidebarNavbarTemplate>
      <Switch>
        <PrivateRoute page={pages.Shipments} exact>
          <ShipmentsListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.Home} exact>
          {user?.role === 'velostics-admin' ? (
            <Redirect to={pages.Team.path} />
          ) : (
            <Redirect to={pages.Shipments.path} />
          )}
        </PrivateRoute>
        <PrivateRoute page={pages.ShipmentDetails}>
          <ShipmentDetailsPage />
        </PrivateRoute>
        <PrivateRoute page={pages.Profile}>
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute exact page={pages.BusinessPartners}>
          <BusinessPartnersPage />
        </PrivateRoute>
        <PrivateRoute page={pages.BusinessPartnerLocation}>
          <BusinessPartnerLocationsPage />
        </PrivateRoute>
        <PrivateRoute page={pages.DriversList}>
          <DriversListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.UsersList}>
          <UsersListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.LocationsList}>
          <LocationListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.CarriersList}>
          <CarriersListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.ProductsList}>
          <ProductsListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.LookupTables}>
          <LookupTables />
        </PrivateRoute>
        <PrivateRoute page={pages.LookupValues}>
          <LookupValues />
        </PrivateRoute>
        <PrivateRoute page={pages.ProductCarrierMapping}>
          <ProductCarrierMappingPage />
        </PrivateRoute>
        <PrivateRoute page={pages.CompanyProfile}>
          <CompanyProfilePage />
        </PrivateRoute>
        <PrivateRoute page={pages.AutomationSwitch}>
          <AutomationSwitchPage />
        </PrivateRoute>
        <PrivateRoute page={pages.PassConfig} exact>
          <PassConfigPage />
        </PrivateRoute>
        <PrivateRoute page={pages.PassConfigDetails}>
          <PassConfigDetailsPage />
        </PrivateRoute>
        <PrivateRoute page={pages.Team}>
          <TeamListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.AdminUsersList}>
          <AdminUsersListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.AdminCarriersProfile}>
          <AdminCarrierProfilePage />
        </PrivateRoute>
        <PrivateRoute page={pages.AdminCarriersList}>
          <AdminCarriersListPage />
        </PrivateRoute>
        <PrivateRoute page={pages.AdminCompaniesProfile}>
          <AdminCompanyProfilePage />
        </PrivateRoute>
        <PrivateRoute page={pages.AdminCompaniesList}>
          <AdminCompanyListPage />
        </PrivateRoute>
        <Route path={pages.ForbiddenAccess.path} exact>
          <ForbiddenAccessPage />
        </Route>
      </Switch>
    </SidebarNavbarTemplate>
  )
}

export default AppModule
