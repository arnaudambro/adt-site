import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  getWinDate,
  getImagePropsForGatsby,
  getImageSrcFromImages,
  getMaterialImageSrc,
} from '../helpers/selectors'
import Projet from "../components/projet";

const Projets = () => {
    const [visibleProjet, setVisibleProjet] = React.useState(null)

    const {
      allProjetsJson:{edges: projets },
      allImageSharp:{edges: images },
    } = useStaticQuery(graphql`
    query ProjetsQuery {
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

  return <Layout >
    <SEO title="Projets" />
    {projets
    .sort(
      (a, b) =>
        getWinDate(a.projet) > getWinDate(b.projet) ? -1 : 1
    )
    .map(({ projet }) => (
      <Projet
        key={projet.id}
        images={[getImagePropsForGatsby(images.find(img => getImageSrcFromImages(img).includes(getMaterialImageSrc(projet))))]}
        setVisible={setVisibleProjet}
        visible={visibleProjet === projet.id}
        {...projet}
        />
    ))}
  </Layout>
}


export default Projets

