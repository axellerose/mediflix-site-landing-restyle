import GatsbyImage from "gatsby-image"
import React from "react"
import { useTheme } from "styled-components"
import Box, { BoxProps } from "../../components/Box"
import { GatsbySharpImage } from "../../interfaces"
import ContactText from "./ContactText"
import ContactTitle from "./ContactTitle"

type Props = BoxProps & {
  title: string
  text: string
  image: GatsbySharpImage
}

const ContactLiveChat = ({ title, text, image, ...boxProps }: Props) => {

  const theme = useTheme()
  return (
    <Box
      as="section"
      display="flex"
      flexDirection={["column", null, null, "row", null]}
      {...boxProps}
    >
      <Box
        width={{ default: "100%", xs: 230, sm: 289 }}
        maxWidth={289}
        mx={{ default: "auto", md: 0 }}
        flexShrink={0}
        mt={[theme.spacing[8], null, theme.spacing[12], 0, null]}
      >
        <GatsbyImage fluid={image.childImageSharp.fluid} />
      </Box>
      <Box
        order={[-1, null, null, 0, null]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flexGrow={1}
        maxWidth="606px"
        ml={[null, null, theme.spacing[4], theme.spacing[8], theme.spacing[16]]}
      >
        <ContactTitle dangerouslySetInnerHTML={{ __html: title }} />
        <ContactText
          textAlign="center"
          mt={[
            theme.spacing[6],
            theme.spacing[8],
            null,
            theme.spacing[12],
            null,
          ]}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Box>
    </Box>
  )
}

export default ContactLiveChat
