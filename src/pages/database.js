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
  const [visibleProjet, setVisibleProjet] = React.useState(null)

  return (
    <Layout arrowWidth={theme.width.desktop.material}>
      <SEO title={noTitle ? null : "Projets"} />
      {projets.filter(getInNewDB).map(projet => (
        <ProjetMaterialIcon
          key={projet.id}
          forNewBdd
          images={[getProjetMaterialImageForNewBDDPage(images, projet)]}
          setVisible={setVisibleProjet}
          visible
          {...projet}
        />
      ))}
    </Layout>
  )
}

export default Projets
