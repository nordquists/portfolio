exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
        query PostQuery {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                        id
                    }
                }   
            }
        }
    `)

    // const postPerPage = 3

    // const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

    // Array.from({length: numPages}).forEach((_, i) => {
    //     actions.createPages({
    //         path: i === 0 ? `/` : `/${i + 1}`,
    //         component: require.resolve("./src/templates/allPosts.js"),
    //         context: {
    //             limit: postPerPage,
    //             skip: i * postPerPage,
    //             numPages,
    //             currentPage: i + 1
    //         }
    //     })
    // })

    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug
        const id = edge.node.id
        actions.createPage({
            path: slug, 
            component: require.resolve(`./src/templates/post.js`),
            context: {
                id
            }
        })
    })
}

const path = require("path")

const getFileNode = (options) => (source, _, context, info) => {
  const { fieldName } = info
  const partialPath = source[fieldName]

  if (!partialPath) {
    return null
  }

  const filePath = path.join(__dirname, options.path, partialPath)

  const fileNode = context.nodeModel.runQuery({
    firstOnly: true,
    type: 'File',
    query: {
      filter: {
        absolutePath: {
          eq: filePath
        }
      }
    }
  })

  if (!fileNode) {
    return null
  }

  return fileNode
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: "fileByAbsolutePath",
    args: {
      path: {
        type: "String!",
        defaultValue: ""
      }
    },
    extend: (options) => ({
      resolve: getFileNode(options)
    })
  })

  createTypes(`
    type LocalContentCities implements Node {
      image: File @fileByAbsolutePath(path: "src/images")
    }
  `)
}