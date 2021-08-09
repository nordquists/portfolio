import styled from "styled-components"


export const BioBody = styled.div`
    // grid-column:   4/ 18;
    grid-column:   5/ 13;

    margin-top: 5rem;
    margin-bottom: 1rem;
    // margin-left: 1.5rem;
    // margin-right: 1.5rem;


    @media ${props => props.theme.breakpoints.tablet} {
        grid-column:   2 / 6;
    }

    @media ${props => props.theme.breakpoints.stablet} {
        grid-column:   2 / 6;
    }

`

export const Name = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;

    color: #444;
    margin: 0;
    // margin-bottom: 20px;
`

export const BioText = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.8;

    color: #999;
    margin-bottom: 20px;

    text-align: justify;
    text-justify: inter-word;
`