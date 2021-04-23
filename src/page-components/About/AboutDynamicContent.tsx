import { FluidObject } from "gatsby-image"
import React from "react"
import styled, { useTheme } from "styled-components"
import Box, { BoxProps } from "../../components/Box"
import { down } from "../../styles/mixins"
import AboutCard from "./AboutCard"

const StyledListItem = styled.li`
  & + & {
    margin-top: ${props => props.theme.spacing[25]};
  }
  & + & {
    ${down.sm`
      margin-top: ${props => props.theme.spacing[20]};
    `}
  }
`

type ContentItem = {
  title: string
  text: string
  preview: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

type Props = {
  items: ContentItem[]
} & BoxProps

const AboutDynamicContent = ({ items, ...boxProps }: Props) => {
  const theme = useTheme()
  return (
    <Box
      as="ul"
      py={[theme.spacing[14], null, theme.spacing[37], null, null]}
      {...boxProps}
    >
      {items.map((item, i: number) => (
        <StyledListItem key={i}>
          <AboutCard
            odd={(i + 1) % 2 === 0}
            title={item.title}
            html={item.text}
            preview={item.preview.childImageSharp.fluid}
          />
        </StyledListItem>
      ))}
    </Box>
  )
}

export default AboutDynamicContent
