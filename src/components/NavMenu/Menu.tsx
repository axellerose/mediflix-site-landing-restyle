import React, { useCallback, useState } from "react"
import { BoxProps } from "../Box"
import BurgerButton from "./BurgerButton"
import NavMenu from "./NavMenu"

const Menu = (props: BoxProps) => {
  console.log("menu props", props)

  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(true)
  }, [])
  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false)
  }, [])
  return (
    <>
      <BurgerButton onClick={handleOpenMenu} {...props} />
      <NavMenu isOpen={openMenu} onRequestClose={handleCloseMenu} />
    </>
  )
}

export default Menu
