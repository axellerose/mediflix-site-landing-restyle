import styled from "styled-components"
import { up, down } from "../styles/mixins"
import { BoxCSS, BoxProps } from "./Box"

const LoginButton = styled.a<BoxProps>`
  flex-grow: 0;
  padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[6]}`};
  margin-left: auto;
  background-color: ${props => props.theme.colors.blue.main};
  line-height: 34px;
  border: 3px solid ${props => props.theme.colors.text.primary};
  ${props => props.theme.typography.button1};
  color: ${props => props.theme.colors.text.primary};
  ${BoxCSS}
  font-weight: 400;
`

export default LoginButton

export const ResponsiveLoginButton = styled(LoginButton)`
  ${down.md`
    font-size: 24px;
  `}
  ${down.lg`
    font-size: 32px;
  `}
  // mobile
  ${down.xs`
    font-size: 14px;
    line-height: 16px;
    padding: ${props => `${props.theme.spacing[1]} ${props.theme.spacing[2]}`};
    border: 1px solid ${props => props.theme.colors.text.primary};
  `}
`
