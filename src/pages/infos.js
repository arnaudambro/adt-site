import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Content from "../components/content"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Infos = () => {
  const {
    allInfosJson: { edges: infos },
    allImageSharp: { edges: images },
  } = useStaticQuery(graphql`
    query {
      allInfosJson {
        edges {
          node {
            id
            content
            type
            style
          }
        }
      }
      allImageSharp(filter: { fluid: { src: { regex: "/Triangle/" } } }) {
        edges {
          ...AllImages
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Infos" />
      <Content
        forceOpen
        images={images}
        nodes={infos.map(({ node }) => node)}
        open
      />
    </Layout>
  )
}

export default Infos
