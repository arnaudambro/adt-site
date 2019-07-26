
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

export const projetsQuery = graphql`
  fragment AllProjets on ProjetsJsonEdge {
    projet: node {
      id
      properties {
        size
        material
        dates {
          win
          delivery
        }
        description
        madeBy
        madeFor
        city
        departmentName
        departmentNumber
        country
        function
        phasesWorked
        status
      }
      presentation {
        image
        height
      }
      title
    }
  }
`
