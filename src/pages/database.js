import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import database, { annees } from "../reference/database";
import { displayFlex, displayGrid } from "../styles/mixins";
import { useStaticQuery, graphql } from "gatsby";

const Filters = styled.div`
  ${displayFlex({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  })}

`

const Filter = styled.span`
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
  width: 200px;
  height: 30px;
  line-height: 30px;
  font-weight: 500;
  &::before {
    content: "\\002B";
    position: absolute;
    font-size: 1.5em;
    font-weight: 400;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    left: -20px;
    width: 30px;
  }
`

const Categories = styled.div`
  ${displayGrid({
    gridTemplateColumns: "repeat(3,1fr)",
    gridAutoRows: "200px",
    gridGap: "35px"
  })}
  padding-right: 100px;
  margin-top: 50px;
`

const CategoryContainer = styled.div`
  ${displayFlex({
    flexDirection: 'column',
    justifyContent: 'flex-end'
  })}
  height: 100%;
`

const Projets = styled.div`
  ${displayFlex({
    flexDirection: 'column',
    justifyContent: 'flex-end'
  })}
  flex-grow: 1;
  width: 100%;
  border: 1px solid #000;
`

const Category = styled.span`
  font-weight: 400;
  text-align: left;
  width: 100%;
  font-size: .75em;
  margin-top: 10px;
  text-transform: uppercase;
`



const Database = () => {
  const [visibleCategory, setVisibleCategory] = React.useState(annees);
  const {
    allProjetsJson:{edges: projets },
    allImageSharp:{edges: images },
  } = useStaticQuery(graphql`
    query {
      allProjetsJson {
        edges {
          ...AllProjets
        }
      }
      allImageSharp {
        edges {
          ...AllImages
        }
      }
    }
  `)
  console.log(database[visibleCategory])
  return(
    <Layout>
      <SEO title="Base de données" />
      <Filters>
        {Object.keys(database.filters).map(filter => (
          <Filter
            key={filter}
            onClick={() => setVisibleCategory(filter)}
          >
            {database.filters[filter].fr}
          </Filter>
        ))}
      </Filters>
      <Categories>
        {Object.keys(database[visibleCategory]).map(category => (
          <CategoryContainer>
            <Projets></Projets>
            <Category>{category}</Category>
          </CategoryContainer>
        ))}
      </Categories>
    </Layout>
  )
}


export default Database
