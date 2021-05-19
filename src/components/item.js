import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import { displayFlex, gatsbyImage } from "../styles/mixins"
import { widthCss } from "../components/header"
import { media } from "../styles/mediaQueries"
import windowExists from "../helpers/windowExists"
import isTouchDevice from "../helpers/isTouchDevice"

const ItemWrapper = styled(({ height, theme, ...rest }) => <div {...rest} />)`
  height: ${({ height }) => height}px;
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  ${({ theme }) =>
    gatsbyImage({
      // width: theme.width.material + "px !important",
      width: `calc(100vw - ${2 * theme.margin.X.min.app}px) !important`,
      maxWidth: 2 * theme.width.max.headerColumn + "px !important",
      height: "100% !important",
      desktop: {
        width: theme.width.desktop.material + "px !important",
      },
    })}
  ${props => !!props.forNewBdd && itemWrapperForNewBdd}
`

const itemWrapperForNewBdd = css`
  height: ${({ height }) => height / 2}px;
  ${widthCss}
`

const ImagesContainer = styled.div`
  height: 100%;
  ${props => props.forDB && "width: 100% !important;"}
  ${props => props.forNewBdd && imageContainerForNewBdd}
`

const imageContainerForNewBdd = css`
  ${media.desktop`
    width: 180px !important;
    border: 1px solid #000;
  `}
`
const ImgStyled = styled(Img)`
${props => props.forDB && `&.gatsby-image-wrapper { width: 100% !important; }`}
${props => props.forNewBdd && imageStytledForNewBdd}
  opacity: ${props => (props.visible && !props.noScreening ? 0.5 : 1)};
  transition: opacity 200ms ease-in-out;
  ${props => props.marginBottom && "margin-bottom: 5px;"}
`

const imageStytledForNewBdd = css`
  ${media.desktop`
    &.gatsby-image-wrapper {
      width: 100% !important;
    }
  `}
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
  ${props => props.forNewBdd && desciptionContainerForNewBdd}
  ${props =>
    !props.forNewBdd &&
    `
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
  `}
`

const desciptionContainerForNewBdd = css`
  margin-left: 10px !important;
  border: 1px solid #000;
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
  forDB = false,
  forNewBdd = false,
}) => (
  <ItemWrapper
    as={as}
    to={to}
    height={height}
    forNewBdd={forNewBdd}
    onClick={e => {
      if (forNewBdd) return
      if (!visible && !directClick) {
        // e.preventDefault()
        setVisible(id)
      }
    }}
    onMouseEnter={() => {
      if (forNewBdd) return
      if (!windowExists() && window.isTouchDevice) return
      setVisible(id)
    }}
    onMouseOver={() => {
      if (forNewBdd) return
      if (!windowExists() && window.isTouchDevice) return
      !visible && setVisible(id)
    }}
    onMouseLeave={() => {
      if (forNewBdd) return
      if (!windowExists() && window.isTouchDevice) return
      setVisible(null)
    }}
  >
    <ImagesContainer forDB={forDB} forNewBdd={forNewBdd}>
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
            forDB={forDB}
            forNewBdd={forNewBdd}
          />
        )
      })}
    </ImagesContainer>
    {children && (
      <DescriptionContainer forNewBdd={forNewBdd} visible={visible}>
        {children}
      </DescriptionContainer>
    )}
  </ItemWrapper>
)

export default Item
