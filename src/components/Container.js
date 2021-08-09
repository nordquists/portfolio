import React from 'react'
import { ContainerWrapper } from "../elements"
import { Header, Footer } from "../components"

export const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            {/* <Header /> */}
            { children }
            <Footer />
        </ContainerWrapper>
    )
}
