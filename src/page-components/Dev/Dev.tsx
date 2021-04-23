import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import styled, { useTheme } from "styled-components"
import { Background } from "../../components/Background"
import Box from "../../components/Box"
import Root from "../../components/Root"
import SEO from "../../components/seo"
import { Typography } from "../../components/Typography"
import { down, pxPlusOne } from "../../styles/mixins"

const StyledBackground = styled(Background)`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const StyledImage = styled(GatsbyImage)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  width: 52%;
  max-width: 750px;

  &::before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 100%;
  }

  &::after {
    /* to clear float */
    content: "";
    display: table;
    clear: both;
  }

  text-align: center;
  background-color: ${props => props.theme.colors.blue.main};

  @media (max-width: ${props =>
    pxPlusOne(props.theme.breakpoints.lg)}) and (orientation: portrait) {
    width: 75%;
  }

  @media (max-width: ${props =>
    pxPlusOne(props.theme.breakpoints.lg)}) and (orientation: landscape) {
    width: 60%;
    max-width: 90vh;
  }

  @media(max-width: ${props =>
    pxPlusOne(
      props.theme.breakpoints.lg
    )}) and (max-height: 420px) and (orientation: landscape) and (min-width: 700px) {
    
    max-width: unset;
    width: 80%;
    height: 95%;
    &::before, &::after {
      content: none;
    }
  }


  @media (max-width: ${props =>
    pxPlusOne(props.theme.breakpoints.md)}) and (orientation: portrait) {
    width: 94%;
  }

  /* ${down.lg`
    width: 60%;
  `} */
`

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

const Logo = styled(GatsbyImage)`
  width: 45%;
  margin: 0 auto;

  ${down.md`
    width: 60%;
  `}
`

const Dev = ({ data: { dev: devData, background, logo } }: any) => {
  const theme = useTheme()
  const dev = devData.edges[0].node.frontmatter
  return (
    <>
      <SEO title={dev.seo.browserTitle} />
      <StyledBackground as="main">
        <StyledImage fluid={background.childImageSharp.fluid} />
        <ContentWrapper>
          <Content padding={{ xs: theme.spacing[4], md: theme.spacing[10] }}>
            <Logo fluid={logo.childImageSharp.fluid} />
            <Typography
              mt={{
                default: theme.spacing[4],
                xs: theme.spacing[6],
                md: theme.spacing[15],
                lg: theme.spacing[20],
              }}
              as="h1"
              fontWeight="300"
              fontSize={{ default: "23px", xs: "28px", md: "40px", lg: "60px" }}
            >
              <Typography as="span" fontWeight="500">
                Under
              </Typography>{" "}
              Development
            </Typography>
            <Typography
              fontSize={{ default: "18px", xs: "20px", md: "30px", lg: "35px" }}
              lineHeight="1.5"
              mt={{
                default: theme.spacing[3],
                xs: theme.spacing[6],
                md: theme.spacing[15],
                lg: theme.spacing[21],
              }}
              fontWeight={{ md: "300", default: "400" }}
            >
              Thank you for visiting. <br /> Our new website launches July 2020.
            </Typography>
          </Content>
        </ContentWrapper>
      </StyledBackground>
    </>
  )
}

export const pageQuery = graphql`
  query DevPageQuery {
    dev: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Dev" } } }
    ) {
      edges {
        node {
          frontmatter {
            seo {
              browserTitle
            }
          }
        }
      }
    }
    background: file(relativePath: { eq: "index-intro-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "logo-transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 452, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default (props: any) => {
  return (
    <Root>
      <Dev {...props} />
    </Root>
  )
}
