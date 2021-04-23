import React from "react"
import styled, { useTheme } from "styled-components"
import Box from "../../components/Box"
import SvgCall from "../../components/icons/Call"
import { down } from "../../styles/mixins"
import ContactText from "./ContactText"
import ContactTitle from "./ContactTitle"
import GatsbyImage from 'gatsby-image';
import { GatsbySharpImage } from '../../interfaces/index'
import Img from 'gatsby-image'

const Phone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.spacing[20]};

  color: ${props => props.theme.colors.text.secondary};
  font-size: 50px;

  & svg path {
    fill: ${props => props.theme.colors.text.secondary};
  }

  ${down.md`
    font-size: 40px;
  `}

  ${down.sm`
    font-size: 20px;
  `}

`

export const SmartphoneImage = styled(Img)`
  
  margin-left: auto;
  margin-right: auto;

`

type Props = {
  phone: string
  title: string
  image: GatsbySharpImage
  text: string
  className?: string
}

const ContactCallUs = ({ className, phone, title, text, image }: Props) => {
  const theme = useTheme()
  return (
    <Box as="section" className={className}>
      <ContactTitle dangerouslySetInnerHTML={{ __html: title }} />
      <ContactText
        mt={[theme.spacing[6], theme.spacing[8], null, theme.spacing[12], null]}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Phone>
        <Box
          mr={[
            theme.spacing[3],
            theme.spacing[5],
            null,
            theme.spacing[10],
            null,
          ]}
          width={["40px", "50px", "61px", null, null]}
        >
          <SmartphoneImage fluid={image.childImageSharp.fluid} />
        </Box>
        <p dangerouslySetInnerHTML={{ __html: phone }} />
      </Phone>
    </Box>
  )
}

export default ContactCallUs
