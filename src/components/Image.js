import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { ImageWrapper } from "../elements"

export const Image = () => {
    const data = useStaticQuery(graphql`
        query {
                imageSharp(fluid: { originalName: { eq: "cram.png" }}) {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
              
        }
    
    `)
    
    return (
        <ImageWrapper>
            <Img 
                fluid={data.imageSharp.fluid} 
                // style={{
                //     width: "50%",
                //     // height: "0%"
                // }}
                />
        </ImageWrapper>
    )
}
