import styled from "styled-components"
import {
  color,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from "styled-system"
import { fontStyles, FontStylesProps } from "../styles/utils/customStyledProps"

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    LayoutProps,
    SpaceProps,
    FontStylesProps,
    DisplayProps {
  preventOverflow?: boolean
}

export const Typography = styled.p<TypographyProps>`
  ${fontStyles}
  ${layout}
  ${space}
  ${display}
  ${color}

  ${props =>
    props.preventOverflow &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`
