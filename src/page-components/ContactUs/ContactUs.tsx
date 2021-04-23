import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Background } from "../../components/Background"
import ContentLimiter from "../../components/ContentLimiter"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import Root from "../../components/Root"
import SEO from "../../components/seo"
import { down } from "../../styles/mixins"
import ContactCallUs from "./ContactCallUs"
import ContactLiveChat from "./ContactLiveChat"
import ContactThroughApp from "./ContactThroughApp"

const Content = styled.div`
  max-width: 50%;
  margin: 0 auto;
  padding: ${props =>
    `${props.theme.spacing[22]} ${props.theme.spacing[10]} ${props.theme.spacing[37]} ${props.theme.spacing[10]}`};
  ${down.md`
    max-width: 80%;
    padding: ${props =>
      `${props.theme.spacing[12]} ${props.theme.spacing[4]} ${props.theme.spacing[20]} ${props.theme.spacing[8]}`};
  `}

  ${down.sm`
    padding: ${props =>
      `${props.theme.spacing[11]} ${props.theme.spacing[4]} ${props.theme.spacing[10]} ${props.theme.spacing[4]}`};
  `}
`

const StyledLiveChat = styled(ContactLiveChat)`
  margin-top: ${props => props.theme.spacing[32]};
  ${down.md`
    margin-top: ${props => props.theme.spacing[18]};
  `}
`

const ContactCallUsStyled = styled(ContactCallUs)`
  margin-top: ${props => props.theme.spacing[32]};
  font-size: 68px;
  font-family: 'Nunito';
  ${down.md`
    margin-top: ${props => props.theme.spacing[18]};
  `}
`
6
const ContactUs = ({ data: { contact, about, global } }: any) => {
  const contactUs = contact.edges[0].node.frontmatter
  return (
    <Root>
      <SEO title="Contact Us" />
      <ContentLimiter>
        <PageHeader logo={global.frontmatter.header.logo} title={contactUs.headline.title} />
      </ContentLimiter>
      <Background as="main" shadow>
        <ContentLimiter>
          <Content>
            <ContactThroughApp
              title={contactUs.contactThroughApp.title}
              text={contactUs.contactThroughApp.text}
              apple={global.frontmatter.appLinks.apple}
              google={global.frontmatter.appLinks.google}
              image={contactUs.contactThroughApp.image}
            />
            <StyledLiveChat {...contactUs.liveChat} />
            <ContactCallUsStyled
              {...contactUs.callUsNumber}
              phone={contactUs.phone}
              image={contactUs.smartphoneImage}
            />
          </Content>
        </ContentLimiter>
      </Background>
      <ContentLimiter>
        <Footer />
      </ContentLimiter>
    </Root>
  )
}

export const pageQuery = graphql`
  query ContactUsQuery {
    contact: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "ContactUs" } } }
    ) {
      edges {
        node {
          frontmatter {
            headline {
              title
            }
            seo {
              browserTitle
            }
            phone
            smartphoneImage {
                  childImageSharp {
                    fluid(quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            contactThroughApp {
              title
              text
              image {
                childImageSharp {
                  fluid(maxWidth: 381, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            liveChat {
              title
              text
              image {
                childImageSharp {
                  fluid(maxWidth: 394, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            callUsNumber {
              title
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
                fluid(maxHeight: 76, quality: 90) {
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

export default ContactUs
