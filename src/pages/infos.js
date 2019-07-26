import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";

const Infos = () => {
  const { allInfosJson:{edges: infos }} = useStaticQuery(graphql`
  query InfosQuery {
    allInfosJson {
      edges {
        node {
          id
          content
          section
          type
        }
      }
    }
  }
`)
  return <Layout>
    <SEO title="Infos" />
    <Content nodes={infos} />
  </Layout>
}


export default Infos
