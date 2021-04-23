import GatsbyImage, { FluidObject } from "gatsby-image"
import React from "react"
import styled, { useTheme } from "styled-components"
import Box from "../../components/Box"
import { Typography } from "../../components/Typography"
import { down } from "../../styles/mixins"

type AboutCardProps = {
  preview: FluidObject
  html: string
  title: string
  odd?: boolean
  className?: string
}

const StyledTitle = styled(Typography)`
  ${props => props.theme.typography.h2};
  line-height: 53px;
  flex-grow: 1;
  margin-left: ${props => props.theme.spacing[20]};

  ${down.lg`
    margin-left: ${props => props.theme.spacing[6]};
  `}

  ${down.xl`
    font-size: 28px;
  `}

  &.odd {
    order: -1;
    margin-left: 0;
    margin-right: ${props => props.theme.spacing[15]};

    ${down.lg`
      margin-right: ${props => props.theme.spacing[6]};
    `}
  }

  ${down.sm`
    &, &.odd {
      margin: 0;
      margin-bottom: ${props => props.theme.spacing[6]};
    }

    width: 100%;
    
    
    order: -1;
  `}
`

const StyledText = styled(Typography)`
  ${props => props.theme.typography.body1}

  ${down.xl`
    font-size: 24px;
  `}
  ${down.xl`
    font-size: 24px;
  `}
`

const AboutCard = ({
  preview,
  html,
  title,
  odd,
  className,
}: AboutCardProps) => {
  const theme = useTheme()
  return (
    <Box px={[theme.spacing[4], null, null, 0, null]} className={className}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={["column", null, "row", null, null]}
      >
        <Box width={["100%", null, "50%", null, null]} flexShrink={0}>
          <GatsbyImage fluid={preview} />
        </Box>
        <StyledTitle

          className={odd ? "odd" : undefined}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Box>
      <StyledText
        width={["100%", null, "50%", null, null]}
        dangerouslySetInnerHTML={{ __html: html }}
        mt={[theme.spacing[4], null, theme.spacing[9], null, null]}
        ml={odd ? "auto" : undefined}
      />
    </Box>
  )
}

export default AboutCard
