import "styled-components"

export type BreakpointsAliases = "xs" | "sm" | "md" | "lg" | "xl" 
export type Breakpoints = Array<string> & Record<BreakpointsAliases, string>

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      main: string
      h1: string
      h2: string
      h3: string
      h4: string
      h5: string
      h6: string
      button1: string
      subtitle1: string
      expertsTagsText: string
      body1: string
      body2: string
      body3: string
      button2: string
      caption1: string
      caption2: string
      sizes: {
        h1: (string | null)[]
      }
    }
    colors: {
      blue: {
        main: string
        dark: string
        light: string
        footer: string
      }
      text: {
        primary: string
        secondary: string
        caption: string
      }
    }
    gradients: {
      light: string,
      dark: string
    }
    borderRadius: string
    spacing: string[]
    transitions: {
      create: (poperty: string) => string
    }
    zIndex: {
      modal: number
    }
    breakpoints: Breakpoints
  }
}
