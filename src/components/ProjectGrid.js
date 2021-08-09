import React from 'react'
import { CardContainer, CardContainerWrapper } from '../elements'
import { ProjectCard } from '../components'

export const ProjectGrid = (props) => {
    return (
        <CardContainerWrapper>
            <CardContainer>
                { props.projects.map(project => {
                    project = project.node
                    return (<ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                        color={project.color}
                        margin={project.margin}
                        wide={project.wide}
                        wideImageData={project.wideImage}
                    />)
                }) }
            </CardContainer>
        </CardContainerWrapper>
    )
}

