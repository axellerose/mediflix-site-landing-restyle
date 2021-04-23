import GatsbyImage from "gatsby-image"
import React from "react"
import styled from "styled-components"
import Box, { BoxProps } from "../../components/Box"
import { GatsbySharpImage } from "../../interfaces"
import { down } from "../../styles/mixins"

const Button = styled.a`
  display: block;
  flex-grow: 1;
  max-width: 50%;
  max-height: 76px;

  & svg path {
    fill: #333975;
  }

  & .playIcon {
    margin-right: ${props => props.theme.spacing[5]};
  }

  & + & {
    margin-left: ${props => props.theme.spacing[4]};
  }

  ${down.md`
    width: 250px;
    max-width: unset;
    & + & {
      margin-left: 0;
      margin-top: ${props => props.theme.spacing[4]};
    }
  `}
`

const StyledImage = styled(GatsbyImage)`
  max-height: 100%;
  height: 107px;
  margin: 0 ${props => props.theme.spacing[2]};
  & img {
    object-position: center right !important;
    
  }
  &.second img {
    object-position: center left !important;
  }

  ${down.md`
    & img {
      object-position: center center !important;
    }
    &.second img {
      object-position: center center !important;
    }
  `}
`

type Props = {
  apple: {
    link: string
    badge: GatsbySharpImage
  }
  google: {
    link: string
    badge: GatsbySharpImage
  }
} & BoxProps

const AboutStoreLinks = ({ apple, google, ...rest }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection={["column", null, null, "row", null]}
      justifyContent="center"
      alignItems="center"
      {...rest}
    >
      <Button href={apple.link} target="_blank" rel="noreferrer noopener">
        <StyledImage
          fluid={apple.badge.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
      </Button>
      <Button href={google.link} target="_blank" rel="noreferrer noopener">
        <StyledImage
          className="second"
          fluid={google.badge.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
      </Button>
    </Box>
  )
}

export default AboutStoreLinks
