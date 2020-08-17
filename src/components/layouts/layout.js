import React from 'react'
import styled from 'styled-components';
import { Footer } from '../footer/Footer';

const LayoutStyled = styled.div`
    width: calc(100% - 6rem);
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 3rem;

    #main-content {
        width: 100%;
        max-width: 55rem;
        padding: 0 2.5rem;
    }
`

const Header = styled.header`
    background-color: #555;
`



export const Layout = ({ children }) => {
    return (
        <LayoutStyled>
            <main id="main-content">{ children }</main>
            {/* <Footer/> */}
        </LayoutStyled>
    )
}

export default Layout;