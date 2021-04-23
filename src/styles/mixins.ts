import { css } from "styled-components"
import { BreakpointsAliases } from "../types/sc"
import { breakpointsAliases } from "./theme"

export function pxPlusOne(size: string) {
  return `${parseInt(size.replace("px", ""), 10) - 1}px`
}
type CSSParams = Parameters<typeof css>

type BreakpointMixin = Record<
  BreakpointsAliases,
  (...params: CSSParams) => ReturnType<typeof css>
>

export const down = breakpointsAliases.reduce((acc, bp) => {
  acc[bp] = (strings, ...args) => css`
    @media (max-width: ${props => pxPlusOne(props.theme.breakpoints[bp])}) {
      ${css(strings, ...args)}
    }
  `
  return acc
}, {} as BreakpointMixin)

export const up = breakpointsAliases.reduce((acc, bp) => {
  acc[bp] = (strings, ...args) => css`
    @media (min-width: ${props => props.theme.breakpoints[bp]}) {
      ${css(strings, ...args)}
    }
  `
  return acc
}, {} as BreakpointMixin)
