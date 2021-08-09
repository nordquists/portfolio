import * as React from "react"
import { Bio, Container, ProjectGrid } from "../components"
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from "react-helmet"
import favicon from '../../static/favicon.ico'

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
        <Helmet>
              <meta charSet="utf-8"/>
              <meta name="Description" content="Sean Nordquist is a developer studying Computer Science and Economics at New York University."/>
              <title>Sean Nordquist</title>
              <link rel="canonical" href="https://www.nordquists.com" />
              <link rel="icon" href={favicon} />
              <script type="application/ld+json">
                  {`
                      {
                      "@context": "https://schema.org",
                      "@type": "Person",
                      "url": "https://www.nordquists.com",
                      "name": "Sean Nordquist",
                      "jobTitle": "Student at New York University",
                      "alumniOf": "New York University",
                      "sameAs": [
                          "https://www.linkedin.com/in/seannordquist/",
                          "https://github.com/nordquists"
                      ]
                      }
                  `}
              </script>
        </Helmet>
      <Bio />
      <ProjectGrid projects={projects}/>
    </Container>
  )
}

export default IndexPage
