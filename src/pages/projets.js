import React from "react"
import {
  getProjetMaterialImageForProjetsPage,
  getInProjects,
  getClassementPageProjets,
  getMaterialHeightPageProjets,
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
      {projets
        .filter(getInProjects)
        .sort((p1, p2) =>
          Number(getClassementPageProjets(p1)) >
          Number(getClassementPageProjets(p2))
            ? -1
            : 1
        )
        .map(p1 => {
          console.log(p1)
          return p1
        })
        .map(projet => (
          <ProjetMaterialIcon
            key={projet.id}
            getHeight={getMaterialHeightPageProjets}
            images={[getProjetMaterialImageForProjetsPage(images, projet)]}
            setVisible={setVisibleProjet}
            visible={visibleProjet === projet.id}
            {...projet}
          />
        ))}
    </Layout>
  )
}

export default Projets
