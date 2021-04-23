import styled from "styled-components"
import { down } from "../../styles/mixins"

const width = 48
const smWidth = 30
const CloseButton = styled.button`
  position: relative;
  outline: none;
  width: ${width}px;
  height: ${width}px;
  overflow: hidden;
  

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${Math.sqrt(2) * width}px;
    height: 1px;
    background-color: white;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  ${down.md`
    width: ${smWidth}px;
    height: ${smWidth}px;

    &::before,
    &::after {
      width: ${Math.sqrt(2) * smWidth}px;
    }
  `}
  
`

export default CloseButton
