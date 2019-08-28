import { useStaticQuery, graphql } from "gatsby"

const useImages = () => {
  const {
    allImageSharp:{edges: images },
  } = useStaticQuery(graphql`
    query {
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

    return images;
}

export default useImages
