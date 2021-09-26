import type { Themes } from './types'
import { palette } from './palette'

const themeLight = palette
const themeDark = palette

export const themes: Themes = {
  Light: themeLight,
  Dark: themeDark,
}
