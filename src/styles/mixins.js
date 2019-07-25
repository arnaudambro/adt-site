import { css } from 'styled-components'
import smoothscroll from 'smoothscroll-polyfill';
import { media } from './mediaQueries';

// kick off the polyfill!
smoothscroll.polyfill();

const displayFlex = ({
  justifyContent = 'center',
  alignItems = 'center',
  justifySelf,
  alignSelf,
  flexDirection = 'row',
  display = 'flex'
} = {}) => css`
  display: ${display};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
  ${justifySelf && ('justify-self: ' + justifySelf + ';')}
  ${alignSelf && ('justify-self: ' + alignSelf + ';')}
`

const displayGrid = ({
  justifyContent = 'center',
  alignItems = 'center',
  display = 'grid',
  gridTemplateColumns,
  gridAutoColumns,
  gridTemplateRows,
  gridAutoRows,
  gridGap,
  gridTemplateAreas
} = {}) => css`
  display: ${display};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  ${gridTemplateColumns && ('grid-template-columns: ' + gridTemplateColumns + ';')}
  ${gridTemplateRows && ('grid-template-rows: ' + gridTemplateRows + ';')}
  ${gridAutoColumns && ('grid-auto-columns: ' + gridAutoColumns + ';')}
  ${gridAutoRows && ('grid-auto-rows: ' + gridAutoRows + ';')}
  ${gridGap && ('grid-gap: ' + gridGap + ';')}
  ${gridTemplateAreas && ('grid-template-areas: ' + gridTemplateAreas + ';')}
`

const background = ({
  size = 'cover',
  url,
  position = 'center'
}) => css`
  background: url(${url});
  background-position: ${position};
  background-size: ${size};
  background-repeat: no-repeat;
`

const gatsbyImage = ({ height, width, desktop = {} }) => css`
    .gatsby-image-wrapper {
    width: ${width};
    height: ${height};
    ${desktop.width && media.desktop`
      width: ${desktop.width}
    `}
    ${desktop.height && media.desktop`
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


export {
  displayFlex,
  displayGrid,
  background,
  gatsbyImage
}
