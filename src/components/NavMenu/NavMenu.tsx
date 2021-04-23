import { Link } from "gatsby"
import React, { ComponentProps } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import { down } from "../../styles/mixins"
import ReactModalAdapter from "../ReactModalAdapter"
import CloseButton from "./CloseButton"

Modal.setAppElement("#___gatsby")

type ModalProps = ComponentProps<typeof Modal>
type MenuProps = Pick<ModalProps, "isOpen" | "onRequestClose">

const StyledModal = styled(ReactModalAdapter) <ModalProps>`
  &__overlay {
    position: fixed;
    z-index: 3;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    background: ${props => props.theme.gradients.dark};

    opacity: 0;
    transition: ${props => props.theme.transitions.create("opacity")};
    &.ReactModal__Overlay--after-open {
      opacity: 1;
    }
    &.ReactModal__Overlay--before-close {
      opacity: 0;
    }
  }
  &__content {
    display: flex;
    align-items: center;
    height: 100%;
  }
`

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  left: ${props => props.theme.spacing[27]};
  top: ${props => props.theme.spacing[12]};
  &[aria-label]:after{
    color: white;
  }
  ${down.md`
    left: auto;
    right: ${props => props.theme.spacing[6]};
    top: ${props => props.theme.spacing[8]};
  `}
  ${down.xs`
    top: ${props => props.theme.spacing[25]};
  `}
`

const StyledListItem = styled.li`
  & + & {
    margin-top: ${props => props.theme.spacing[13]};
  }
`

const StyledLink = styled(Link)`
  ${props => props.theme.typography.h3}
  line-height: 1;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text.primary};
  line-height: 28px;

  &.active {
    color: ${props => props.theme.colors.text.secondary};
  }

  ${down.md`
    font-size: 24px;
  `}
`

const StyledList = styled.ul`
  margin-left: 25%;

  ${down.md`
    margin-left: auto;
    margin-right: auto;
  `}
`

const NavMenu = (modalProps: MenuProps) => {
  return (
    <StyledModal {...(modalProps as any)} closeTimeoutMS={300}>
      <StyledCloseButton
        onClick={modalProps.onRequestClose}
        aria-label="close"
      />
      <StyledList>
        <StyledListItem>
          <StyledLink to="/about" activeClassName="active">
            About
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/team" activeClassName="active">
            Team
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/contact-us" activeClassName="active">
            Contact Us
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/#" activeClassName="active">
            Terms & Conditions{" "}
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledModal>
  )
}

export default NavMenu
