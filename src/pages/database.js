import React from "react"
import {
  getProjetMaterialImageForNewBDDPage,
  getInNewDB,
} from "../helpers/selectors"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjetMaterialIcon from "../components/projetMaterialIcon"
import useProjetsDataAndImages from "../helpers/hooks/useProjetsDataAndImages"
import theme from "../styles/theme"

const Projets = ({ noTitle }) => {
  const { projets, images } = useProjetsDataAndImages()
  return (
    <Layout arrowWidth={theme.width.desktop.material}>
      <SEO title={noTitle ? null : "Projets"} />
      {projets
        .filter(getInNewDB)
        .sort((p1, p2) => getInNewDB(p1) > getInNewDB(p2))
        .map(projet => (
          <ProjetMaterialIcon
            key={projet.id}
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
