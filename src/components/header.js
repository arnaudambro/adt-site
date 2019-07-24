import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from 'styled-components'
import { displayFlex, displayGrid } from "../styles/mixins";
import pages from "../reference/pages";

const borderBottom = css`
  &::after {
    content: "";
    border-bottom: 2px solid black;
    width: 100%;
    position: absolute;
    bottom: 0;
    max-width: ${({ theme: { width: { max: { headerColumn } }}}) => 2 * headerColumn}px;
    min-width: ${({ theme: { width: { min : { app } }, padding: { X } } }) => app - 2 * X.header}px;
    width: calc(100vw - ${({ theme: { padding: { X } } }) => 2 * X.header}px);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`

const HeaderStyled = styled.header`
  ${({ theme: { width: { min : { app } }, height, padding: { X, Y } } }) => `
    min-width: ${app}px;
    padding: ${Y.header}px 0px;
    height: ${height.header}px;
  `}
  ${({ theme: { width: { min : { app }, max }, padding: { X, Y } } }) => displayGrid({
      gridTemplateColumns: `minmax(${X.header}px,1fr) repeat(2, minmax(${app / 2 - 2 * X.header}px, ${max.headerColumn}px)) minmax(${X.header}px,1fr)`,
      gridTemplateAreas: '"margin-left left-column right-column margin-right"'
    })}
  ${borderBottom}
`

const Title = styled.h1`
  ${displayFlex({
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  })}
  height: 100%;
  grid-area: left-column;
  span {
    white-space:nowrap;
    display: inline-block;
    font-size: calc(1rem + 2vh);
    line-height: 1.2em;
    text-transform: uppercase;
    -webkit-text-stroke: .05em ${({ theme }) => theme.color.black};
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
`

const Nav = styled.nav`
  justify-self: flex-end;
  text-transform: uppercase;
  height: 100%;
  width: ${({ theme, numberOfItems }) => theme.height.menuItem * numberOfItems}px;
  ul {
    list-style: none;
    height: 100%;
    width: 100%;
  }
  grid-area: right-column;
`

const Page = styled.li`
  transform: rotateZ(-90deg);
  transform-origin: bottom left;
  position: absolute;
  bottom: 0;
  left: ${({ position, theme }) => (position + 1) * theme.height.menuItem}px;
  width: ${({ theme }) => theme.height.header - theme.padding.X.header}px;
  font-size: 0.8em;
  .active {
    font-weight: 700;
  }
`

const Header = ({ siteTitle }) =>
  <HeaderStyled>
    <Title>
      {siteTitle.split(' ').map(title => <span key={title}>{title}</span>)}
    </Title>
    <Nav numberOfItems={Object.keys(pages).length}>
      <ul>
        {Object.keys(pages).map((page, ind) =>
          <Page
            key={page}
            position={ind}
          >
            <Link
              to={"/" + page}
              activeClassName='active'
            >
                {pages[page].fr}
            </Link>
          </Page>
        )}
      </ul>
    </Nav>
  </HeaderStyled>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
