import React from "react"
import styled from "styled-components"

import {
  getNewsDescription,
  getNewsDate,
  getNewsHeight,
  getNewsAlt,
} from "../helpers/selectors"
import Item from "./item"
import { media } from "../styles/mediaQueries"

const Title = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1em;
  display: block;
  margin-bottom: 5px;
`

const Description = styled.span`
  font-weight: 300;
  font-size: 0.7rem;
  display: block;
  margin-bottom: 30px;
`

const Divider = styled.div`
  height: 30px;
  border-top: 1px solid ${({ theme }) => theme.color.darkGrey};
  width: ${({ theme }) => theme.width.material}px;
  ${({ theme }) => media.desktop`
    width: ${theme.width.desktop.material}px;
  `}
`

const News = ({ setVisible, visible, withDivider, ...news }) => {
  return (
    <>
      <Item
        height={getNewsHeight(news)}
        setVisible={setVisible}
        visible={visible}
        alt={getNewsAlt(news)}
        id={news.id}
        images={news.images}
        forceFullWidth
        withDivider={withDivider}
        noScreening
      />
      <Title>{getNewsDate(news)}</Title>
      <Description
        dangerouslySetInnerHTML={{ __html: getNewsDescription(news) }}
      />
      {withDivider && <Divider />}
    </>
  )
}

export default News
