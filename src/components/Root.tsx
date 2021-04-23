import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"
import { theme } from "../styles/theme"

const Root = (props: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}

export default Root
