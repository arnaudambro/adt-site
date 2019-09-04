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
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import WelcomePage from "./welcomePage";
import { media } from "../styles/mediaQueries";
import { displayGrid, displayFlex } from "../styles/mixins";
import pages, { projets } from "../reference/pages";
import windowExists from "../helpers/windowExists";
import windowPathNameIncludes from "../helpers/windowPathNameIncludes";

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
    ${({ theme: {
      width: { desktop: { sideColumn, centerColumn } },
      height: { desktop: { logoLine, menuItem } },
      margin: { X: { min: { app: appMinMargin } } } } }) => displayGrid({
      gridTemplateColumns: `minmax(${appMinMargin}px,1fr) ${sideColumn}px ${centerColumn}px ${sideColumn}px minmax(${appMinMargin}px,1fr)`,
      gridTemplateRows: `minmax(${appMinMargin}px,10vh) ${3 * logoLine}px 10px 0 34px ${Object.keys(pages).length * menuItem}px 1fr`,
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
  ${({ noMaxWidth, theme: { width: { min : { app: appMin }, max: { app: appMax } }, padding: { X } } }) => {
    if (noMaxWidth) {
      return `
        max-width: ${appMax}px;
        padding-left: ${X.content}px;
        padding-right: ${X.content}px;
      `
    }
    return `
      max-width: ${appMin - 2 * X.content}px;
    `
  }}
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
  ${({ noMaxWidth, theme: { width: { hideScrollbar } } }) => {
    if (noMaxWidth) {
      return `
        width: calc(100% + ${2 * hideScrollbar}px);
      `
    }
    return `
      width: calc(100% + ${hideScrollbar}px);
    `
  }}
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  ${({ theme }) => media.desktop`
    padding-top: ${theme.padding.Y.desktop.main}px;
  `}

`

const MarginBottom = styled.div`
  height: 95%;
  padding-top: 30%;
  cursor: pointer;
  * {
    pointer-events: none;
  }


  ${media.desktop`
    height: calc(90vh - 236px);
  `}
  ${displayFlex({
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  })}
  width: ${({ theme }) => `calc(100% - ${3 * theme.width.hideScrollbar}px)`};
  ${({ theme, width }) => {
      return width
      ? media.desktop`width: ${width}px;`
      : media.desktop`width: calc(${theme.width.max.content}px - 2rem);`
  }}
  /* &::before {
    content: "\\2191";
    height: 25px;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1em;
    margin-top: 30%;
    display: inline-block;
    margin-left: ${({ theme }) => `calc(100% - ${3 * theme.width.hideScrollbar}px)`};
    ${({ noMaxWidth, theme }) => {
      return media.desktop`
          margin-left: calc(${theme.width.max.content}px - 2rem);
          `
    }} */
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

class Layout extends React.Component {
  state = {
    withAnimation: false,
    showWelcomePage: windowExists() ? window.showWelcomePage : false
  }

  componentDidMount() {
    if (!windowExists()) {
      this.setState({ showWelcomePage: false })
      return
    }
    if (windowExists()) {
      if (!window.showWelcomePage) {
        this.setState({ showWelcomePage: false })
        return
      }
      if (windowPathNameIncludes(projets)) this.setState({ withAnimation: true })
    }
  }

  handleAnimationEnd = (e) => {
    window.showWelcomePage = false
    this.setState({ showWelcomePage: false })
  }

  render() {
    const {
      withAnimation,
      showWelcomePage
    } = this.state;
    const {
      noMaxWidth,
      children,
      arrowWidth
    } = this.props;

    return(
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyles />
              <AnimationWrapper
                withAnimation={withAnimation}
                onAnimationEnd={this.handleAnimationEnd}
              >
                {showWelcomePage && <WelcomePage />}
                <FullPage>
                  <Header siteTitle={data.site.siteMetadata.title} />
                  <ContentWrapper noMaxWidth={noMaxWidth}>
                    <Content ref={r => this.contentRef = r} noMaxWidth={noMaxWidth}>
                      {children}
                      <MarginBottom
                        onClick={() => this.contentRef.scrollTo({ top: 0, behavior: 'smooth' })}
                        noMaxWidth={noMaxWidth}
                        width={arrowWidth}
                      >
                        <svg viewBox="0 0 678 384" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd" height="20"><g><path fill="black" fillRule="nonzero" d="M663 306c42,41 -22,106 -64,63l-261 -260 -260 260c-42,42 -107,-21 -64,-63l292 -293c18,-17 47,-17 65,0l292 293zm-5 5l-293 -292c-14,-15 -39,-15 -53,-1l-293 293c-35,35 19,88 53,53l266 -266 266 266c36,35 88,-19 54,-53z"/></g></svg>
                      </MarginBottom>
                    </Content>
                  </ContentWrapper>
                </FullPage>
              </AnimationWrapper>
            </>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  landing: PropTypes.bool,
  noMaxWidth: PropTypes.bool,
  arrowWidth: PropTypes.number
}

Layout.defaultProps = {
  landing: false,
  noMaxWidth: false,
  arrowWidth: 0
}

export default Layout
