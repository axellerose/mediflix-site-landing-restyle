const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")
// const { fmImagesToRelative } = require("gatsby-remark-relative-images")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "pages" }, extension: { eq: "md" } }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                path
                templateKey
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    const pages = result.data.allFile.edges

    pages.forEach(({ node }) => {
      let component, pathName
      pathName = node.childMarkdownRemark.frontmatter.path
      const templateKey = String(
        node.childMarkdownRemark.frontmatter.templateKey
      )
      component = path.resolve(
        `src/page-components/${templateKey}/${templateKey}.tsx`
      )
      createPage({
        path: pathName,
        component,
        // additional data can be passed via context
        context: {
          id: node.id,
        },
      })
    })
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   fmImagesToRelative(node)

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
