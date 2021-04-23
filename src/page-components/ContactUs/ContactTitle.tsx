import React, { ComponentProps } from "react"
import { Typography } from "../../components/Typography"
import styled from 'styled-components'
import { down } from "../../styles/mixins"
import { between } from 'polished'

const ContactTitle = (props: ComponentProps<typeof Typography>) => {
  const StyledTitle = styled(Typography)`
  ${props => props.theme.typography.h2};
  text-align: center;
  text-transform: uppercase;
  font-size: ${between('28px', '70px', '400px', '1920px')};

  ${down.md`
    font-size: 28px;
  `}
  `
  return (
    <StyledTitle
      {...props}
    />
  )
}

export default ContactTitle
