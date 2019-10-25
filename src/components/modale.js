import React from 'react';
import styled from 'styled-components'
import ButtonCross from './buttonCross';
import { useWindowEvent } from '../helpers/hooks';
import { media } from '../styles/mediaQueries';


const InfosBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(30,30,30,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`

const InfosContainer = styled.div`
  width: 90vw;
  max-width: 700px;
  border-radius: 20px;
  min-height: 10vw;
  max-height: 98vh;
  ${media.mobile`
    width: 98vw;
  `}
  background: white;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  ${props => props.fullScreen && `
    width: 100vw;
    height: 100vh;
  `}
  max-height: calc(98vh - 2 * 1.45rem);
  max-width: 100%;
  overflow-y: auto;
`

const Modale = ({ onCloseClick, children, fullScreen }) => {

  const handleKeyPress = e => {
    if (e.key === 'Escape') onCloseClick()
  }

  useWindowEvent("keydown", handleKeyPress);

  return(
    <InfosBackground>
      <InfosContainer id="infos">
        <Content fullScreen={fullScreen}>
          {children}
        </Content>
        <ButtonCross onClick={onCloseClick} />
      </InfosContainer>
    </InfosBackground>
  )
}

export default Modale;
