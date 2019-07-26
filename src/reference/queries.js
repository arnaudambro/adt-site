
import { graphql } from "gatsby"

export const query = graphql`
  fragment AllImages on ImageSharpEdge {
    node {
    id
    fluid {
      ...GatsbyImageSharpFluid
    }
    }
  }
`
