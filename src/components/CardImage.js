import React from 'react'
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CardImageWrapper, ExpandingImage, CardImageWrapperInner, CardImageWrapperWide, ExpandingImageWide, ExpandingImageThin } from "../elements"

export const CardImage = ({ imageData, color, margin, wide, wideImageData }) => {    
    return (
        <>
        { wide && 
            <CardImageWrapperWide color={color}>
                <CardImageWrapperInner>
                    <ExpandingImageWide 
                        margin={margin}
                        fluid={wideImageData.childImageSharp.fluid} 
                    />
                    <ExpandingImageThin 
                        margin={margin}
                        fluid={imageData.childImageSharp.fluid} 
                    />
                </CardImageWrapperInner>
            </CardImageWrapperWide>
        }
        { !wide && 
            <CardImageWrapper color={color}>
                <CardImageWrapperInner>
                    <ExpandingImage 
                        margin={margin}
                        fluid={imageData.childImageSharp.fluid} 
                    />
                </CardImageWrapperInner>
            </CardImageWrapper>
        }
        </>
    )
}
