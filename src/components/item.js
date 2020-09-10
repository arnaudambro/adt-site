import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import { displayFlex, gatsbyImage } from "../styles/mixins"
import { media } from "../styles/mediaQueries"
import windowExists from "../helpers/windowExists"
import isTouchDevice from "../helpers/isTouchDevice"

const ItemWrapper = styled(({ height, theme, ...rest }) => <div {...rest} />)`
  height: ${({ height }) => height}px;
  margin-bottom: 5px;
  display: flex;
  ${({ theme }) =>
    gatsbyImage({
      width: theme.width.material + "px !important",
      height: "100% !important",
      desktop: {
        width: theme.width.desktop.material + "px !important",
      },
    })}
`

const ImagesContainer = styled.div`
  height: 100%;
`

const ImgStyled = styled(Img)`
  opacity: ${props => (props.visible && !props.noScreening ? 0.5 : 1)};
  transition: opacity 200ms ease-in-out;
  ${props => props.marginBottom && "margin-bottom: 5px;"}
`

const Placeholder = styled.div`
  border: 1px solid #000;
  height: 100%;
  width: ${props => props.theme.width.material}px;
  ${media.desktop`
  width: ${({ theme }) => theme.width.desktop.material}px;
  `}
`

const DescriptionContainer = styled.div`
  flex: 1;
  margin-left: ${({ theme }) =>
    theme.width.indicator +
    theme.margin.right.indicator +
    theme.margin.left.indicator}px;
  ${media.desktop`
    margin-left: ${({ theme }) =>
      theme.width.desktop.indicator +
      theme.margin.right.desktop.indicator +
      theme.margin.left.desktop.indicator}px;
  `}
  ${displayFlex({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  })}
  margin-right: ${({ theme }) =>
    isTouchDevice()
      ? theme.width.hideScrollbar
      : theme.width.hideScrollbar - theme.width.scrollBar}px;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? "translateX(0)" : "translateX(50px)"};
  transition: all 200ms ease-in-out;
  &::before {
    content: "";
    border-top: 1px solid ${({ theme }) => theme.color.darkGrey};
    width: ${({ theme }) => theme.width.indicator}px;
    position: absolute;
    top: 1px;
    left: ${({ theme }) =>
      -theme.width.indicator - theme.margin.right.indicator}px;
    ${media.desktop`
      left: ${({ theme }) =>
        -theme.width.desktop.indicator -
        theme.margin.right.desktop.indicator}px;
      width: ${({ theme }) => theme.width.desktop.indicator}px;
    `}
  }
`

const Item = ({
  as = "div",
  setVisible,
  visible,
  directClick = false,
  to,
  height,
  alt,
  children,
  id,
  images,
  noScreening = false,
}) => (
  <ItemWrapper
    as={as}
    to={to}
    height={height}
    onClick={e => {
      if (!visible && !directClick) {
        // e.preventDefault()
        setVisible(id)
      }
    }}
    onMouseEnter={() => {
      if (windowExists() && window.isTouchDevice) return
      setVisible(id)
    }}
    onMouseOver={() => {
      if (windowExists() && window.isTouchDevice) return
      !visible && setVisible(id)
    }}
    onMouseLeave={() => {
      if (windowExists() && window.isTouchDevice) return
      setVisible(null)
    }}
  >
    <ImagesContainer>
      {images.map((img, ind) => {
        if (!img.src) return <Placeholder key={ind} />
        return (
          <ImgStyled
            key={ind}
            fluid={img}
            alt={alt}
            title={alt}
            visible={visible}
            noScreening={noScreening}
            marginBottom={ind !== images.length - 1}
          />
        )
      })}
    </ImagesContainer>
    {children && (
      <DescriptionContainer visible={visible}>{children}</DescriptionContainer>
    )}
  </ItemWrapper>
)

export default Item
