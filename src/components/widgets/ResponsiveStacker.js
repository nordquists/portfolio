import React from 'react'
import { ResponsiveStackerWrapper } from '../../elements'
import { InlineContainer } from '../InlineContainer'

export const ResponsiveStacker = ({children}) => {
    return (
        <InlineContainer>
            <ResponsiveStackerWrapper>
                {children}
            </ResponsiveStackerWrapper>
        </InlineContainer>
    )
}
