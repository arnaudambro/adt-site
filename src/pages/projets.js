import React from "react"
import { getProjetMaterialImageForProjetsPage } from '../helpers/selectors'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjetMaterialIcon from "../components/projetMaterialIcon";
import useProjetsDataAndImages from "../helpers/hooks/useProjetsDataAndImages";
import theme from "../styles/theme";

const Projets = () => {
  const { projets, images } = useProjetsDataAndImages()
  const [visibleProjet, setVisibleProjet] = React.useState(null)

  return <Layout arrowWidth={theme.width.desktop.material} >
    <SEO title="Projets" />
    {projets

    .map(projet => (
      <ProjetMaterialIcon
        key={projet.id}
        images={[getProjetMaterialImageForProjetsPage(images, projet)]}
        setVisible={setVisibleProjet}
        visible={visibleProjet === projet.id}
        {...projet}
        />
    ))}
  </Layout>
}


export default Projets

