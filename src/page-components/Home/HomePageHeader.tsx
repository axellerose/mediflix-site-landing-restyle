import React, { PropsWithChildren } from "react"
import { between, fluidRange } from 'polished'
import { up, down } from "../../styles/mixins"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"
import { GatsbySharpImage } from "../../interfaces"
import Box, { BoxCSS, BoxProps } from "../../components/Box"
import NavBar from "../../components/NavMenu/NavBar"
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const Header = styled.header<BoxProps>`
  ${BoxCSS}
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${fluidRange(
  {
    prop: 'height',
    fromSize: '300px',
    toSize: '1080px',
  },
  '350px',
  '1920px',
)}`

export const Title = styled.h1`
  ${props => props.theme.typography.h1};
  color: ${props => `${props.theme.colors.text.primary}`};
  padding-left: 20vw;
  line-height: 62px;
  font-size: ${between('32px', '92px', '400px', '1920px')};
  ${down.xs`
    padding-left: 10vw;
  `}
`

export const ImgArrow = styled(Img)`
  
  ${down.lg`
    width: 60px;
    margin-bottom: 16px;
  `}
  ${up.lg`
    width: 95px;
    margin-bottom: 24px;
  `}
  ${down.xs`
    width: 40px;
    margin-bottom: 8px;
    
  `}
`

export const DescriptionText = styled.h6`
  ${props => `${props.theme.typography.h6}`}
  color: ${props => `${props.theme.colors.text.primary}`};
  padding-bottom: ${props => `${props.theme.spacing[6]}`};
  max-width: 75%;
  font-size: ${between('18px', '32px', '400px', '1920px')};
  ${down.xs`
    padding-bottom: 0;
    margin-left: auto;
  `}

`

type HomePageHeaderProps = BoxProps &
  PropsWithChildren<{
    logo: GatsbySharpImage,
    title: string,
    bgImage: GatsbySharpImage,
    displayDescription: boolean,
    arrowIcon: GatsbySharpImage
  }>

const HomePageHeader = ({
  children,
  logo,
  bgImage,
  title,
  displayDescription,
  arrowIcon,
  ...boxProps
}: HomePageHeaderProps) => {

  const backgroundFluidImageStack = [
    bgImage.childImageSharp.fluid,
    `linear-gradient( to right, rgba(2, 37, 57, 0.9), rgba(2, 37, 57, 0.72), rgba(2, 37, 57, 0.62), rgba(2, 37, 57, 0.22), rgba(6, 58, 34, 0))`
    // `linear-gradient( to right, rgba(2, 37, 57, 0.9), rgba(2, 37, 57, 0.22) 70%, rgba(2, 37, 57, 0) 70%)`
  ].reverse()

  return (
    <Box>
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        style={{ backgroundPosition: "top center" }}
      >
        <Header as="header" {...boxProps} >
          <NavBar logo={logo} showBackground={true} />
          <Box>
            <Title>
              {title}
            </Title>
          </Box>
          {displayDescription && <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "auto",
            width: "fit-content"
          }}
          >
            {/* Orange Arrow */}
            <Link to="/">
              <ImgArrow
                fluid={arrowIcon.childImageSharp.fluid}
              />
            </Link>
            <DescriptionText>Parkinson Desease Channel</DescriptionText>
          </Box>
          }

          {children}

        </Header>
      </BackgroundImage>

    </Box>
  )
}

export default HomePageHeader
