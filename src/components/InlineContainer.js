import React from 'react'
import { SubContainer, SubContainerWrapper } from '../elements'

export const InlineContainer = ({color, children}) => {
    return (
        <SubContainerWrapper color={color}>
            <SubContainer>
            {children}
            </SubContainer>
        </SubContainerWrapper> 
    )
}
