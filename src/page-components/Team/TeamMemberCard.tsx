import GatsbyImage, { FluidObject } from "gatsby-image"
import React from "react"
import styled, { useTheme } from "styled-components"
import Box from "../../components/Box"
import { Typography } from "../../components/Typography"
import { down } from "../../styles/mixins"

type TeamMemberCardProps = {
  preview: FluidObject
  name: string
  description: string
  position?: string
  rev?: boolean
}

const Root = styled(Box)`
  ${down.md`
    & + & {
      margin-top: ${props => props.theme.spacing[10]};
    }
  `}
`

const ImageWrapper = styled(Box)`
  ${down.md`
    display: none;
  `}
`

const TextImageWrapper = styled(Box)`
  display: none;
  ${down.md`
    display: initial;
  `}
`

const TextWrapper = styled.div<{ rev?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  padding-left: ${props => props.theme.spacing[14]};
  padding-right: ${props => props.theme.spacing[24]};
  width: 50%;

  ${props =>
    props.rev &&
    `
    order: -1;
  `}

  ${down.md`
    padding: ${props => `${props.theme.spacing[4]} ${props.theme.spacing[5]}`};
  `}

  ${down.sm`
    width: 100%;
  `}

  ${down.xs`
    padding: 0;
  `}
`
const StyledName = styled(Typography)`
  ${props => props.theme.typography.h3};
  font-size: 48px;
  line-height: 38px;
  ${down.lg`
    font-size: 26px;
  `}
`
const StyledPosition = styled(Typography)`
  ${props => props.theme.typography.h3};
  line-height: 32px;
  margin-top: ${props => props.theme.spacing[8]};
  ${down.lg`
    font-size: 20px;
  `}
`

const StyledDescription = styled(Typography)`
  ${props => props.theme.typography.body1}
  margin-top: ${props => props.theme.spacing[14]};
  ${down.lg`
    font-size: 18px;
  `}
`

const TeamMemberCard = ({
  name,
  position,
  description,
  preview,
  rev,
}: TeamMemberCardProps) => {
  const theme = useTheme()
  return (
    <Root display="flex" flexWrap={["wrap", null, null, null, "nowrap"]}>
      <ImageWrapper flexShrink={1} width="50%">
        <GatsbyImage fluid={preview} />
      </ImageWrapper>
      <TextWrapper rev={rev}>
        <StyledName
          dangerouslySetInnerHTML={{ __html: name }}
        />
        {position && (
          <StyledPosition
            dangerouslySetInnerHTML={{ __html: position }}
          />
        )}
        <TextImageWrapper flexShrink={0} width="250px" mt={theme.spacing[5]}>
          <GatsbyImage fluid={preview} />
        </TextImageWrapper>
        <StyledDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </TextWrapper>
    </Root>
  )
}

export default TeamMemberCard
