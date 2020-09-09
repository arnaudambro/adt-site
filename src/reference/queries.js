import { graphql } from "gatsby"

export const imagesQuery = graphql`
  fragment AllImages on ImageSharpEdge {
    node {
      id
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const projetsDataQuery = graphql`
  fragment AllProjetsData on DataXlsx__2020Edge {
    node {
      annee_page_bdd_YYYY
      classement_page_projets
      code_projet
      collab
      departement_code
      departement_nom
      description
      empty
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
`
