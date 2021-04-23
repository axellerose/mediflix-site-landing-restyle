import { ComponentProps } from "react"
import styled from "styled-components"
import { Typography } from "../../components/Typography"
import { down } from "../../styles/mixins"

type StyleProps = {
  variant?: "medium" | "strong"
}
type ContactTextProps = ComponentProps<typeof Typography> & StyleProps

const ContactText = styled(Typography) <StyleProps>`
  font-size: 18px;
  

  & b {
    color: ${props => props.theme.colors.blue.main};
    font-weight: bold;
  }

  & strong {
    font-weight: 500;
  }
  ${down.xs`
    text-align: center;
  `}

  ${down.md`
    font-size: 16px;
  `}
`

export default ContactText
