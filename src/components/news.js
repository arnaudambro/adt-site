import React from "react"
import styled, { css } from 'styled-components'

import {
  getNewsDescription,
  getNewsDate,
  getNewsHeight,
} from '../helpers/selectors'
import Item from "./item";

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

const News = ({ setVisible, visible, ...news }) =>
  <Item
    height={getNewsHeight(news)}
    setVisible={setVisible}
    visible={visible}
    alt={getNewsDescription(news)}
    id={news.id}
    images={news.images}
    bigMarginBottom
  >
    <Title>{getNewsDate(news)}</Title>
    <Description>{getNewsDescription(news)}</Description>
  </Item>



export default News

