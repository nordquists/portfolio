import styled from "styled-components"
import { Breadcrumb } from 'antd'

export const PostComponent = styled.main`
    grid-column: 1 / span 20;
    display: inherit;

    grid-template-columns: inherit;
    // grid-template-rows: auto auto;

    transition: 200ms;
`

export const PostWrapper = styled.div`
    margin: 2rem 0;

    grid-column: 6 / span 10;
    position: relative;

    @media ${props => props.theme.breakpoints.xtablet} {
        grid-column: 5 / span 12;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 2 / span 6;
    }

    h1,h2,h3,h4,h5,h6 {
        color: ${props => props.theme.colors.main2};;
        margin-top: 2rem;
        margin-bottom: 0;
    }
    h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 400;
    }
    h2 {
        font-size: 1.5rem;
        line-height: 1.875rem;
        font-weight: 400;
    }
    h3 {
        font-size: 1.375rem;
        line-height: 1.625rem;
        font-weight: 600;
    }
    h4 {
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    h5 {
        font-size: 1.125rem;
        line-height: 1.1375rem;
        font-weight: 600;
    }
    h6 {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    p {
        font-family: Newsreader, serif;
        font-size: 1.125rem;
        line-height: 1.875rem;
        font-weight: 400;
        color: ${props => props.theme.colors.main2};
        margin-top: 2rem;
        margin-bottom: 0;
    }
    a {
        color: #000;
        text-decoration: underline;
    }
    & .footnote-ref, .footnote-backref {
        text-decoration: none;
    }
    strong {
        font-weight: 600;
    }
    em {
        font-style: italic;
    }
    hr {
        border: 0;
        height: 1px;
        background: #000;
        opacity: 0.1;
        margin-top: 2rem;
    }

    aside {
        font-family: Inter, sans-serif;
        transform: translateX(100%);
        display: block;
        position: absolute;
        
        right: 0;
        font-size: .75rem;
        color: ${props => props.theme.colors.light2};

        padding: 0 0.5rem;

        width: 15rem;

        line-height: 1.25rem;

        @media ${props => props.theme.breakpoints.xtablet} {
            display: none;
        }
    }

    // table {
    //     width: 100%;
    //     border-spacing: 0.25rem;
    //     border-collapse: collapse;
    //     font-size: 1rem;
    //     line-height: 1.5rem;
    //     font-weight: 400;
    // }
// 
    // th {
    //     font-weight: 600;
    // }

    // table, th, td {
    //     // border: 1px solid ${props => props.theme.colors.dark1};
    //     border: 1px solid #000;
    // }

    // th, td {
    //     text-align: left;
    //     padding: 0.5rem;
    // }


`

export const PostFeatureWrapper = styled.div`
    background: ${props => props.gradient};

    grid-column: 1 / span 20;
    display: inherit;
    
    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1 / 10;
    }

    grid-template-columns: inherit;
    grid-template-rows: auto auto;
`

export const PostFeatureSection = styled.div`
    grid-column: 3 / span 16;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    display: grid;
    // grid-template-columns: 30rem 1fr;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: auto auto;

    // padding-top: 3rem;
    // padding-bottom: 1rem;
    padding: 3rem 0;

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;

        padding: 2rem 0;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;

        padding: 1rem 0;
    }
`

export const PostTitleSection = styled.div`
    grid-column: 1 / 1;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.breakpoints.mobile} {
        grid-row: 2 / 2;
    }
`

export const PostLinkSection = styled.div`
    margin-top: 2rem;
    & a {
        margin-right: 1rem;
    }
`

export const PostReadTimeAndDate = styled.div`
    position: relative;
    margin-top: auto;
    padding-top: 8rem;
`

export const PostFeatureImage = styled.div``


export const PostBreadcrumb = styled.div`
    margin-bottom: 2rem;
`

export const CustomBreadcrumb = styled(Breadcrumb)`
    color: black;

    span:last-child {
        font-weight: 600 !important;
    }

    & .ant-breadcrumb-separator {
        color: black !important;
        font-weight: 500 !important;
    }

`

export const CustomBreadcrumbItem = styled(Breadcrumb.Item)`
    color: black;
    
    & a {
        color: black !important;
    }
`

export const SubContainerWrapper = styled.div`
    // margin: 0; 
    // padding: 0;
    background-color: ${props => props.color};;
    // margin: 4rem 0;
    // left: 50%;
    // transform: translateX(-50vw);

    // position: relative;
    // width: 100vw;

    // @media ${props => props.theme.breakpoints.xtablet} {
    //     left: 50%;
    //     transform: translateX(-50vw);
    // }

    // @media ${props => props.theme.breakpoints.tablet} {
    //     left: 60%;
    //     transform: translateX(-50vw);
    // }

    // @media ${props => props.theme.breakpoints.mobile} {
    //     left: 0;
    //     transform: translateX(-3.9333333333vw);
    // }

    position: relative;
    width: 100vw;
    left: 0;
    transform: translateX(-3.3333333333vw);
    margin-top: 4.2rem;
    margin-bottom: 4.2rem;

    @media ${props => props.theme.breakpoints.minmobile} {
        transform: translateX(-3.3333333333vw);
    }

    @media ${props => props.theme.breakpoints.minstablet} {
        left: 50%;
        -webkit-transform: translateX(-50vw);
        transform: translateX(-50vw);
    }

    
`

export const SubContainer = styled.div`
    width: 93.3333333333%;
    max-width: 1200px;
    margin: 0 auto;

    padding: 3rem 0;
`