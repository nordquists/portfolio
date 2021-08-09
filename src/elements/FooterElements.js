import styled from "styled-components"

export const FooterComponent = styled.footer`
    grid-column: 1 / span 20;
    display: inherit;
    
    // @media ${props => props.theme.breakpoints.tablet} {
    //     grid-column: 1 / 10;
    // }

    grid-template-columns: inherit;
    // grid-template-rows: inherit;

    min-height: 14rem;
    padding: 4rem 0;
    background-color: ${ props => props.theme.colors.main2 };
`

export const FooterWrapper = styled.div`
    grid-column: 5 / 17;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    height: 200px;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        height: 250px;
        flex-direction: column;
    }
`

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;    

    margin-bottom: 20px;    
    position: relative;

    height: 100%;

    &:last-child {
        margin-left: auto;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        &:last-child {
            margin-left: 0;
        }
    }
`

export const FooterLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    margin-top: auto;

    @media ${props => props.theme.breakpoints.mobile} {
        flex-direction: column;
    }
`

export const FooterLink = styled.a`
    font-weight: 600;
    font-size: 14px;

    color: #FFFFFF;
`

export const FooterExperienceWrapper = styled.div`
    font-weight: 400;
    font-size: 14px;

    color: #FFFFFF;
    display: inline;
`

export const FooterName = styled.p`
    font-weight: 600;
    font-size: 1.5rem;

    color: #fff;

    margin-bottom: auto;
    
    @media ${props => props.theme.breakpoints.mobile} {
        margin-bottom: 0;
    }
`