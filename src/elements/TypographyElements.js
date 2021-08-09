import styled from "styled-components"

export const P = styled.p`
    margin: ${props => props.margin ? props.margin : '0'} !important;
    font-size: ${props => {
        switch(props.size) {
            case "large":
                return "1.3rem"
            case "medium":
                return "1.125rem"
            case "small":
                return "1rem"
            case "xsmall":
                return "0.875rem"
            default:
                return "1.125rem"
        }
    }} !important;
    line-height: ${props => {
        switch(props.size) {
            case "medium":
                return "1.4375rem"
            case "small":
                return "1.375rem"
            case "xsmall":
                return "1.125rem"
            default:
                return "1.4375rem"
        }
    }};
    text-decoration: ${props => props.textDecoration ? props.textDecoration : "none"} !important;
    font-weight: ${props => {
        switch(props.weight) {
            case "thin":
                return 300
            case "normal":
                return 400
            case "semibold":
                return 500
            case "bold":
                return 600
            default:
                return 400
        }
    }} !important;
    color: ${props => {
        switch(props.color) {
            case "main1":
                return props.theme.colors.main1
            case "main2":
                return props.theme.colors.main2
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            case "dark1":
                return props.theme.colors.dark1
            default:
                return "#000"
        }
    }} !important; 
    font-family: Inter !important;
`

export const H1 = styled.h1`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 2.4rem;
    line-height: 2.9rem;
    font-weight: 600;

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 2.75rem;
        line-height: 2.8rem;
    }

    color: ${props => {
        switch(props.color) {
            case "main1":
                return props.theme.colors.main1
            case "main2":
                return props.theme.colors.main2
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            case "dark1":
                return props.theme.colors.dark1
            default:
                return "#000"
        }
    }};
`

export const H2 = styled.h2`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 1.3rem;
    line-height: 1.75rem;
    font-weight: 400;

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 1.35rem;
        line-height: 1.5rem;
    }

    color: ${props => {
        switch(props.color) {
            case "main1":
                return props.theme.colors.main1
            case "main2":
                return props.theme.colors.main2
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            case "dark1":
                return props.theme.colors.dark1
            default:
                return "#000"
        }
    }};
`

export const H4 = styled.h4`
    margin: ${props => props.margin ? props.margin : '0'} !important;
    font-size: 0.8rem !important;
    line-height: 1rem !important;
    letter-spacing: 0.04em !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 1.35rem;
        line-height: 1.5rem;
    }

    color: ${props => {
        switch(props.color) {
            case "main1":
                return props.theme.colors.main1
            case "main2":
                return props.theme.colors.main2
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            case "dark1":
                return props.theme.colors.dark1
            default:
                return "#000"
        }
    }} !important;
`

export const Link = styled.a`
    margin: ${props => props.margin ? props.margin : '0'};

    font-weight: ${props => {
        switch(props.weight) {
            case "normal":
                return 400
            case "semibold":
                return 500
            case "bold":
                return 600
            default:
                return 400
        }
    }};
    font-size: 14px;

    color: #FFFFFF;

    // display: flex;
    // flex-direction: row;
    // align-items: center;
`

export const LinkButton = styled.a`
    background: rgba(196, 196, 196, 0.3);
    backdrop-filter: blur(4px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;

    font-weight: 500;
    font-size: 12px;

    color: #000;
    text-decoration: none;

    padding 0.4rem 1.4rem;

    &:hover {
        color: #000;
        opacity: .6;
    }

    transition: 200ms;
`

export const Icon = styled.img`
  display: inline-block;
  background-repeat: no-repeat;

  width: 12px;
  height: 12px;

  stroke: #fff;

  margin: 0;
  margin-left: 5px;
  padding: 0;
//   margin-right: 7px
  position: relative;

//   top: 1px;
  right: 5px;

  // line-height: initial;
`

export const IconButton = styled.p`
    text-decoration: none;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;

    color: #555;

    display: flex;
    flex-direction: row;

    margin: 0;
`

export const ButtonIcon = styled.div`
    margin-left: 0.2rem;
    margin-top: 1px;
    transform: scale(0.8);
`

export const HR = styled.hr`
    margin: 10px 0 0 0 !important;
`