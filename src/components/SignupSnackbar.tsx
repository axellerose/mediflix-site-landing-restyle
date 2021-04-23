import GatsbyImage from "gatsby-image"
import React, { useCallback, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import styled, { useTheme } from "styled-components"
import { GatsbySharpImage } from "../interfaces"
import { down, up } from "../styles/mixins"
import { rafDebounce } from "../utils/rafDebounce"
import Box from "./Box"
import ContentLimiter from "./ContentLimiter"
import LoginButton from "./LoginButton"
import { Typography } from "./Typography"

const elementName = "snackbar"

const Root = styled(ContentLimiter)`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: ${props => props.theme.spacing[4]};

  transition: ${props => props.theme.transitions.create("transform")};

  transform: translate(-50%, 120%);

  &.${elementName}-enter {
    transform: translate(-50%, 120%);
  }
  &.${elementName}-enter-active {
    transform: translate(-50%);
  }
  &.${elementName}-enter-done {
    transform: translate(-50%, 0);
  }

  &.${elementName}-exit-active {
    transform: translate(-50%, 120%);
  }
  &.${elementName}-exit {
    transform: translate(-50%, 0);
  }
  &.${elementName}-exit-done {
    transform: translate(-50%, 120%);
  }

  ${down.xs`
    right: 0;
    bottom: 0;
  
  `}
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing[2]} 0;
  padding-left: ${props => props.theme.spacing[6]};
  padding-right: ${props => props.theme.spacing[12]};
  width: 90%;
  margin: 0 auto;
  height: 121px;
  background: ${props => props.theme.gradients.light};

  ${down.lg`
    padding: ${props => props.theme.spacing[2]};
    padding-right: ${props => props.theme.spacing[3]};
    padding-left: ${props => props.theme.spacing[4]};
    `}

  ${down.sm`
    padding: ${props => props.theme.spacing[3]};
    height: fit-content;
    width: 100%;
    
  `}

  ${down.xs`
    width: 100%;
    border-radius: 5px;
    padding: 25px;
  `}
`

const StyledTitle = styled(Typography)`
  ${props => props.theme.typography.h3};
  color: ${props => props.theme.colors.text.primary};
  margin: 0 auto;
  ${up.lg`
    font-size: 28px;
  `}
  ${up.xl`
    font-size: 36px;
  `}
`

const Input = styled.input`
  ${props => props.theme.typography.body2}
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0 ${props => props.theme.spacing[4]};
  margin-right: ${props => props.theme.spacing[6]};
  min-width: 0;
  border-radius: ${props => props.theme.borderRadius};
  background: transparent;
  border: 1px solid white;
  color: white;
  line-height: 22px;
  
  &::placeholder{
    color: white;
  }

  ${up.lg`
    font-size: 14px;
  `}

  ${down.sm`
    font-size: 16px;
    margin-right: ${props => props.theme.spacing[3]};
  `}
  ${down.xs`
    margin-right: 0;
    height: 40px;
    margin-bottom: 15px;
  `}
`

const StyledButton = styled(LoginButton)`
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  color: ${props => props.theme.colors.text.primary};
  background-color: ${props => props.theme.colors.text.secondary};
  ${down.sm`
    padding: ${props => `${props.theme.spacing[3]} ${props.theme.spacing[3]}`};
    font-size: 16px;
  `}
  ${down.xs`
    padding-top: ${props => props.theme.spacing[2]};
    padding-bottom: ${props => props.theme.spacing[2]};
    margin-bottom: 10px;
  `}
`

const StyledTermsText = styled(Typography)`
  ${props => props.theme.typography.caption2}
  color: ${props => props.theme.colors.text.primary};
  & a {
    color: ${props => props.theme.colors.text.primary};
    text-decoration: underline;
  }
`

const StyledLogo = styled(GatsbyImage)``

type Props = {
  title: string
  placeholder: string
  termsText: string
  buttonText: string
  successText: string
  logo: GatsbySharpImage
}

const SignupSnackbar = ({
  title,
  placeholder,
  termsText,
  buttonText,
  successText,
  logo,
}: Props) => {
  const [top, setTop] = useState(true)
  const [bottom, setBottom] = useState(false)

  const [submitted, setSubmitted] = useState(false)

  const scrollCallback = useCallback(() => {
    setTop(window.scrollY === 0)
    setBottom(
      window.scrollY + window.innerHeight >= document.body.scrollHeight - 100
    )
  }, [])

  useEffect(() => {
    const callback = rafDebounce(scrollCallback)
    document.addEventListener("scroll", callback, {
      passive: true,
    })
    return () => document.removeEventListener("scroll", callback)
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }, [])

  const theme = useTheme()
  return (
    <CSSTransition classNames={elementName} in={!top && !bottom} timeout={300}>
      <Root>
        <Content>
          <Box
            display={{ default: "none", md: "flex" }}
            alignItems={["center", null, null, null, "center"]}
            flexDirection={["column", "row", "row", null, "row"]}
            flexGrow={1}
          >
            <Box width={{ default: 200, lg: 363 }}>
              <GatsbyImage
                fluid={logo.childImageSharp.fluid}
                imgStyle={{ objectFit: "contain" }}
              />
            </Box>
            <StyledTitle
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Box>


          {
            <Box flexShrink={1} width={["100%", null, null, "auto", "45%"]}>
              <Box
                display="flex"
                as="form"
                onSubmit={handleSubmit}
                flexDirection={{ default: "column", xs: "row" }}
              >
                {!submitted ? (
                  <>
                    <Input
                      placeholder="Enter email for updates"
                      required
                      type="email"
                    />
                    <StyledButton
                      as="button"
                      type="submit"
                      flexShrink={0}
                      mx={{ default: "auto", xs: 0 }}
                      mt={{ default: theme.spacing[1], xs: 0 }}
                      width={{ default: "100%", xs: "auto" }}
                      dangerouslySetInnerHTML={{ __html: buttonText }}
                    />
                  </>
                ) : (
                    <Typography
                      dangerouslySetInnerHTML={{ __html: successText }}
                      fontSize="26px"
                    />
                  )}
              </Box>
              <StyledTermsText
                fontSize="10px"
                color="black"
                mt={theme.spacing[2]}
                dangerouslySetInnerHTML={{ __html: termsText }}
              />
            </Box>}
        </Content>
      </Root>
    </CSSTransition>
  )
}

export default SignupSnackbar
