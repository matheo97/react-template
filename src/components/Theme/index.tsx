import * as React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import type { Theme, UpdateTheme } from './types'
import { themes } from './themes'
import { spacing } from './spacing'

export * from './types'
export * from './palette'
export * from './spacing'
export * from './themes'

export const defaultTheme: Theme = {
  colors: themes.Light,
  current: 'Light',
  themes: themes,
  spacing: spacing,
}

export const changeTheme: UpdateTheme = ({ themes, current, ...rest }) => ({
  ...rest,
  themes,
  current,
  colors: current === 'Light' ? themes.Light : themes.Dark,
})

export const ThemeProvider: React.FC<{ theme?: Theme }> = ({
  children,
  theme,
}) => (
  <StyledProvider
    theme={{
      ...(theme ? theme : {}),
      ...defaultTheme,
    }}>
    <StyledProvider theme={changeTheme}>{children}</StyledProvider>
  </StyledProvider>
)

// ThemeProvider.defaultProps = {
//   theme: defaultTheme
// }
