import Img from "gatsby-image"
import React from "react"
import styled, { useTheme } from "styled-components"
import Box from "../../components/Box"
import { Typography } from "../../components/Typography"
import { GatsbySharpImage } from "../../interfaces"
import { up, down } from '../../styles/mixins';
import { between } from 'polished';

const StyledText = styled(Typography)`
  ${props => props.theme.typography.h1};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${between('24px', '92px', '400px', '1920px')};
  margin-bottom: 90px;
  margin: 0 auto;
  ${down.xs`
    font-size: 24px;
    margin-bottom: 24px;
  `}
`
const StyledDescription = styled(Typography)`
  ${props => props.theme.typography.h3};
  color: ${props => props.theme.colors.text.primary};
  line-height: 36px;
  font-size: ${between('14px', '36px', '400px', '1920px')};
  margin: 0 auto;
  ${down.xs`
  line-height: 18px;
    font-size: 16px;
  `}
`
const StyledImg = styled(Img)`
  width: 100%;
  max-width: 961px;
  ${down.lg`
    max-width: 768px;
  `}
`

type Props = {
  title: string
  text: string
  devices: GatsbySharpImage
}

const IndexAvailable = ({ title, text, devices }: Props) => {
  const theme = useTheme()

  return (
    <Box
      as="section"
      width="90%"
      display="flex"
      marginLeft={["auto", null, null, null, "auto"]}
      marginRight={["auto", null, null, null, null]}
      justifyContent="flex-end"
      alignItems="center"
      flexDirection={["column", null, null, "row", "row"]}
      pt={[theme.spacing[6], null, null, theme.spacing[17], null]}
      px={[null, null, 0, null, theme.spacing[20]]}
    >
      <Box
        display={["flex", null, null, null, null]}
        flexDirection={["column", null, null, null, null]}
        pt={[null, null, null, null, theme.spacing[9]]}
        pl={[null, null, null, theme.spacing[9], null]}
        pr={[null, null, null, theme.spacing[25], theme.spacing[15]]}
      >
        <StyledText
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <StyledDescription
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Box>
      <Box
        width={["80%", null, null, "50.83%", null]}
        maxWidth="901px"
        flexShrink={0}
        mt={[theme.spacing[6], null, null, 0, null]}
      >
        <StyledImg fluid={devices.childImageSharp.fluid} />
      </Box>
    </Box >
  )
}

export default IndexAvailable
