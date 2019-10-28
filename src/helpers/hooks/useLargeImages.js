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
            fluid(maxWidth: 3600, quality: 100) {
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
