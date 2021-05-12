import React from "react"
import styled, { css } from "styled-components"
import { media } from "../styles/mediaQueries"

const Container = styled.div`
  font-family: Roboto;
  font-weight: 100;
  font-size: ${({ theme }) => theme.height.logoFont}px;
  transform: scaleY(1.5);
  color: ${props => props.color};
  flex-shrink: 0;

  position: absolute;
  left: 12.5vw;
  bottom: 30vh;
  width: ${({ theme }) => theme.width.logo}px;
  height: ${({ theme }) => theme.height.logo}px;

  ${media.desktop`
    left: 14vw;
    bottom: 15vh;
    font-size: ${({ theme }) => theme.height.desktop.logoFont}px;
    width: ${({ theme }) => theme.width.desktop.logo}px;
    height: ${({ theme }) => theme.height.desktop.logo}px;
  `}
  ${props => props.withBar && barCss}
`

const barCss = css``

const Logo = ({ color = "white", withBar = false }) => {
  return (
    <Container color={color} withBar={withBar}>
      ADT
    </Container>
  )
}

export default Logo
