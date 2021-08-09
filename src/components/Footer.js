import React from 'react'
import { FooterComponent, FooterExperienceWrapper, FooterLinkWrapper, FooterSection, FooterWrapper, FooterName, Link } from '../elements'

export const Footer = () => {
    return (
        <FooterComponent>
            <FooterWrapper>
                <FooterSection>
                    <FooterName>
                        Sean Nordquist
                    </FooterName>
                    <FooterExperienceWrapper>
                        Current intern <Link weight="bold">@Bloomberg</Link>
                    </FooterExperienceWrapper>
                    <FooterExperienceWrapper>
                        Previous intern <Link weight="bold">@NYUIT</Link>, <Link weight="bold">@AAAEquities</Link>
                    </FooterExperienceWrapper>
                </FooterSection>
                <FooterSection>
                    <FooterLinkWrapper>
                        <Link margin="0 1.5rem 0 0" href="mailto:sean@nordquists.com">
                            sean@nordquists.com
                        </Link>
                        <Link margin="0 1.5rem 0 0" href="https://www.linkedin.com/in/seannordquist/">
                            linkedin
                        </Link>
                        <Link href="https://github.com/nordquists">
                            github
                        </Link>
                    </FooterLinkWrapper>
                </FooterSection>
            </FooterWrapper>
        </FooterComponent>
    )
}
