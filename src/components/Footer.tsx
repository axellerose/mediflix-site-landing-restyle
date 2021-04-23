import { Link } from "gatsby"
import React from "react"
import styled, { useTheme } from "styled-components"
import { down, up } from "../styles/mixins"
import Box from "./Box"
import SvgFacebook from "./icons/Facebook"
import SvgInstagram from "./icons/Instagram"
import SvgTwitter from "./icons/Twitter"
import SvgYoutube from "./icons/Youtube"
import { Typography } from "./Typography"

const StyledRoot = styled(Box)`
  background-color: ${props => props.theme.colors.blue.footer};
  padding: ${props => props.theme.spacing[15]} ${props => props.theme.spacing[45]} ${props => props.theme.spacing[15]} ${props => props.theme.spacing[30]};
  ${down.lg`
  padding: ${props => props.theme.spacing[7]} ${props => props.theme.spacing[24]} ${props => props.theme.spacing[7]} ${props => props.theme.spacing[15]};
  `}
  ${down.sm`
  padding: ${props => props.theme.spacing[7]}
  `}
`

const StyledCopyright = styled(Typography)`
  ${props => props.theme.typography.caption2};
  color: ${props => props.theme.colors.text.primary};
  line-height: 14px;
  margin-top: 30px;
  ${down.lg`
    font-size: 12px;
  `}
  ${up.lg`
    font-size: 14px;
  `}

`

const StyledLink = styled(Link)`
  ${props => props.theme.typography.caption1}
  color: ${props => props.theme.colors.text.primary};
  text-transform: uppercase;
  line-height: 13px;

  &.active {
    color: ${props => props.theme.colors.text.secondary};
  }

  ${down.lg`
    font-size: 14px;
  `}
  ${up.lg`
    font-size: 16px;
  `}
`

const StyledNavListItem = styled.li`
  & + & {
    margin-left: ${props => props.theme.spacing[7]};
  }

  ${down.lg`
    & + & {
      margin-left: ${props => props.theme.spacing[3]};
    }
  `}

  ${down.md`
    & + & {
      margin-left: 0;
      margin-top: ${props => props.theme.spacing[1]}
    }
  `}
`

const SocialLink = styled.a`
  & svg path:not([fill]) {
    fill: ${props => props.theme.colors.text.secondary};
  }
`

const SocialListItem = styled.li`
  & + & {
    margin-left: ${props => props.theme.spacing[15]};
  }

  ${down.lg`
    & + & {
      margin-left: ${props => props.theme.spacing[6]};
    }
  `}
  ${down.md`
    & + & {
      margin-left: ${props => props.theme.spacing[3]};
      margin-top: ${props => props.theme.spacing[3]}
    }
  `}
`

const Footer = () => {
  const theme = useTheme()
  return (
    <StyledRoot
      as="footer"
      display="flex"
      alignItems="flex-start"
      // px={[theme.spacing[5], null, theme.spacing[6], null, theme.spacing[28]]}
      // pt={[theme.spacing[7], null, theme.spacing[13], null, null]}
      // pb={[theme.spacing[10], null, null, 0, null]}
      minHeight="132px"
    >
      <div>
        <nav>
          <Box
            as="ul"
            display="flex"
            flexDirection={["column", null, null, "row", null]}
          >
            <StyledNavListItem>
              <StyledLink to="/about" activeClassName="active">
                About
              </StyledLink>
            </StyledNavListItem>
            <StyledNavListItem>
              <StyledLink to="/team" activeClassName="active">
                Team
              </StyledLink>
            </StyledNavListItem>
            <StyledNavListItem>
              <StyledLink to="/contact-us" activeClassName="active">
                Contact Us
              </StyledLink>
            </StyledNavListItem>
            <StyledNavListItem>
              <StyledLink to="/terms" activeClassName="active">
                Terms & Conditions
              </StyledLink>
            </StyledNavListItem>
          </Box>
        </nav>
        <StyledCopyright>
          TM and © 2020 Mediflix. All Rights Reserved.
        </StyledCopyright>
      </div>
      <Box
        as="ul"
        display="flex"
        alignItems="center"

        ml="auto"
        flexDirection={["column", "row", "row", "row", null]}
      >
        <SocialListItem>
          <SocialLink>
            <SvgFacebook width="19" height="34" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink>
            <SvgTwitter width="34" height="27" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink>
            <SvgYoutube width="42" height="28" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink>
            <SvgInstagram width="32" height="31" />
          </SocialLink>
        </SocialListItem>
      </Box>
    </StyledRoot>
  )
}

export default Footer
