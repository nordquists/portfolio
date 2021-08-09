import styled from "styled-components"

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3rem repeat(16, minmax(auto, 4.2rem)) 3rem 1fr;
    // grid-template-rows: 1.4rem auto;
    grid-template-rows: auto;
    // grid-gap: 0 2rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 5rem repeat(6, 1fr) 5rem;
    }

    @media ${props => props.theme.breakpoints.stablet} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    }
    
`