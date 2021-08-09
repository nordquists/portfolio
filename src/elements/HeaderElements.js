import styled from "styled-components"

export const Nav = styled.nav`
    grid-column: 1 / span 20;
    display: inherit;
    
    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / 10;
    }

    grid-template-columns: inherit;
    grid-template-rows: 1.3rem;

    background-color: ${ props => props.theme.colors.main2 };
`

export const NavWrapper = styled.div`
    grid-column: 3 / span 15;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    color: white;

    div:first-child {
        border-left: none;
        padding-left: 0;
  }
`

export const NavItem = styled.div`
  border-left: 1px solid #b3b3b3;
  padding: 0 15px;


  display: inline-block;
  position: relative;
  outline-offset: 2px;
  line-height: 0.7;
//   margin: 0 10px;
  display: flex;
  align-items: center;

`