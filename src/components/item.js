import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image/withIEPolyfill"

import { displayFlex, gatsbyImage } from "../styles/mixins";
import { media } from "../styles/mediaQueries";

const ItemWrapper = styled.div`
  height: ${({ height }) => height}px;
  margin-bottom: ${({ bigMarginBottom }) => bigMarginBottom ? 30 : 5}px;
  display: flex;
  ${({ theme }) => gatsbyImage({
    width: theme.width.material + 'px !important',
    height: '100% !important',
    desktop: {
      width: theme.width.desktop.material + 'px !important'
    }
  })}
`

const ImagesContainer = styled.div`
  height: 100%;
`

const ImgStyled = styled(Img)`
  opacity: ${props => props.visible ? 0.5 : 1};
  transition: opacity 200ms ease-in-out;
  ${props => props.marginBottom && 'margin-bottom: 5px;'}
`

const DescriptionContainer = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.width.indicator + theme.margin.right.indicator + theme.margin.left.indicator}px;
  ${media.desktop`
    margin-left: ${({ theme }) => theme.width.desktop.indicator + theme.margin.right.desktop.indicator + theme.margin.left.desktop.indicator}px;
  `}
  ${displayFlex({ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' })}
  margin-right: ${({ theme }) => theme.width.hideScrollbar - theme.width.scrollBar}px;
  opacity: ${({ visible }) => visible ? 1 : 0};
  transform: ${({ visible }) => visible ? 'translateX(0)' : 'translateX(50px)'};
  transition: all 200ms ease-in-out;
  &::before {
    content: "";
    border-top: 1px solid ${({ theme }) => theme.color.darkGrey};
    width: ${({ theme }) => theme.width.indicator}px;
    position: absolute;
    top: 1px;
    left: ${({ theme }) => -theme.width.indicator - theme.margin.right.indicator}px;
    ${media.desktop`
      left: ${({ theme }) => -theme.width.desktop.indicator - theme.margin.right.desktop.indicator}px;
      width: ${({ theme }) => theme.width.desktop.indicator}px;
    `}
  }
`

export const Item = ({
  as,
  setVisible,
  visible,
  to,
  height,
  alt,
  children,
  id,
  images,
  bigMarginBottom
}) =>
  <ItemWrapper
    as={as}
    to={to}
    bigMarginBottom={bigMarginBottom}
    height={height}
    onClick={(e) => {
      if (!visible) {
        e.preventDefault();
        setVisible(id)
      }
    }}
    onMouseEnter={() => {
      if (window.isTouchDevice) return;
      setVisible(id)
    }}
    onMouseOver={() => {
      if (window.isTouchDevice) return;
      !visible && setVisible(id)
    }}
    onMouseLeave={() => {
      if (window.isTouchDevice) return;
      setVisible(null)
    }}
  >
    <ImagesContainer>
      {images.map((img, ind) => (
        <ImgStyled
          key={ind}
          fluid={img}
          alt={alt}
          title={alt}
          visible={visible}
          marginBottom={ind !== images.length - 1}
        />
      ))}
    </ImagesContainer>
    <DescriptionContainer
      visible={visible}
    >
      {children}
    </DescriptionContainer>
  </ItemWrapper>


Item.defaultProps = {
  as: 'div',
}



export default Item

