import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layouts/layout"
import ProjectGrid from "../components/project-grid/ProjectGrid";
import { Introduction } from "../components/introduction/Introduction";
import { Footer } from "../components/footer/Footer";



export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            description
            urls
            key
            image {
              childImageSharp {
                fluid {
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

  return(
    <Layout>
      <Introduction/>
      <ProjectGrid projects={projects}/>
      <Footer/>
    </Layout>

  );
}
