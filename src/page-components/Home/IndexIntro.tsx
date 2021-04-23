// IS NOT USED >> DELETE

import BackgroundImage from "gatsby-background-image"
import { default as Img } from "gatsby-image"
import React from "react"
import styled, { useTheme } from "styled-components"
import Box from "../../components/Box"
import Menu from "../../components/NavMenu/Menu"
import { Header } from "./HomePageHeader"
import { Typography } from "../../components/Typography"
import { GatsbySharpImage } from "../../interfaces"

const StyledBackgroundSection = styled(BackgroundImage).attrs({
  Tag: "section",
})`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const StyledHeader = styled(Header)`
  background-color: transparent;
`

type Props = {
  title: string
  description: string
  background: GatsbySharpImage
  logo: GatsbySharpImage
  launching: GatsbySharpImage
}

const IndexIntro = ({
  title,
  description,
  background,
  logo,
  launching,
}: Props) => {
  const theme = useTheme()
  return (
    <StyledBackgroundSection fluid={background.childImageSharp.fluid}>
      <StyledHeader display="flex" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          pl={{ md: theme.spacing[6], lg: 0 }}
        >
          <Menu mr={theme.spacing[12]} />
        </Box>
        <Typography
          mt={[theme.spacing[13]]}
          mb={theme.spacing[7]}
          ml={[0, theme.spacing[4], null, theme.spacing[10], null]}
          as="h1"
          fontSize={theme.typography.sizes.h1}
          fontWeight="bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <Box width={{ default: 300, md: 443 }} maxWidth="100%">
          <Img
            style={{ maxWidth: "100%" }}
            fluid={logo.childImageSharp.fluid}
          />
        </Box>
        <Typography
          mt={theme.spacing[10]}
          ml={[0, theme.spacing[4], null, theme.spacing[10], null]}
          fontSize={theme.typography.sizes.h1}
          fontWeight="500"
          maxWidth="918px"
          lineHeight="1.8"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Box
          mt={[theme.spacing[15], null, theme.spacing[30], null, null]}
          display="flex"
          justifyContent={["center", "flex-end"]}
        >
          <Box flexShrink={0} width={277} maxWidth="100%">
            <Img fluid={launching.childImageSharp.fluid} />
          </Box>
        </Box>
      </StyledHeader>
    </StyledBackgroundSection>
  )
}

export default IndexIntro
