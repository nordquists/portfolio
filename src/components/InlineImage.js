import React from 'react'
import { InlineImageWrapper } from '../elements'

export const InlineImage = ({children}) => {
    return (
        <InlineImageWrapper>
        { children }
        </InlineImageWrapper>
    )
}


// {/* <div style="width: 93.3333333333vw; transform: translateX(calc(46.6666666667vw - 50%)); margin-left: calc(50% - 46.6666666667vw); padding: 0 2rem;">

// ![Nature](IMG_1561.jpeg)
// ![Nature](IMG_1561.jpeg)

// </div> */}