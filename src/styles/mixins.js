import { css } from "styled-components"
import { media } from "./mediaQueries"

export const displayFlex = ({
  justifyContent = "center",
  alignItems = "center",
  justifySelf,
  alignSelf,
  flexDirection = "row",
  display = "flex",
} = {}) => css`
  display: ${display};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
  ${justifySelf && "justify-self: " + justifySelf + ";"}
  ${alignSelf && "justify-self: " + alignSelf + ";"}
`

export const displayGrid = ({
  justifyContent = "center",
  alignItems = "center",
  display = "grid",
  gridTemplateColumns,
  gridAutoColumns,
  gridTemplateRows,
  gridAutoRows,
  gridGap,
  gridTemplateAreas,
} = {}) => css`
  display: ${display};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  ${gridTemplateColumns &&
    "grid-template-columns: " + gridTemplateColumns + ";"}
  ${gridTemplateRows && "grid-template-rows: " + gridTemplateRows + ";"}
  ${gridAutoColumns && "grid-auto-columns: " + gridAutoColumns + ";"}
  ${gridAutoRows && "grid-auto-rows: " + gridAutoRows + ";"}
  ${gridGap && "grid-gap: " + gridGap + ";"}
  ${gridTemplateAreas && "grid-template-areas: " + gridTemplateAreas + ";"}
`

export const background = ({ size = "cover", url, position = "center" }) => css`
  background: url(${url});
  background-position: ${position};
  background-size: ${size};
  background-repeat: no-repeat;
`

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

export const gatsbyImage = ({
  height,
  width,
  maxWidth,
  marginTop,
  desktop = {},
}) => css`
    .gatsby-image-wrapper {
    ${marginTop && `margin-top: ${marginTop}px`}
    width: ${width};
    height: ${height};
    ${maxWidth && `max-width: ${maxWidth};`}
    ${desktop.marginTop &&
      media.desktop`
      margin-top: ${desktop.marginTop}
    `}
    ${desktop.width &&
      media.desktop`
      width: ${desktop.width}
    `}
    ${desktop.height &&
      media.desktop`
      height: ${desktop.height}
    `}
  }
  picture {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
  }
`
