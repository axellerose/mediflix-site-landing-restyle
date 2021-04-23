import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Background } from "../../components/Background"
import ContentLimiter from "../../components/ContentLimiter"
import Footer from "../../components/Footer"
import Root from "../../components/Root"
import SEO from "../../components/seo"
import { down } from "../../styles/mixins"
import AboutAvailable from "./AboutAvailable"
import AboutDynamicContent from "./AboutDynamicContent"
import PageHeader from "../../components/PageHeader"


const AboutContent = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.spacing[10]} ${props => props.theme.spacing[71]};
${down.lg`
    padding-left: ${props => props.theme.spacing[10]};
    padding-right: ${props => props.theme.spacing[10]};
    `}
${down.md`
    padding-left: 0;
    padding-right: 0;
  `}
${down.xl`
    padding: 0 10%;
  `}
`

const About = ({ data: { about: page, global } }: any) => {
  const about = page.edges[0].node.frontmatter
  return (
    <Root>
      <SEO title="About Service" />
      <Background as="main" shadow>
        <ContentLimiter>
          <PageHeader title={about.headline.title} logo={global.frontmatter.header.logo} />
          <AboutContent>
            <AboutAvailable
              apple={global.frontmatter.appLinks.apple}
              google={global.frontmatter.appLinks.google}
              text={about.headline.text}
              availableAt={about.availableAt}
            />
            <AboutDynamicContent items={about.content} />
          </AboutContent>
        </ContentLimiter>
      </Background>
      <Footer />
    </Root>
  )
}

export const pageQuery = graphql`
query AboutQuery {
  about: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "About" } } }
  ) {
    edges {
      node {
        frontmatter {
          headline {
            title
            text
          }
          availableAt {
            icon {
              childImageSharp {
                fixed(quality: 90) {
                    ...GatsbyImageSharpFixed
                }
              }
            }
            alt
          }
          seo {
            browserTitle
            title
          }
          content {
            title
            preview {
              childImageSharp {
                fluid(maxWidth: 672, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
  global: markdownRemark(frontmatter: { templateKey: { eq: "global" } }) {
    frontmatter {
      header {
        logo {
          childImageSharp {
            fluid(maxWidth: 251, quality: 90) {
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      appLinks {
        apple {
          link
          badge {
            childImageSharp {
              fluid(maxHeight: 107, quality: 90) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
        google {
          link
          badge {
            childImageSharp {
              fluid(maxHeight: 76, quality: 90) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`

export default About
