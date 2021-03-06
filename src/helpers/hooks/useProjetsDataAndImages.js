import { useStaticQuery, graphql } from "gatsby"
import { getClassementPageProjets } from "../selectors"

const useProjetsDataAndImages = () => {
  const result = useStaticQuery(graphql`
    query {
      allDataXlsx2020 {
        edges {
          node {
            annee_page_bdd_YYYY
            classement_page_projets
            classement_page_bdd
            code_projet
            collab
            collab_bdd
            client
            MOE
            departement_code
            departement_nom
            description
            description_bdd
            empty
            in_projects
            in_db
            fonction
            hauteur_page_bdd_px
            hauteur_page_projets_px
            livraison_YYYY_MM_DD
            matiere
            matiere_long
            matiere_page_bdd
            mission
            mission_long
            etat
            nom
            nom_fichier_page_bdd
            nom_fichier_page_new_bdd
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

  const {
    allDataXlsx2020: { edges },
    allImageSharp: { edges: images },
  } = result

  const projets = edges
    .map(({ node }) => node)
    .sort((a, b) =>
      getClassementPageProjets(a) > getClassementPageProjets(b) ? -1 : 1
    )

  return { projets, images }
}

export default useProjetsDataAndImages
