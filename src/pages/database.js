import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby";

import { displayFlex, displayGrid } from "../styles/mixins";
import { programmes, matieres, anneesCaption } from "../reference/database";
import { getYear, getTitle, isProjetInCategory, getCode, getMaterialHeightPageBDD, getProjetMaterialImageForBDDPage, getMaterial, rankProjectsInBDD } from "../helpers/selectors";
import { addSuffix } from "../helpers/projetUrl";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Item from "../components/item";
import useProjetsDataAndImages from "../helpers/hooks/useProjetsDataAndImages";
import { media } from "../styles/mediaQueries";

const categoryWidth = 145;
const gridGap = 35;
const dbWidth = 3 * categoryWidth + 2 * gridGap;

const Filters = styled.div`
  width: ${dbWidth}px;
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
  width: 85px;
  height: 22px;
  line-height: 22px;
  font-weight: 500;
  font-size: .75em;
  color: ${({ active, theme }) => active ? theme.color.black : theme.color.defaultColor};
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
    gridTemplateColumns: `repeat(auto-fit, ${categoryWidth}px)`,
    gridAutoRows: "auto",
    gridGap: gridGap + "px",
    justifyContent: 'center'
  })}
  ${media.desktop`
    ${displayGrid({
      gridTemplateColumns: "repeat(auto-fit, 145px)",
      gridAutoRows: "auto",
      gridGap: "35px",
      justifyContent: 'flex-start'
    })}
  `}
  /* padding-right: 100px; */
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
  border-top: 1px solid ${({ theme }) => theme.color.defaultColor};
  font-weight: 400;
  text-align: left;
  width: 100%;
  font-size: .75em;
  margin-top: 10px;
  padding-top: 5px;
  text-transform: uppercase;
`



const Database = () => {
  const { projets, images } = useProjetsDataAndImages()

  const annees = React.useMemo(() => new Set(projets.map(getYear)))

  const filters = { annees, matieres, programmes }

  const [visibleCategory, setVisibleCategory] = React.useState(anneesCaption);
  const [visibleProjet, setVisibleProjet] = React.useState(null);

  return(
    <Layout arrowWidth={dbWidth}>
      <SEO title="Base de données" />
      <Filters>
        {Object.keys(filters).map(filter => (
          <Filter
            key={filter}
            onClick={() => setVisibleCategory(filter)}
            active={filter === visibleCategory}
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
                  to: `/projet/${addSuffix(getCode(projet))}`,
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
