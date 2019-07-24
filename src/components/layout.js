/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider, keyframes } from 'styled-components'
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import WelcomePage from "./welcomePage";

const swipeup = keyframes`
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-100vh)
  }
`

const ContentWrapper = styled.div`
  max-width: ${({ theme: { width: { min : { app } }, padding: { X } } }) => app - 2 * X.content}px;
  width: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme: { margin } }) => margin.top.content}px;
  flex-grow: 1;
  flex-shrink: 1;
`
const Content = styled.main`
  width: calc(100% + 30px);
  border: 1px solid #000;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`

const TransitionWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  flex-shrink: 0;
  overflow: hidden;
  &.active {
    overflow: visible;
    animation: ${swipeup};
    animation-duration: 750ms;
    animation-delay: 0s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
  }
`

const Layout = ({ children, landing }) => {
  const [welcomeAnimationDone, setWelcomeAnimationDone] = React.useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const renderNoTransition = siteTitle => {
    console.log('renderNoTransition')
    return <>
      {!landing && (
        <>
          <Header siteTitle={siteTitle} />
          <ContentWrapper>
            <Content>
              {children}
            </Content>
          </ContentWrapper>
        </>
      )}
      {landing && <>{children}</>}
    </>
  }

  const renderTransition = siteTitle => {
    console.warn('renderTransition')
    return (
      <TransitionWrapper
        className='active'
        onAnimationEnd={() => {
          window.transitionWithLandingRequested = false;
          setWelcomeAnimationDone(true)
        }}
      >
        <WelcomePage />
        <TransitionWrapper>
          <Header siteTitle={siteTitle} />
          <ContentWrapper>
            <Content>
              {children}
            </Content>
          </ContentWrapper>
        </TransitionWrapper>
      </TransitionWrapper>
    )
  }

  return(
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {window.transitionWithLandingRequested && !welcomeAnimationDone && !landing && renderTransition(data.site.siteMetadata.title)}
      {(!window.transitionWithLandingRequested || welcomeAnimationDone || landing) && renderNoTransition(data.site.siteMetadata.title)}
    </>
  </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  landing: PropTypes.bool,
  transitionWithLandingRequested: PropTypes.bool,
}

Layout.defaultProps = {
  landing: false,
  transitionWithLandingRequested: false,
}

export default Layout
