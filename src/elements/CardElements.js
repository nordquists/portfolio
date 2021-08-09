import styled from "styled-components"
import { Link } from "gatsby"

export const CardContainerWrapper = styled.div`
    grid-column: 5 / 17;
    display: inherit;
    
    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / 8;
    }

    // display: flex;
    // justify-content: center;
    // align-items: center;

    // min-height: calc(100vh - 7rem);

    margin-bottom: 5rem;
`

export const CardContainer = styled.div`
    max-width: 1100px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    // flex-direction: row;
    // flex-wrap: wrap;

    // margin-bottom: 5rem;

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr;
    }
`

export const CardWrapper = styled(Link)`
    // margin-right: 20px;
    // margin-bottom: 20px;

    width: 100%;
    min-width: 300px;
    height: min-content;

    transition: 200ms;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transform: scale(0.99);
    }

    &:first-child {
        grid-column: 1 / 3;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        &:first-child {
            grid-column: 1 / 1;
        }
    }

    position: relative;

    // &:before {
    //     content: "";
    //     display: block;
    //     padding-top: 100%;
    // }
`

export const CardWrapperInner = styled.div`
    position: absolute;
    top:      0;
    left:     0;
    bottom:   0;
    right:    0;
`

export const CardImage = styled.img``

export const Text = styled.div`
    margin-top: 10px;
    width: 100%;
`

export const Title = styled.h2`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.3;

    color: #111;

    margin: 0;
    margin-bottom: 4px;
    margin-top: 12px;
`


export const Subtitle = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    // line-height: 1.5;

    color: #666;

    margin: 0;
    // margin-bottom: 0.5rem;

    // text-align: justify;
    // text-justify: inter-word;
    // margin-bottom: 1rem;
`

export const LearnMoreLink = styled.a`


`