import React, { PropsWithChildren } from "react"
import { up, down } from "../styles/mixins"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"
import { GatsbySharpImage } from "../interfaces"
import Box, { BoxCSS, BoxProps } from "./Box"
import NavBar from "./NavMenu/NavBar"
import { Typography } from './Typography'
import { between, fluidRange } from 'polished'

export const Header = styled.header<BoxProps>`
  ${BoxCSS}
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100vw;
  background: ${props => props.theme.gradients.light};
  height: 361px;
  ${down.xs`
    height: 20vh;
  `}
`

export const Title = styled(Typography)`
  ${props => props.theme.typography.h3};
  color: ${props => `${props.theme.colors.text.primary}`};
  padding-left: 15vw;
  padding-bottom: 5vh;
  line-height: 62px;
  font-size: ${between('38px', '80px', '400px', '1920px')};
  ${down.xs`
    padding-bottom: 10px;
  `}
`

export const Subtitle = styled(Typography)`
  ${props => props.theme.typography.subtitle1};
  color: ${props => `${props.theme.colors.text.primary}`};
  line-height: 20px;
  text-transform: uppercase;
  width: fit-content;
  padding-bottom: 28px;
  border-bottom: 2px solid white;
  margin-left: 10vw;
  ${down.lg`
    font-size: 16px;
  `}
`

type PageHeaderProps = BoxProps &
  PropsWithChildren<{
    logo: GatsbySharpImage,
    title: string,
    subtitle?: any
  }>

const HomePageHeader = ({
  children,
  logo,
  title,
  subtitle,
  ...boxProps
}: PageHeaderProps) => {

  return (
    <>
      <Header as="header" {...boxProps}>
        <NavBar logo={logo} />
        <Box>
          <Title>
            {title}
          </Title>

        </Box>
        {subtitle && <Box width="100vw" display={["none", null, null, null, null]}>
          <Subtitle>{subtitle}</Subtitle>
        </Box>}
        {children}
      </Header>
    </>
  )
}

export default HomePageHeader
