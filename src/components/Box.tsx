import styled, { css } from "styled-components"
import {
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from "styled-system"

export type BoxProps = SpaceProps & LayoutProps & FlexProps & FlexboxProps

export const BoxCSS = css`
  ${space}
  ${layout}
  ${flexbox}
  ${flex}
`

const Box = styled.div<BoxProps>`
  ${BoxCSS}
`

export default Box
