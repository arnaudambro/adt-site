import { useStaticQuery, graphql } from "gatsby"

const useMP4 = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "mp4" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  return edges.map(({ node }) => node.publicURL)[0]
}

export default useMP4
