import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby";

import { displayFlex, displayGrid } from "../styles/mixins";
import { programmes, matieres, anneesCaption } from "../reference/database";
import { useProjetsDataAndImages } from "../helpers/hooks";
import { getYear, getTitle, isProjetInCategory, getCode, getMaterialHeightPageBDD, getProjetMaterialImageForBDDPage, getMaterial, rankProjectsInBDD } from "../helpers/selectors";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Item from "../components/item";

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
    gridTemplateColumns: "repeat(auto-fit, 125px)",
    gridAutoRows: "auto",
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
  overflow: hidden;
  > :last-child {
    margin-bottom: 0 !important;
  }
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
  const { projets, images } = useProjetsDataAndImages()

  const annees = React.useMemo(() => new Set(projets.map(getYear)))

  const filters = { annees, matieres, programmes }

  const [visibleCategory, setVisibleCategory] = React.useState(anneesCaption);
  const [visibleProjet, setVisibleProjet] = React.useState(null);

  return(
    <Layout>
      <SEO title="Base de données" />
      <Filters>
        {Object.keys(filters).map(filter => (
          <Filter
            key={filter}
            onClick={() => setVisibleCategory(filter)}
          >
            {filter}
          </Filter>
        ))}
      </Filters>
      <Categories>
        {[...filters[visibleCategory]].map((category, ind) => (
          <CategoryContainer key={ind}>
            <Projets>
              {projets
                .filter(isProjetInCategory(visibleCategory, category))
                .sort(rankProjectsInBDD(visibleCategory))
                .map(projet => ({
                  images: [getProjetMaterialImageForBDDPage(images, projet)],
                  to: `/projet/${getCode(projet)}`,
                  alt: `${getTitle(projet)} - ${getMaterial(projet)}`,
                  height: getMaterialHeightPageBDD(projet),
                  id: projet.id
                }))
                .map((projet, ind) => (
                  <Item
                    key={ind}
                    as={Link}
                    directClick
                    id={projet.id}
                    visible={visibleProjet === projet.id}
                    setVisible={setVisibleProjet}
                    {...projet}
                  />
                ))}
            </Projets>
            <Category>{category}</Category>
          </CategoryContainer>
        ))}
      </Categories>
    </Layout>
  )
}


export default Database
