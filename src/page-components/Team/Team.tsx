import { graphql } from "gatsby"
import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styled from "styled-components"
import { Background } from "../../components/Background"
import ContentLimiter from "../../components/ContentLimiter"
import Footer from "../../components/Footer"
import Root from "../../components/Root"
import SEO from "../../components/seo"
import { down } from "../../styles/mixins"
import BaseTeamTab from "./BaseTeamTab"
import TeamMemberCard from "./TeamMemberCard"
import PageHeader from "../../components/PageHeader"

const TeamContent = styled.div`
  padding: 0 ${props => props.theme.spacing[45]};
  margin: 0 auto;

  ${down.lg`
      padding: 0 ${props => props.theme.spacing[5]};
  `}
  ${down.md`
    padding: 0 ${props => props.theme.spacing[3]};
    padding-right: ${props => props.theme.spacing[5]};
    `}
  ${down.xs`
    padding: 0 ${props => props.theme.spacing[3]};
  `}
`

const StyledTabsList = styled(TabList)`
  display: flex;
  padding-top: ${props => props.theme.spacing[10]};
  white-space: nowrap;
  overflow: auto;
  display: none;

  ${down.lg`
    justify-content: center;
  `}
  ${down.md`
    padding-left: ${props => props.theme.spacing[1]};
    padding-left: ${props => props.theme.spacing[1]};
    padding-bottom: ${props => props.theme.spacing[2]};
    justify-content: unset;
  `}
`

const StyledTab = styled(Tab)`
  position: relative;
  flex: 0 0 auto;
  border: 0;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  line-height: 66px;

  &.active {
    color: ${props => props.theme.colors.blue.main};
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);

      height: 2px;
      width: calc(100% + ${props => props.theme.spacing[1]});
      background-color: ${props => props.theme.colors.blue.main};
    }
  }

  & + & {
    margin-left: ${props => props.theme.spacing[12]};
  }

  ${down.md`
    & + & {
      margin-left: 0;
    }

    & {
      padding: 0 ${props => props.theme.spacing[4]};
    }
  `}
`

const Team = ({ data: { team, global } }: any) => {
  const page = team.edges[0].node.frontmatter

  return (
    <Root>
      <SEO title={page.seo.browserTitle} />
      <Tabs>
        <PageHeader
          logo={global.frontmatter.header.logo}
          paddingBottom={0}
          title={page.headline.title}
          subtitle={page.tabs.map((tab: any) => (
            <div>
              {tab.title}
            </div>
          ))}
        >
          <StyledTabsList>
            {page.tabs.map((tab: any) => (
              <StyledTab key={tab.title} selectedClassName="active">

              </StyledTab>
            ))}
          </StyledTabsList>
        </PageHeader>

        <Background as="main" shadow>
          <ContentLimiter>
            <TeamContent>
              {page.tabs.map((tab: any) => (
                <TabPanel key={tab.title}>
                  <BaseTeamTab title={tab.title}>
                    {tab.items.map((item: any, i: number) => (
                      <TeamMemberCard
                        key={i}
                        rev={(i + 1) % 2 === 0}
                        name={item.name}
                        description={item.text}
                        preview={item.preview.childImageSharp.fluid}
                        position={item.position}
                      />
                    ))}
                  </BaseTeamTab>
                </TabPanel>
              ))}
            </TeamContent>
          </ContentLimiter>
        </Background>
      </Tabs>
      <ContentLimiter>
        <Footer />
      </ContentLimiter>
    </Root>
  )
}

export const pageQuery = graphql`
  query TeamQuery {
    team: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Team" } } }
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
            tabs {
              title
              items {
                name
                position
                preview {
                  childImageSharp {
                    fluid(maxWidth: 590, quality: 90) {
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
      }
    }
  }
`

export default Team
