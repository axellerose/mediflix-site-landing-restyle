import { graphql } from "gatsby"
import React from "react"
import { Background } from "../../components/Background"
import ContentLimiter from "../../components/ContentLimiter"
import Footer from "../../components/Footer"
import HomePageHeader from "./HomePageHeader"
import Root from "../../components/Root"
import SEO from "../../components/seo"
import SignupSnackbar from "../../components/SignupSnackbar"
import IndexAppBlock from "./IndexAppBlock"
import IndexAvailable from "./IndexAvailable"
import IndexFree from "./IndexFree"
import IndexPatientCentric from "./IndexPatientCentric"

const Home = ({ data }: any) => {
  const { homePageData } = data
  const [edge] = homePageData.edges
  const {
    node: { frontmatter: home },
  } = edge

  return (
    <Root>
      <SEO title={home.seo.browserTitle} />
      <Background as="main">
        <ContentLimiter>
          <HomePageHeader
            logo={data.global.frontmatter.header.logo}
            title={home.intro.title}
            bgImage={home.header.background}
            displayDescription={true}
            arrowIcon={home.channelDescription.arrowIcon}
          />
          {/* <IndexIntro title={home.intro.title} background={home.header.background} description={"description"} logo={data.global.frontmatter.header.logo} launching={data.global.frontmatter.header.logo} /> */}
          <IndexPatientCentric text={home.patientCentric.text} />
          <IndexAppBlock {...home.appScreens} />
          <IndexFree {...home.free} />
          <IndexAvailable {...home.available} />
        </ContentLimiter>
        <Footer />
      </Background>



      <SignupSnackbar {...home.snackbar} />
    </Root>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Home" } } }
    ) {
      edges {
        node { 
          frontmatter {
            intro {
              title
              description
              background {
                childImageSharp {
                  fluid(maxWidth: 1440, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              logo {
                childImageSharp {
                  fluid(maxWidth: 443, quality: 90) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              launching {
                childImageSharp {
                  fluid(maxWidth: 277, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            channelDescription {
              arrowIcon{
                  childImageSharp {
                    fluid(maxWidth: 95, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            seo {
              browserTitle
              title
            }
            appScreens {
              background {
                childImageSharp {
                  fluid(
                    maxWidth: 1440
                    quality: 90
                    srcSetBreakpoints: [768, 1280, 1440]
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            patientCentric {
              text
            }
            free {
              text
              buttonText
              tv {
                childImageSharp {
                  fluid(
                    maxWidth: 531
                    maxHeight: 474
                    quality: 90
                    sizes: "(max-width: 550px) 100vw, 50vw"
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            available {
              title
              text
              devices {
                childImageSharp {
                  fluid(maxWidth: 654, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            snackbar {
              title
              placeholder
              termsText
              buttonText
              successText
              logo {
                childImageSharp {
                  fluid(maxWidth: 367, quality: 90) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            header {
              background{
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
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
              fluid(maxWidth: 367, quality: 90) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          # bgImage {
          #   childImageSharp {
          #     fluid(maxWidth: 2560, quality: 90) {
          #       ...GatsbyImageSharpFluid_noBase64
          #     }
          #   }
          # }
        }
      }
    }
  }
`

export default Home
