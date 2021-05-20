import React from "react"
import {
  getProjetMaterialImageForNewBDDPage,
  getInNewDB,
  getMaterialHeightPageBDD,
} from "../helpers/selectors"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewDatabaseItem from "../components/newDatabaseItem"
import useProjetsDataAndImages from "../helpers/hooks/useProjetsDataAndImages"
import theme from "../styles/theme"

const Projets = ({ noTitle }) => {
  const { projets, images } = useProjetsDataAndImages()
  return (
    <Layout arrowWidth={theme.width.desktop.material}>
      <SEO title={noTitle ? null : "Projets"} />
      {projets
        .filter(getInNewDB)
        .sort((p1, p2) => (getInNewDB(p1) > getInNewDB(p2) ? 1 : -1))
        .map(projet => (
          <NewDatabaseItem
            key={projet.id}
            getHeight={getMaterialHeightPageBDD}
            forNewBdd
            images={[getProjetMaterialImageForNewBDDPage(images, projet)]}
            visible
            {...projet}
          />
        ))}
    </Layout>
  )
}

export default Projets
