import React from 'react'
import styled from 'styled-components';
import { Footer } from '../footer/Footer';
import { Helmet } from "react-helmet"

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
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="Description" content="Sean Nordquist is a developer studying Computer Science and Economics at New York University."/>
                <title>Sean Nordquist</title>
                <link rel="canonical" href="https://www.nordquists.com" />
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "url": "https://www.nordquists.com",
                        "name": "Sean Nordquist",
                        "jobTitle": "Student at New York University",
                        "alumniOf": "New York University",
                        "sameAs": [
                            "https://www.linkedin.com/in/seannordquist/",
                            "https://github.com/nordquists",
                        ]
                        }
                    `}
                </script>
            </Helmet>
            <main id="main-content">{ children }</main>
        </LayoutStyled>
    )
}

export default Layout;