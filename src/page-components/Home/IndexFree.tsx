import Img from "gatsby-image"
import React from "react"
import styled, { useTheme } from "styled-components"
import Box from "../../components/Box"
import { Typography } from "../../components/Typography"
import { GatsbySharpImage } from "../../interfaces"
import { up, down } from "../../styles/mixins"
import { between, fluidRange } from 'polished';

const StyledImg = styled(Img)`
  width: 100%;
  ${down.sm`
    max-width: 240px;
  `}
  ${down.md`
    max-width: 390px;
  `}
  ${down.lg`
    max-width: 586px;
  `}
  ${up.lg`
    max-width: 733px;
  `}
`

const MoreDetailsButton = styled.a`
  display: flex;
  align-items: center;
  align-self: center;
  text-transform: uppercase;  
  border: 2px solid ${props => props.theme.colors.text.secondary};
  line-height: 20px;
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${between('18px', '24px', '400px', '1920px')};
  ${fluidRange(
  {
    prop: 'padding',
    fromSize: '16px',
    toSize: '32px',
  },
  '400px',
  '1920px',
)}
  ${fluidRange(
  {
    prop: 'margin-top',
    fromSize: '40px',
    toSize: '80px',
  },
  '400px',
  '1920px',
)}
`

const StyledText = styled(Typography)`
  ${props => props.theme.typography.h1};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${between('24px', '92px', '400px', '1920px')};
  ${down.xs`
    font-size: 24px;
  `}
`

type Props = {
  text: string
  buttonText: string
  tv: GatsbySharpImage
}

const IndexFree = ({ text, buttonText, tv }: Props) => {
  const theme = useTheme()
  return (
    <Box
      as="section"
      display="flex"
      flexDirection={["column", null, null, "row", null]}
      alignItems="center"
      pt={theme.spacing[19]}
      pb={theme.spacing[11]}
      px={[theme.spacing[2], theme.spacing[4], null, null, 0]}
    >
      <Box
        width={["75%", null, null, "50%", null]}
        display="flex"
        justifyContent={["center", null, null, "flex-end", null]}
        flexShrink={0}
      >
        <StyledImg fluid={tv.childImageSharp.fluid} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        pl={[0, null, null, theme.spacing[10], theme.spacing[18]]}
        mt={[theme.spacing[8], null, null, 0, null]}
      >
        {/* <StyledText
          textAlign={["center", null, null, "left", null]}
          lineHeight="1.8em"
          color="black"
          as="h2"
          fontWeight="normal"
          fontSize={[
            "25px",
            "26px",
            "35px",
            ...theme.typography.sizes.h1.slice(3),
          ]}
          dangerouslySetInnerHTML={{ __html: text }}
        /> */}
        <StyledText
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <MoreDetailsButton
          href="https://mediflix.tv/client-space/sign-in"
          target="_blank"
          dangerouslySetInnerHTML={{ __html: buttonText }}
        />
      </Box>
    </Box>
  )
}

export default IndexFree
