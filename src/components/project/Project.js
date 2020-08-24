import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components';

const Img = styled(Image)`
`

const ProjectLink = styled.a`
    text-decoration: none;

    &:hover {
        color: #3FA9F5;
    }
`

const CardWrapper = styled.div`
    width: 100%;
    // max-width: 25rem;
`

const Heading = styled.div`

`

const Title = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.02em;

    color: #222;

    margin-top: 12px;
`

const Description = styled.h2`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    color: #8F8F8F;

    margin-top: 5px;
    margin-bottom: 10px;
`

const LinksWrapper = styled.div`
    font-family: Source Sans Pro;
    font-style: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;

    color: #222222;

    display: flex;
    flex-direction: column;
    
    margin-top: 20px;
`

const Link = styled.a`
    width: fit-content;

    font-weight: 600;
    color: #222222;

    margin-bottom: 10px;

    cursor: pointer;
    transition: 200ms;
    text-decoration: none;

    &:hover {
        color: #3FA9F5;
    }
    &:active {
        color: #3FA9F5;
    }
`

const Project = ({ title, description, imageData, urls }) => {
    return (
        <CardWrapper>
            <ProjectLink href={urls[1][1]}>
                <Img fluid={imageData} alt={title}/>
                <Heading>
                    <Title>
                        {title}
                    </Title>
                    <Description>
                        {description}
                    </Description>
                </Heading>
            </ProjectLink>
            <LinksWrapper>
                {urls.map(url => {
                    return <Link href={url[1]}>{url[0]}</Link>
                })}
            </LinksWrapper>
        </CardWrapper>
    )
}

export default Project
