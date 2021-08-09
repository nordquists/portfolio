import React from 'react'
import { CardWrapper, Text, Title, Subtitle, IconButton, ButtonIcon, LearnMoreLink, CardWrapperInner } from '../elements'
import { RightOutlined } from '@ant-design/icons'
import { CardImage } from './CardImage'

export const ProjectCard = ({ title, description, image, link, color, margin, wide, wideImageData }) => {
    return (
        <CardWrapper to={link}>
            {/* <CardWrapperInner> */}
                    <CardImage
                        imageData={image}
                        color={color}
                        margin={margin}
                        wide={wide}
                        wideImageData={wideImageData}
                    />
                    <Title>{title}</Title>
                    <Subtitle>{description}</Subtitle>
            {/* </CardWrapperInner> */}
        </CardWrapper>
    )
}
