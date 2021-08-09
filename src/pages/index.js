import * as React from "react"
import { Bio, Container, ProjectGrid } from "../components"
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectsJson {
        edges {
          node {
            description
            title
            link
            key
            color
            margin
            wide
            wideImage {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }                
              }
            }
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }                
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges;
  
  return (
    <Container>
      <Bio />
      <ProjectGrid projects={projects}/>
    </Container>
  )
}

export default IndexPage
