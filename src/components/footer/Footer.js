import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div`
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
`

const FooterContent = styled.footer`
    padding-top: 50px;
`

const Name = styled.h1`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.02em;

    color: #222222;

    max-width: 30rem;
    width: 100%;
`

const Description = styled.h2`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 175%;
    /* or 31px */

    color: #999;

    margin-top: 20px;
    margin-bottom: 20px;

    max-width: 30rem;
    width: 100%;
`

const Divider = styled.hr`
    border-top: 0.2px #eee;
`

export const Footer = () => {
    return (
        <FooterWrapper>
            <Divider/>
            <FooterContent>
                <Description>
                    I enjoy building data-driven software and am especially fascinated by the intersection of data science and software development.
                </Description>
                <Description>
                    For outlines of my projects, visit their Github pages. To see them working in the real world, click view live.
                </Description>
                <Name>
                    – Sean Nordquist
                </Name>
            </FooterContent>
        </FooterWrapper>
    )
}
