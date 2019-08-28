import React from "react"
import { getProjetMaterialImageForProjetsPage } from '../helpers/selectors'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjetMaterialIcon from "../components/projetMaterialIcon";
import useProjetsDataAndImages from "../helpers/hooks/useProjetsDataAndImages";

const Projets = () => {
  const { projets, images } = useProjetsDataAndImages()
  const [visibleProjet, setVisibleProjet] = React.useState(null)

  return <Layout >
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

