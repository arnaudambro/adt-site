import React from "react"
import styled, { css } from "styled-components"
import { media } from "../styles/mediaQueries"

const welcomePageCss = css`
  position: absolute;
  left: 12.5vw;
  bottom: 30vh;
  width: ${({ theme }) => theme.width.logo}px;
  height: ${({ theme }) => theme.height.logo}px;
  ${media.desktop`
    left: 14vw;
    bottom: 15vh;
    width: ${({ theme }) => theme.width.desktop.logo}px;
    height: ${({ theme }) => theme.height.desktop.logo}px;
  `}
`

const normalCss = css`
  width: ${({ theme }) => theme.width.logo * 0.75}px !important;
  height: ${({ theme }) => theme.height.logo * 0.75}px !important;
`

const Svg = styled.svg`
  ${props => (props.welcomePage ? welcomePageCss : normalCss)}
`

const Logo = ({ color = "white", welcomePage = false }) => (
  <Svg
    welcomePage={welcomePage}
    width="120"
    height="57"
    viewBox="0 0 120 57"
    fill="none"
  >
    <path
      d="M26.1478 39.9705H6.18701L1.65174 57H0L15.2576 0H17.1053L32.3628 57H30.7111L26.1478 39.9705ZM6.74692 37.8565H25.5879L16.1814 2.54464L6.74692 37.8565Z"
      fill={color}
    />
    <path
      d="M47.542 57V0H58.8242C61.9783 0 64.8339 1.04396 67.3908 3.13187C69.9477 5.21978 71.9541 8.15591 73.4099 11.9402C74.8656 15.6985 75.6122 19.9135 75.6495 24.5852V31.9842C75.6495 36.7342 74.9309 41.0144 73.4938 44.8249C72.0754 48.6353 70.0877 51.6106 67.5308 53.7507C64.9739 55.8908 62.1183 56.9739 58.9642 57H47.542ZM49.0538 2.11401V54.886H58.8242C61.6797 54.886 64.274 53.9203 66.6069 51.989C68.9586 50.0316 70.7969 47.3173 72.1221 43.8462C73.4472 40.3489 74.1191 36.4732 74.1377 32.2191V24.8984C74.1377 20.6442 73.4845 16.7816 72.1781 13.3104C70.8903 9.83929 69.0799 7.125 66.7469 5.16758C64.4326 3.18407 61.8664 2.16621 59.0482 2.11401H49.0538Z"
      fill={color}
    />
    <path
      d="M120 2.11401H105.162V57H103.651V2.11401H88.813V0H120V2.11401Z"
      fill={color}
    />
  </Svg>
)

export default Logo
