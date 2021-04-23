import styled from "styled-components"
import { down, up } from "../styles/mixins"
import Box, { BoxProps } from "./Box"

type HiddenProps = {
  className:
    | "upXs"
    | "upSm"
    | "upMd"
    | "upLg"
    | "upXl"
    | "downXs"
    | "downSm"
    | "downMd"
    | "downLg"
    | "downXl"
}

export const Hidden = styled(Box)<HiddenProps & BoxProps>`
  display: ${props => props.display || "initial"};

  ${up.xs`
  &.upXs {
    display: none;
  }
  `};
  ${up.sm`
    &.upSm {
      display: none;
    }
  `};
  ${up.md`
    &.upMd {
      display: none;
    }
  `};
  ${up.lg`
    &.upLg {
      display: none;
    }
  `};
  ${up.xl`
    &.upXl {
      display: none;
    }
  `};
  ${down.xs`
     &.downXs {
      display: none;
    }
  `};
  ${down.sm`
     &.downSm {
      display: none;
    }
  `};
  ${down.md`
     &.downMd {
      display: none;
    }
  `};
  ${down.lg`
     &.downLg {
      display: none;
    }
  `};
  ${down.xl`
     &.downXl {
      display: none;
    }
  `};
`
