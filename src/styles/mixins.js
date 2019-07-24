import { css } from 'styled-components'

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


export {
  displayFlex,
  displayGrid
}
