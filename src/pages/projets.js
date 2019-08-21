import React from "react"

import { getProjetMaterialImageForProjetsPage } from '../helpers/selectors'
import { useProjetsDataAndImages } from "../helpers/hooks";

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjetMaterialIcon from "../components/projetMaterialIcon";

const Projets = () => {
  const [visibleProjet, setVisibleProjet] = React.useState(null)

  const { projets, images } = useProjetsDataAndImages()

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

