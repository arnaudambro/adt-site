import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Content from "../components/content";
import Layout from "../components/layout"
import SEO from "../components/seo"

const Infos = () => {
  const { allInfosJson:{edges: infos }} = useStaticQuery(graphql`
    query {
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
  return(
    <Layout>
      <SEO title="Infos" />
      <Content nodes={infos.map(({ node }) => node)} />
    </Layout>
  )

}


export default Infos
