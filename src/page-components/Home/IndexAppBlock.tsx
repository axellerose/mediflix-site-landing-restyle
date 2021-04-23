import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { GatsbySharpImage } from "../../interfaces"
import { down } from "../../styles/mixins"

const StyledImage = styled(Img)`
  position: relative;
  z-index: 2;
  ${down.sm`
    & > div {
      min-height: 60vh;
      z-index: 1;
    }
  `}
`

type Props = {
  background: GatsbySharpImage
}

const IndexAppBlock = ({ background }: Props) => {
  return <StyledImage fluid={background.childImageSharp.fluid} />
}

export default IndexAppBlock
