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
