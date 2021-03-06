import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

const Atelier = () => {
  const {
    allAtelierJson: { edges: atelier },
    allImageSharp: { edges: images },
  } = useStaticQuery(graphql`
    query AtelierQuery {
      allAtelierJson {
        edges {
          node {
            id
            content
            src
            type
            style
          }
        }
      }
      allImageSharp(
        filter: { fluid: { src: { regex: "/ATELIER|Triangle/" } } }
      ) {
        edges {
          ...AllImages
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Atelier" />
      <Content
        forceOpen
        nodes={atelier.map(({ node }) => node)}
        images={images}
        open
      />
    </Layout>
  )
}

export default Atelier
