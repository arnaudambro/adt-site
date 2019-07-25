/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider, keyframes, css } from 'styled-components'
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import WelcomePage from "./welcomePage";
import { media } from "../styles/mediaQueries";
import { displayGrid, displayFlex } from "../styles/mixins";
import pages, { projets } from "../reference/pages";

const swipeup = keyframes`
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-100vh)
  }
`

const FullPage = styled.div`
  height: 100vh;
  width: 100vw;
  ${displayFlex({ flexDirection: 'column' })};
  overflow: hidden;
  ${media.desktop`
    ${({ theme: { width: { desktop: { sideColumn, centerColumn } }, height: { desktop: { logoLine, menuItem } },  padding: { X } } }) => displayGrid({
      gridTemplateColumns: `minmax(${X.header}px,1fr) ${sideColumn}px ${centerColumn}px ${sideColumn}px minmax(${X.header}px,1fr)`,
      gridTemplateRows: `minmax(${X.header}px,10vh) ${3 * logoLine}px 10px 0 34px ${Object.keys(pages).length * menuItem}px 1fr`,
      gridTemplateAreas: `
      "leftmargin topmargin   topmargin topmargin rightmargin"
      "leftmargin header        content   content   rightmargin"
      "leftmargin header   content   content   rightmargin"
      "leftmargin header     content   content   rightmargin"
      "leftmargin header   content   content   rightmargin"
      "leftmargin header        content   content   rightmargin"
      "leftmargin spare       content   content   rightmargin";
      `
    })}
  `}
`

const ContentWrapper = styled.div`
  max-width: ${({ theme: { width: { min : { app } }, padding: { X } } }) => app - 2 * X.content}px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme: { margin } }) => margin.top.content}px;
  flex-grow: 1;
  flex-shrink: 1;
  grid-area: content;
  ${media.desktop`
    margin-left: unset;
    margin-right: unset;
    margin-top: unset;
    max-width: unset;
    align-self: flex-start;
    height: 100%;
  `}
`
const Content = styled.main`
  width: calc(100% + ${({ theme }) => theme.width.hideScrollbar}px);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  ${media.desktop`
    padding-top: 236px;
  `}

`

const MarginBottom = styled.div`
  height: 95%;
  ${media.desktop`
    height: calc(90vh - 236px);
  `}
  &::before {
    content: "\\2191";
    height: 25px;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1em;
    margin-top: 30%;
    display: inline-block;
    margin-left: ${({ theme }) => theme.width.material - 20}px;
    ${media.desktop`
      margin-bottom: 80px;
      margin-left: ${({ theme }) => theme.width.desktop.material - 20}px;
    `}
  }
`

const animationCss = css`
  height: 200vh;
  animation: ${swipeup};
  animation-duration: 750ms;
  animation-delay: 0s;
  animation-fill-mode: backwards;
  animation-iteration-count: 1;
`

const AnimationWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  flex-shrink: 0;
  overflow: hidden;
  ${props => props.withAnimation && animationCss}
`

const Layout = ({ children, pageWithtransitionWithLanding }) => {
  // console.log(window.location.pathname, 'window.showWelcomePage', window.showWelcomePage, 'window.startAnimation', window.startAnimation)
  const contentRef = React.useRef(null);
  const [welcomeAnimationDone, setWelcomeAnimationDone] = React.useState(false);
  const [withAnimation, startAnimation] = React.useState(false);
  const [showWelcomePage, toggleWelcomePage] = React.useState(window.showWelcomePage);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const startAnimationRequested = window.location.pathname === `/${projets}` && showWelcomePage && !withAnimation;
  const hideWelcomePage = welcomeAnimationDone && showWelcomePage;

  console.log({
    showWelcomePage,
    startAnimationRequested,
    hideWelcomePage,
    withAnimation
  })
  if (startAnimationRequested) startAnimation(true)
  if (hideWelcomePage) {
    window.showWelcomePage = false;
    toggleWelcomePage(false)
  }

  return(
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <AnimationWrapper
        withAnimation={withAnimation}
        onAnimationEnd={() => setWelcomeAnimationDone(true)}
      >
        {showWelcomePage && <WelcomePage />}
        <FullPage>
          <Header siteTitle={data.site.siteMetadata.title} />
          <ContentWrapper>
            <Content ref={contentRef}>
              {children}
              <MarginBottom
                onClick={() => contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </Content>
          </ContentWrapper>
        </FullPage>
      </AnimationWrapper>
    </>
  </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  landing: PropTypes.bool,
  pageWithtransitionWithLanding: PropTypes.bool,
}

Layout.defaultProps = {
  landing: false,
  pageWithtransitionWithLanding: false,
}

export default Layout
