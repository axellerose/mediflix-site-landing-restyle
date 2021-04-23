import { DefaultTheme } from "styled-components"
import { Breakpoints, BreakpointsAliases } from "../types/sc"

const spacing: string[] = []

export const breakpoints: string[] = [
  "415px",
  "768px",
  "1366px",
  "1920px",
  "2560px"
]
export const breakpointsAliases: BreakpointsAliases[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
]

const themeBreakpoints = breakpoints as Breakpoints
themeBreakpoints.xs = breakpoints[0]
themeBreakpoints.sm = breakpoints[1]
themeBreakpoints.md = breakpoints[2]
themeBreakpoints.lg = breakpoints[3]
themeBreakpoints.xl = breakpoints[4]

for (let i = 1; i <= 100; i++) {
  spacing[i] = `${i * 4}px`
}
spacing[0] = "0px"

export const theme: DefaultTheme = {
  typography: {
    
    main: `
      font-family: 'Raleway', sans-serif;
      font-size: 14px;
      color: #FFFFFF;
    `,
    h1: `
      font-family: 'Raleway', sans-serif;
      font-size: 92px;
      font-weight: 700; 
    `,
    h2: `
      font-family: 'Raleway', sans-serif;
      font-size: 70px;
      font-weight: 400;
    `,
    h3: `
      font-family: 'Raleway', sans-serif;
      font-size: 36px;
      font-weight: 500;
    `,
    h4: `
      font-family: 'Raleway', sans-serif;
      font-size: 32px;
      font-weight: 700;
    `,
    h5: `
      font-family: 'Raleway', sans-serif;
      font-size: 32px;
      font-weight: 400;
    `,
    h6: `
      font-family: 'Raleway', sans-serif;
      font-size: 28px;
      font-weight: 700;
    `,
    button1: `
    font-family: 'Raleway', sans-serif;
    font-size: 28px;
    font-weight: 700;
  `,
    subtitle1: `
      font-family: 'Raleway', sans-serif;
      font-size: 24px;
      font-weight: 400;
    `,
    expertsTagsText: `
      font-family: 'Raleway', sans-serif;
      font-size: 20px;
      font-weight: 600;
    `,
    body1: `
      font-family: 'Nunito', sans-serif;
      font-size: 24px;
      font-weight: 300;
    `,
    body2: `
      font-family: 'Nunito', sans-serif;
      font-size: 18px;
      font-weight: 300;
    `,
    body3: `
      font-family: 'Nunito', sans-serif;
      font-size: 16px;
      font-weight: 300;
    `,
    button2: `
      font-family: 'Raleway', sans-serif;
      font-size: 28px;
      font-weight: 700;
    `,
    caption1: `
      font-family: 'Raleway', sans-serif;
      font-size: 16px;
      font-weight: 400;
    `,
    caption2: `
      font-family: 'Nunito', sans-serif;
      font-size: 14px;
      font-weight: 300; 
    `,
    sizes: {
      h1: ["25px", "30px", "40px", "40px", "50px"],
    },

  },
  colors: {
    blue: {
      main: "#052C43",
      dark: "#042A40",
      light: "#698091",
      footer: "#031F2D"
    },
    text: {
      primary: "white",
      secondary: "#FB991A",
      caption: "rgba(50, 50, 50, 0.5)",
    },
  },
  gradients: {
    light: "linear-gradient(to right, #698091, #042A40)",
    dark: "linear-gradient(to right, #042A40, #02181F)",
  },
  borderRadius: "5px",
  spacing,
  transitions: {
    create: property => `${property} 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  },
  zIndex: {
    modal: 1000,
  },
  breakpoints: themeBreakpoints,
}
