import React from "react"
import styled, { css } from 'styled-components'

import {
  getNewsDescription,
  getNewsDate,
  getNewsHeight,
} from '../helpers/selectors'
import Item from "./item";
import { media } from "../styles/mediaQueries";

const Title = styled.span`
  font-weight: 500;
  font-size: .75rem;
  line-height: 1em;
  margin-bottom: 18px;
`

const cssContent = css`
  font-weight: 300;
  font-size: .7rem;
`
const Description = styled.span`
  ${cssContent}
`

const Divider = styled.div`
  height: 30px;
  border-top: 1px solid ${({ theme }) => theme.color.darkGrey};
  width: ${({ theme }) => theme.width.material}px;
  ${({ theme }) => media.desktop`
    width: ${theme.width.desktop.material}px;
  `}
`

const News = ({ setVisible, visible, withDivider, ...news }) =>
  <>
    <Item
      height={getNewsHeight(news)}
      setVisible={setVisible}
      visible={visible}
      alt={getNewsDescription(news)}
      id={news.id}
      images={news.images}
      bigMarginBottom={true}
      withDivider={withDivider}
    >
      <Title>{getNewsDate(news)}</Title>
      <Description dangerouslySetInnerHTML={{__html: getNewsDescription(news) }} />
    </Item>
    {withDivider && <Divider />}
  </>


export default News

