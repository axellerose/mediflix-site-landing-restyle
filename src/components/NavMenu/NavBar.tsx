import React from 'react'
import styled, { useTheme, css } from 'styled-components'
import Box, { BoxCSS, BoxProps } from "../Box"
import Menu from './Menu'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { ResponsiveLoginButton } from '../LoginButton'
import { up, down } from "../../styles/mixins"


export const Bar = styled.div<BoxProps>`
    padding: ${props => `${props.theme.spacing[4]} ${props.theme.spacing[5]}`};
    position: absolute;
    z-index: 999;
    top: ${props => `${props.theme.spacing[12]}`};
    right: ${props => `${props.theme.spacing[12]}`};
    left: ${props => `${props.theme.spacing[12]}`};
    
    ${BoxCSS}
    ${down.xs`
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
    `}
`

const NavBar = ({ logo, showBackground }: any) => {
    const BarWithBackground = styled(Bar)`
        ${showBackground && css`
            box-shadow: 0 0 25px rgba(0,0,0, 0.59);
            background-image: ${props => props.theme.gradients.light};
        `};
        ${down.xs`
            background-image: ${props => props.theme.gradients.light};
            
        `}
        
    `
    const theme = useTheme()
    return (
        <BarWithBackground >
            <Box
                pl={{ md: theme.spacing[6], lg: 0 }}
                display="flex"
                alignItems="center"
            >
                <Menu
                    flexShrink={0}
                    mr={[
                        theme.spacing[4],
                        theme.spacing[6],
                        null,
                        theme.spacing[12],
                        null,
                    ]}
                />
                <Box
                    flexGrow={1}
                    as={Link}
                    display="flex"
                    to="/"
                    maxWidth={{ default: 180, xs: 200, md: 367 }}
                    style={{ padding: "8px 0px 8px 20px" }}
                >
                    <Img
                        style={{ width: "100%" }}
                        fluid={logo.childImageSharp.fluid}
                        imgStyle={{ objectFit: "contain" }}
                    />
                </Box>
                <ResponsiveLoginButton
                    href="https://mediflix.tv/client-space/sign-in"
                    target="_blank"
                >
                    Login
              </ResponsiveLoginButton>
            </Box>
        </BarWithBackground>
    )
}

export default NavBar
