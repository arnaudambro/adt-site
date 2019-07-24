import React from "react"
import styled, { keyframes } from 'styled-components'
import SEO from "./seo"

import logo from '../images/logo.svg';
import poster from '../images/poster.png';
import { media } from "../styles/mediaQueries";
import { Link } from "gatsby";
import { projets } from "../reference/pages";


const LandingStyled = styled(Link)`
  z-index: 1000;
  overflow: hidden;
  display: block;
  height: 100vh;
  width: 100vw;
  flex-shrink: 0;
  background-image: url(${poster});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  background-repeat: no-repeat;
  background-position: center;
  background: url(${logo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

const ScrollIcon = () =>
  <ArrowDownStyled
    className="scroll-icon"
    fill="currentColor"
    height="60"
    preserveAspectRatio="xMidYMid meet"
    style={{ verticalAlign: 'middle' }}
    viewBox="0 0 40 40"
    width="60">
    <g>
      <path d="m31 16.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.5 0.3t-0.6-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l1.2-1.1q0.2-0.2 0.5-0.2t0.5 0.2l8.8 8.8 8.7-8.8q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z" />
    </g>
  </ArrowDownStyled>

const WelcomePage = () =>
  <LandingStyled
    to={'/' + projets}
    title="ADT: une mise en architecture de la matière"
    id="landing"
  >
    <SEO title="ADT" />
    {/* muted attribute is not given to the video, this is a workaround */}
    <ScrollIcon />
    <Logo />
  </LandingStyled>

export default WelcomePage;
