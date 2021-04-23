import GatsbyImage from "gatsby-image"
import React from "react"
import { useTheme } from "styled-components"
import Box from "../../components/Box"
import { GatsbySharpImage } from "../../interfaces"
import AboutStoreLinks from "../About/AboutStoreLinks"
import ContactText from "./ContactText"
import ContactTitle from "./ContactTitle"

type Props = {
  title: string
  text: string
  apple: {
    link: string
    badge: GatsbySharpImage
  }
  google: {
    link: string
    badge: GatsbySharpImage
  }
  image: GatsbySharpImage
}

const ContactThroughApp = ({ title, text, apple, google, image }: Props) => {
  const theme = useTheme()
  return (
    <Box as="section" display="flex"  >
      <Box
        display="flex"
        flexDirection="column"
        ml={[null, null, null, "auto", null]}
        mr={[null, null, null, theme.spacing[8], theme.spacing[14]]}
        maxWidth={[null, null, null, "630px", null]}
        justifyContent="center"
        flexGrow={1}
      >
        <ContactTitle dangerouslySetInnerHTML={{ __html: title }} />
        <ContactText
          mt={[
            theme.spacing[6],
            theme.spacing[8],
            null,
            theme.spacing[12],
            null,
          ]}
          dangerouslySetInnerHTML={{ __html: text }}
        />

        <AboutStoreLinks apple={apple} google={google} mt={theme.spacing[8]} />
      </Box>
      <Box
        // maxWidth={381}
        flexShrink={0}
        width={{ default: "100%", xs: 230, sm: 289 }}
        maxWidth={289}
        display={["none", null, "initial", null, null]}
      >
        <GatsbyImage fluid={image.childImageSharp.fluid} />
      </Box>
    </Box>
  )
}


export default ContactThroughApp
