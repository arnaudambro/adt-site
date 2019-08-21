/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projetPage = path.resolve(`src/templates/projet.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query {
      allProjetsJson {
        edges {
          node {
            title
            code_projet
            content {
              content
              image
              section
              src
              type
            }
          }
        }
      }
    }`)
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Create blog post pages.
      result.data.allProjetsJson.edges.forEach(({ node: projet }) => {
        createPage({
          // Path for this page — required
          path: 'projet/' + projet.code_projet,
          component: projetPage,
          context: {
            projet
          },
        })
      })
  })
}
