import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { getClassementPageProjets } from './selectors'

const useProjetsDataAndImages = () => {

  const {
    allDataXlsxSheet1:{edges },
    allImageSharp:{edges: images },
  } = useStaticQuery(graphql`
    query PROJETS_AND_IMAGES {
      allDataXlsxSheet1 {
        edges {
          node {
            annee_page_bdd_YYYY
            classement_page_projets
            code_projet
            collab
            departement_code
            departement_nom
            description
            fonction
            hauteur_page_bdd_px
            hauteur_page_projets_px
            livraison_YYYY_MM_DD
            matiere
            matiere_page_bdd
            mission
            nom
            nom_fichier_page_bdd
            nom_fichier_page_projets
            pays
            prix_eur
            programme
            surface_m2
            ville
            id
          }
        }
      }
      allImageSharp {
        edges {
          node {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const projets =
  edges
  .map(({ node }) => node)
  .sort(
    (a, b) =>
    getClassementPageProjets(a) > getClassementPageProjets(b) ? -1 : 1
    )

    return { projets, images }

}

const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);

  React.useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export {
  useProjetsDataAndImages,
  useWindowSize
}
