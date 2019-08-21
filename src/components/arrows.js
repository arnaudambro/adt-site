import React from 'react';
import styled from 'styled-components';
import { displayFlex } from '../styles/mixins';
import { media } from '../styles/mediaQueries';
import { Link } from 'gatsby';

const ArrowsContainer = styled.div`
  height: 25px;
  width: 50px;
  padding-right: 1px;
  position: absolute;
  right: ${({ theme }) => theme.width.hideScrollbar}px;
  top: 0;
  ${({ theme }) => media.desktop`
    top: ${theme.padding.Y.desktop.main}px;
    right: 100px;
  `}
  ${displayFlex({
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  })}
`

const arrowsHeight = 20

const Divider = () =>
  <svg viewBox="0 0 2 200" width="2" height={arrowsHeight}>
    <g id="Page-1" stroke="none" strokeWidth="10" fill="none" fillRule="evenodd">
        <path d="M1,200 L1,0" id="Path-3" stroke="#1D1D1B"></path>
    </g>
  </svg>


const ArrowLeft = () =>
  <svg viewBox="0 0 120 202" width={120 * arrowsHeight / 202} height={arrowsHeight}>
    <g id="Page-1" stroke="none" strokeWidth="10" fill="none" fillRule="evenodd">
        <polyline id="Path" stroke="#1D1D1B" points="120 1 0 101 120 201"></polyline>
    </g>
  </svg>


const ArrowRight = () =>
  <svg viewBox="0 0 120 202" width={120 * arrowsHeight / 202} height={arrowsHeight}>
      <g id="Page-1" stroke="none" strokeWidth="10" fill="none" fillRule="evenodd">
          <polyline id="Path" stroke="#1D1D1B" points="0 1 120 101 0 201"></polyline>
      </g>
  </svg>


const Arrows = ({ projets, projet }) => {
  const projetIndex = (projetInProjets) => projetInProjets === projet;
  return(
    <ArrowsContainer>
      <Link to={`/projet/${projets[projets.findIndex(projetIndex) - 1] || projets[projets.length - 1]}/`} >
        <ArrowLeft />
      </Link>
      <Divider />
      <Link to={`/projet/${projets[projets.findIndex(projetIndex) + 1] || projets[0]}/`} >
        <ArrowRight />
      </Link>
    </ArrowsContainer>
  )
}

export default Arrows;
