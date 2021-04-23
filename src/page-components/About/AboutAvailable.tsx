import GatsbyImage from "gatsby-image"
import React, { ComponentProps } from "react"
import styled, { useTheme } from "styled-components"
import Box from "../../components/Box"
import { Typography } from "../../components/Typography"
import { GatsbySharpImage } from "../../interfaces"
import AboutStoreLinks from "./AboutStoreLinks"
import { up, down } from '../../styles/mixins';

// const BlueText = styled(Typography)`
//   color: ${props => props.theme.colors.blue.main};
// `

const StyledText = styled(Typography)`
  ${props => props.theme.typography.body1}
  font-weight: 300;
  & b,
  & strong {
    color: ${props => props.theme.colors.blue.main};
  }

  strong {
    font-weight: 400;
  }
  ${down.xl`
    font-size: 18px;
  `}
  ${up.xl`
    font-size: 28px;
  `}
`

type Props = ComponentProps<typeof Box> & {
  text: string
  apple: {
    link: string
    badge: GatsbySharpImage
  }
  google: {
    link: string
    badge: GatsbySharpImage
  }
  availableAt: Array<{
    icon: GatsbySharpImage
    alt: string
  }>
}

const AboutAvailable = ({
  text,
  apple,
  google,
  availableAt,
  ...boxProps
}: Props) => {
  const theme = useTheme()

  return (
    <Box
      as="section"
      pt={[theme.spacing[6], null, null, theme.spacing[14], theme.spacing[30]]}
      pb={[null, null, null, theme.spacing[14], theme.spacing[30]]}
      pr={[null, null, null, theme.spacing[24], theme.spacing[24]]}
      {...boxProps}
    >
      <StyledText
        px={[theme.spacing[4], null, null, 0, null]}
        // fontSize={["16px", null, null, "18px", "28px"]}

        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Box
        as="ul"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={theme.spacing[11]}
        width="100%"
        overflowX="auto"

        pb={theme.spacing[4]}
      >
        {availableAt.map((item, index: number) => (
          <Box
            flexGrow={1}
            key={index}
            display="flex"
            justifyContent="space-evenly"
            minWidth="130px"
          >
            <GatsbyImage
              alt={item.alt}
              imgStyle={{ objectFit: "contain" }}
              style={{ maxWidth: 100 }}
              fixed={item.icon.childImageSharp.fixed}
            />
          </Box>
        ))}
      </Box>
      <AboutStoreLinks
        apple={apple}
        google={google}
        mt={[theme.spacing[12], null, null, theme.spacing[25], null]}
      />
    </Box>
  )
}

export default AboutAvailable
