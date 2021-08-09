import styled from "styled-components"
import Image from 'gatsby-image'

export const FeatureImageWrapper = styled.div`
    margin-left: 2rem;
    margin-top: 3.5rem;
    position: relative;
    grid-column: 2 / 2;
    // grid-row: 2 / 4;
    // max-width: calc(100% - 4rem);
    width: calc(100% - 2rem);
    height: 100%;

    @media ${props => props.theme.breakpoints.tablet} {
        margin-left: 2rem;
        max-width: calc(100% - 2rem);
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1 / 1;
        grid-row: 1 / 1;

        margin-left: 0;
        // margin-bottom: 2rem;

        // max-width: calc(100% - 4rem);
        max-width: 100%;
        width: 100%;
        height: 100%;

        margin-bottom: 2rem;
        margin-top: 0;
    }
`

export const FeatureImage = styled.div`


`

export const ImageWrapper = styled.div`
    margin-left: auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 0 25px rgb(0 0 0 / 15%);
    border-radius: 3px;

    background-color: white;
    
    padding: 14%;

    @media ${props => props.theme.breakpoints.mobile} {
        margin-left: 0;
    }
`

export const CardImageWrapperWide = styled.div`
    position: relative;
    overflow: hidden;

    background: ${props => props.color};

    box-shadow: inset 0px 4px 14px 2px rgba(0, 0, 0, 0.01);

    height: 100%;
    width: 100%;

    &:before {
        content: "";
        display: block;
        padding-top: 50%;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        &:before {
            content: "";
            display: block;
            padding-top: 100%;
        }
    }
`

export const CardImageWrapper = styled.div`
    position: relative;
    overflow: hidden;

    background: ${props => props.color};

    box-shadow: inset 0px 4px 14px 2px rgba(0, 0, 0, 0.01);

    height: 100%;
    width: 100%;

    &:before {
        content: "";
        display: block;
        padding-top: 100%;
    }
`

export const CardImageWrapperInner = styled.div`
    position: absolute;
    top:      0;
    left:     0;
    bottom:   0;
    right:    0;
`

export const ExpandingImage = styled(Image)`

    // margin: 30px;
    // margin-bottom: 0;
    // margin-top: 28px;
    // margin-left: 50px;
    // margin-right: 50px;
    margin: ${props => props.margin};

    border-radius: 5px;

    // box-shadow: 0 0 25px rgb(5 5 5 / 15%);
`

export const ExpandingImageWide = styled(Image)`

    // margin: 30px;
    // margin-bottom: 0;
    // margin-top: 28px;
    // margin-left: 50px;
    // margin-right: 50px;
    margin: ${props => props.margin};

    border-radius: 5px;

    // box-shadow: 0 0 25px rgb(5 5 5 / 15%);
    height: 100%;

    @media ${props => props.theme.breakpoints.mobile} {
        display: none;
    }
`

export const ExpandingImageThin = styled(Image)`

    // margin: 30px;
    // margin-bottom: 0;
    // margin-top: 28px;
    // margin-left: 50px;
    // margin-right: 50px;
    margin: ${props => props.margin};

    border-radius: 5px;

    // box-shadow: 0 0 25px rgb(5 5 5 / 15%);
    height: 100%;

    display: none;

    @media ${props => props.theme.breakpoints.mobile} {
        display: block;
    }
`

export const InlineImageWrapper = styled.div`
    width: 93.3333333333vw;
    transform: translateX(calc(46.6666666667vw - 50%)); 
    margin-left: calc(50% - 46.6666666667vw);
    padding: 0 2rem;
    max-width: 1470px;

    // @media ${props => props.theme.breakpoints.xtablet} {
    //     // padding: 0;
    //     transform: translateX(calc(46.6666666667vw - 50%)); 
    // }

    // @media ${props => props.theme.breakpoints.tablet} {
    //     // padding: 0;
    //     transform: translateX(calc(46.6666666667vw - 45%)); 
    // }

    // @media ${props => props.theme.breakpoints.mobile} {
    //     // padding: 0;
    //     transform: translateX(calc(46.6666666667vw - 50%)); 
    // }
`
