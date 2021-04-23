import styled from "styled-components"
import Box, { BoxProps } from "./Box"

type BaseWrapperProps = Omit<BoxProps, "px" | "paddingLeft" | "paddingRight">

const BaseWrapper = styled(Box)<BaseWrapperProps>`
  /* ${props => props}
  ${BoxCSS} */
`

export default BaseWrapper
