import {
  css,
  CSSObject,
  Interpolation,
  InterpolationFunction,
  SimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components'
import { Theme } from './index'

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type BreakpointRange = Record<Breakpoints, { min: number; max: number }>
export const breakpoints: BreakpointRange = {
  xs: {
    min: 0,
    max: 600,
  },
  sm: {
    min: 600,
    max: 960,
  },
  md: {
    min: 960,
    max: 1280,
  },
  lg: {
    min: 1280,
    max: 1920,
  },
  xl: {
    min: 1920,
    max: 1920,
  },
}

type Props = Record<string, unknown>
type StyledStrings<P extends Props> =
  | CSSObject
  | TemplateStringsArray
  | InterpolationFunction<ThemedStyledProps<P, Theme>>
  | InterpolationFunction<ThemedStyledProps<Props, Theme>>
type Interpolators<P extends Props> =
  | SimpleInterpolation[]
  | Array<Interpolation<ThemedStyledProps<P, Theme>>>
  | Array<Interpolation<ThemedStyledProps<Props, Theme>>>

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const xs = <P extends Props>(
  strings: StyledStrings<P>,
  ...values: Interpolators<P>
) => css`
  @media screen and (max-width: ${breakpoints.xs.max}px) {
    ${css<P>(strings, ...values)}
  }
`

export const sm = <P extends Props>(
  strings: StyledStrings<P>,
  ...values: Interpolators<P>
) => css`
  @media screen and (max-width: ${breakpoints.sm.max}px) {
    ${css(strings, ...values)}
  }
`

export const md = <P extends Props>(
  strings: StyledStrings<P>,
  ...values: Interpolators<P>
) => css`
  @media screen and (max-width: ${breakpoints.md.max}px) {
    ${css(strings, ...values)}
  }
`

export const lg = <P extends Props>(
  strings: StyledStrings<P>,
  ...values: Interpolators<P>
) => css`
  @media screen and (max-width: ${breakpoints.lg.max}px) {
    ${css(strings, ...values)}
  }
`

export const xl = <P extends Props>(
  strings: StyledStrings<P>,
  ...values: Interpolators<P>
) => css`
  @media screen and (min-width: ${breakpoints.xl.min}px) {
    ${css(strings, ...values)}
  }
`
