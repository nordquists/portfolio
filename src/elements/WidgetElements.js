import styled from "styled-components"

export const MachineOutputWrapper = styled.div`
    padding: 20px;
    // margin: 20px;
    // min-width: 400px;
`

export const MachineOutputSubExample = styled.div``

export const TruecasedText = styled.div`
    padding-left: 10px;
    padding-top: 1rem;
    font-size: 1.5rem;
    height: 50px;

`

export const ContainerDescription = styled.p`
    margin-top: 0 !important;
    margin-bottom: 2.5rem !important;
    font-family: Inter !important; 
    margin-left: 19%;
    max-width: 63%;

    @media ${props => props.theme.breakpoints.xtablet} {
        margin-left: 13%;
    }

    @media ${props => props.theme.breakpoints.stablet} {
        margin-left: 0%;
        padding-left: 10px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        margin-left: 0%;
    }
`

export const ProgressBar = styled.div`
    height: 5px;
    width: 100%;
    background: #DFDFDF;
`

export const ProgressBarInner = styled.div`
    height: 100%;
    width: ${props => props.percent}%;
    background: ${props => props.color};
`


export const ResponsiveStackerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    @media ${props => props.theme.breakpoints.mobile} {
        flex-direction: column;
    }

    width: 100%;

`