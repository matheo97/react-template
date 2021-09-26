const COLORS = [
  'primary',
  'secondary',
  'tertiary',
  'fontPrimary',
  'fontSecondary',
  'fontTertiary',
  'containerPrimary',
  'containerSecondary',
  'borderPrimary',
  'borderSecondary',
  'tableRowPrimary',
  'tableRowSecondary',
  'tableRowHover',
  'buttonPrimary',
  'buttonSecondary',
  'buttonDisabled',
  'buttonHover',
  'buttonSuccess',
  'alertSuccess',
  'notificationPrimary',
  'error',
  'disabled',
] as const
export type Colors = typeof COLORS[number]
export function isColor(key: string): key is Colors {
  return COLORS.includes(key as Colors)
}

export type Palette = Record<Colors, string>

export type ThemeTypes = 'Light' | 'Dark'

export type Themes = Record<ThemeTypes, Palette>

export type Theme = {
  current: ThemeTypes
  themes: Themes

  colors: Palette
  spacing: number[]
}

export type UpdateTheme = (theme: Theme) => Theme

export type ThemeProp = {
  theme: Theme
}

// Override global theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
