import React from "react"
import styled from "styled-components"
import Box, { BoxProps } from "../Box"
import { up, down } from "../../styles/mixins"

export const BurgerButtonWidth = 44

const Button = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${BurgerButtonWidth}px;
  height: ${BurgerButtonWidth}px;
  outline: none;
  ${down.xs`
    justify-content: center;
  `}
`

const Item = styled.div`
  width: 44px;
  height: 5px;
  border: 1px solid white;
  background-color: white;
  ${down.xs`
    width: 30px;
    height: 4px;
    margin-top: 5px;
  `}
`

const BurgerButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & BoxProps
) => {

  return (
    <Button {...props} aria-label="Open Menu" as="button">
      <Item />
      <Item />
      <Item />
    </Button>
  )
}

export default BurgerButton
