import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import { displayGrid } from "../styles/mixins"
import pages, { projets } from "../reference/pages"
import { media, sizes } from "../styles/mediaQueries"
import Logo from "./logo"

export const widthCss = css`
  max-width: ${({
    theme: {
      width: {
        max: { headerColumn },
      },
    },
  }) => 2 * headerColumn}px;
  min-width: ${({
    theme: {
      width: {
        min: { app },
      },
      margin,
    },
  }) => app - 2 * margin.X.min.app}px;
  width: calc(100vw - ${({ theme: { margin } }) => 2 * margin.X.min.app}px);
`

const borderBottom = css`
  &::after {
    content: "";
    border-bottom: 2px solid black;
    width: 100%;
    position: absolute;
    bottom: 0;
    ${widthCss}
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    pointer-events: none;
    ${media.desktop`
      bottom: unset;
      top: ${({
        theme: {
          height: {
            desktop: { logoLine },
          },
        },
      }) => 3 * logoLine + 10}px;
      width: ${({
        theme: {
          width: {
            desktop: { divider },
          },
        },
      }) => divider}px;
      max-width: unset;
      z-index: 10;
    `}
  }
`

const HeaderStyled = styled.header`
  ${({
    theme: {
      width: {
        min: { app },
      },
      height,
      padding: { Y },
    },
  }) => {
    return `
      min-width: ${app}px;
      padding: ${Y.header}px 0px;
      height: ${height.header}px;
    `
  }}
  flex-shrink: 0;

  ${({
    theme: {
      width: {
        min: { app },
        max,
      },
      margin: {
        X: {
          min: { app: minAppMargin },
        },
      },
    },
  }) =>
    displayGrid({
      gridTemplateColumns: `minmax(${minAppMargin}px,1fr) repeat(2, minmax(${app /
        2 -
        2 * minAppMargin}px, ${
        max.headerColumn
      }px)) minmax(${minAppMargin}px,1fr)`,
      gridTemplateAreas: '"margin-left title menu margin-right"',
    })}
  ${borderBottom}
  ${({
    theme: {
      height: {
        desktop: { logoLine, menuItem },
      },
    },
  }) => media.desktop`
    grid-area: header;
    height: 100%;
    padding: 0;
    ${displayGrid({
      gridTemplateColumns: "1fr",
      gridTemplateRows:
        3 * logoLine + "px 1fr " + Object.keys(pages).length * menuItem + "px",
      gridTemplateAreas: '"title" "space" "menu"',
    })}
  `}
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  grid-area: title;
  span {
    ${media.desktop`
      width: 75%;
    `}
  }
`

const Nav = styled.nav`
  justify-self: flex-end;
  text-transform: uppercase;
  height: 100%;
  width: ${({ theme, numberOfItems }) =>
    theme.height.menuItem * numberOfItems}px;
  ul {
    list-style: none;
    height: 100%;
    width: 100%;
  }
  grid-area: menu;
  ${media.desktop`
    justify-self: flex-start;
  `}
`

const Page = styled.li`
  transform: rotateZ(-90deg);
  transform-origin: bottom left;
  position: absolute;
  bottom: 0;
  left: ${({ position, theme }) => (position + 1) * theme.height.menuItem}px;
  width: ${({ theme }) => theme.height.header - theme.padding.X.header}px;
  font-size: 0.6em;
  font-weight: 300;
  .active {
    font-weight: 700;
  }
  &[data-page="projets"] {
    @media screen and (max-width: ${sizes.desktop}px) {
      left: ${({ theme }) => 2 * theme.height.menuItem}px;
    }
  }
  &[data-page="database"] {
    @media screen and (max-width: ${sizes.desktop}px) {
      display: none;
    }
  }
  ${media.desktop`
    transform: unset;
    position: relative;
    left: unset;
    font-size: 0.60em;
    height: ${({
      theme: {
        height: {
          desktop: { menuItem },
        },
      },
    }) => menuItem * 0.8}px;
  `}
`

const Header = () => (
  <HeaderStyled>
    <Title>
      <Link to={"/" + projets}>
        <Logo color="black" />
      </Link>
    </Title>
    <Nav numberOfItems={Object.keys(pages).length}>
      <ul>
        {Object.keys(pages).map((page, ind) => (
          <Page key={page} position={ind} data-page={page}>
            <Link to={`/${page}`} partiallyActive activeClassName="active">
              {pages[page].fr}
            </Link>
          </Page>
        ))}
      </ul>
    </Nav>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
