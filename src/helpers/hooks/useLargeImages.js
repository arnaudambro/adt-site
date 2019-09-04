import { useStaticQuery, graphql } from "gatsby"

const useLargeImages = () => {
  const {
    allImageSharp:{edges: images },
  } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
    return images;
}

export default useLargeImages
