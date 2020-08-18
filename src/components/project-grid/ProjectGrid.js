import React from 'react'
import styled from 'styled-components';
import media from "styled-media-query";
import Project from '../project/Project';

const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 40px;

    ${media.lessThan("medium")`
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: 1fr;
        
    `}
`



export const ProjectGrid = ({ projects }) => {
    return (
        <ProjectWrapper>
                {projects.map(({ node: project }) => {
                    const title = project.title;
                    const description = project.description;
                    const imageData = project.image.childImageSharp.fluid;
                    const urls = project.urls;
                    const key = project.key;

                    return (
                        <Project
                        key={key}
                        title={title}
                        description={description}
                        imageData={imageData}
                        urls={urls}
                    />
                    );
                })}
        </ProjectWrapper>
    )
}

export default ProjectGrid;