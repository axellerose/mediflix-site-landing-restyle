import styled from "styled-components"

export const Background = styled.div<{ shadow?: boolean }>`
  background-image: ${props => `${props.theme.gradients.dark}`};
  ${props =>
    props.shadow &&
    `
    box-shadow: inset 0px 90px 90px -90px rgba(0,0,0,0.05);
  `}
`
