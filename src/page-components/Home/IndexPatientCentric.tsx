import React from "react"
import styled, { useTheme } from "styled-components"
import { between, fluidRange } from 'polished'
import { Typography } from "../../components/Typography"
import { up, down } from '../../styles/mixins';
import { theme } from '../../styles/theme';

const StyledText = styled(Typography)`
  color: ${props => props.theme.colors.text.primary};
  ${props => props.theme.typography.h2};
  font-size: ${between('14px', '70px', '400px', '1920px')};
  & strong {
    font-weight: 400;
    color: ${props => props.theme.colors.text.secondary};
  }
  
  ${down.lg`
    padding: ${props => props.theme.spacing[22]};
  `}

  ${up.lg`
    padding: ${props => props.theme.spacing[40]} 0;
  `}
  ${down.xs`
    padding: 10vw 15vw;
    font-size: 16px;
  `}
`
type Props = {
  text: string
}

const IndexPatientCentric = ({ text }: Props) => {
  const theme = useTheme()
  return (
    // <StyledText
    //   as="section"
    //   fontSize={["26px", null, ...theme.typography.sizes.h1.slice(2)]}
    //   lineHeight="1.6"
    //   maxWidth={`calc(903px + ${theme.spacing[20]} + ${theme.spacing[10]})`}
    //   margin="0 auto"
    //   pl={[
    //     theme.spacing[4],
    //     theme.spacing[6],
    //     theme.spacing[15],
    //     theme.spacing[20],
    //     null,
    //   ]}
    //   pr={[theme.spacing[4], theme.spacing[6], null, theme.spacing[10], null]}
    //   py={[theme.spacing[8], null, null, theme.spacing[15], theme.spacing[21]]}
    //   dangerouslySetInnerHTML={{
    //     __html: text,
    //   }}
    // />
    <StyledText
      margin="0 auto"
      width={["100%", "90%", "80%", "80%", "60%"]}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  )
}

export default IndexPatientCentric
