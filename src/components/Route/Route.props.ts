import { Page } from '../../pages/pages'
import { RouteProps as ReactRouterProps } from 'react-router-dom'

export type RouteProps = ReactRouterProps & {
  page: Page
}
