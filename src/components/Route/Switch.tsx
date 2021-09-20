import React from 'react'
import { Switch as RouterSwitch, SwitchProps } from 'react-router-dom'
import { RouteProps } from './Route.props'


const Switch = ({ children }: SwitchProps) => {
  const pages = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return null
    const props: RouteProps = child.props
    return React.cloneElement(child, {
      ...props,
      path: props.page ? props.page.path : props.path,
    })
  })

  return <RouterSwitch>{pages}</RouterSwitch>
}

export default Switch
