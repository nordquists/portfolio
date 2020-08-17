import React from 'react'

import styled from 'styled-components';

const IntroductionWrapper = styled.div`
    width: 100%;
    max-width: 27rem;

    padding-top: 30px;
    margin-bottom: 40px;
`

const Name = styled.h1`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.02em;

    color: #222222;

    margin-top: 20px;
    margin-bottom: 20px;
`

const Description = styled.h2`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 175%;
    /* or 31px */

    color: #222222;

    margin-top: 20px;
    margin-bottom: 20px;
`

const LinksWrapper = styled.div`
    font-family: Source Sans Pro;
    font-style: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;

    color: #222222;

    display: flex;
    flex-direction: column;
    
    margin-top: 50px;
`

const Link = styled.a`
    width: fit-content;

    font-weight: 600;
    color: #222222;

    margin-bottom: 7px;

    cursor: pointer;
    transition: 200ms;
    text-decoration: none;

    // text-shadow:
    // -2px -2px white,
    // -2px 2px white,
    // 2px -2px white,
    // 2px 2px white;

    // background-size: 1px 1em;
    // box-shadow:
    // inset 0 -0.175em white,
    // inset 0 -0.2em #000;
    // display: inline;

    &:hover {
        color: #3FA9F5;
    }
    &:active {
        color: #3FA9F5;
    }
`

export const Introduction = () => {
    return (
        <IntroductionWrapper>
            <Name>
                Sean Nordquist
            </Name>
            <Description>
                I am Computer Science and Economics Student at New York University. Currently, I am helping people enjoy memorizing with <Link>Cram.</Link>
            </Description>
            <LinksWrapper>
                <Link href="mailto:sean@nordquists.com">sean@nordquists.com</Link>
                <Link href="https://www.linkedin.com/in/seannordquist/">linkedin</Link>
                <Link href="https://github.com/nordquists">github</Link>
            </LinksWrapper>
        </IntroductionWrapper>
    )
}
