import React from "react"
import styled, { keyframes } from "styled-components"
import SEO from "./seo"
import Img from "gatsby-image/withIEPolyfill"

import { getImageFromSrc } from "../helpers/selectors"
import logo from "../images/logo.svg"
import { media } from "../styles/mediaQueries"
import { Link } from "gatsby"
import { projets } from "../reference/pages"
import { background, gatsbyImage } from "../styles/mixins"
import useLargeImages from "../helpers/hooks/useLargeImages"

const LandingStyled = styled(Link)`
  z-index: 1000;
  overflow: hidden;
  display: block;
  height: 100vh;
  width: 100vw;
  flex-shrink: 0;
  ${gatsbyImage({
    width: "100vw !important",
    height: "100vh !important",
  })}
`

const clignote = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(2.5vh);
  }
  100% {
    opacity: 0;
    transform: translateY(5vh);
  }
`
const ArrowDownStyled = styled.svg`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 17.5vh;
  color: white;
  height: 60px;
  width: 60px;
  animation: ${clignote};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`

const Logo = styled.div`
  position: absolute;
  ${background({ url: logo })}
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

const PageNumber = styled.pre`
  position: fixed;
  z-index: 100000;
  width: 100%;
  height: auto;
  background: black;
  color: white;
  top: 0;
  left: 0;
  display: none;
`

const ScrollIcon = () => (
  <ArrowDownStyled
    className="scroll-icon"
    fill="currentColor"
    height="60"
    preserveAspectRatio="xMidYMid meet"
    style={{ verticalAlign: "middle" }}
    viewBox="0 0 40 40"
    width="60"
  >
    <g>
      <path d="m31 16.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.5 0.3t-0.6-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l1.2-1.1q0.2-0.2 0.5-0.2t0.5 0.2l8.8 8.8 8.7-8.8q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z" />
    </g>
  </ArrowDownStyled>
)

const landingPageNumber = (offset = 0) => {
  const oneDayInMs = 1000 * 60 * 60 * 24
  const now = Date.now() - offset * oneDayInMs
  const nowDate = new Date(now)
  const nowZero = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate()
  )
  const changeFrequency = 3
  const numberOfImages = 3
  const nowZeroInDays = Math.floor(Date.parse(nowZero) / oneDayInMs)
  const parsedPageNumber =
    (nowZeroInDays % (changeFrequency * numberOfImages)) + 1
  return {
    nowZero,
    nowZeroInDays,
    parsedPageNumber,
    landingPageNumber:
      Math.floor(parsedPageNumber / changeFrequency) || numberOfImages,
  }
}

const WelcomePage = ({ startAnimation }) => {
  const images = useLargeImages()

  return (
    <LandingStyled to={`/${projets}`} id="landing" onClick={startAnimation}>
      <SEO title="ADT" />
      <PageNumber>{JSON.stringify(landingPageNumber(), null, 2)}</PageNumber>
      <Img
        fluid={getImageFromSrc(
          images,
          `CONCEPT-PDG${landingPageNumber().landingPageNumber}.jpg`
        )}
        alt="ADT: une mise en architecture de la matière"
        title="ADT: une mise en architecture de la matière"
      />
      <ScrollIcon />
      <Logo />
    </LandingStyled>
  )
}

export default WelcomePage
