import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import Theme from "./src/themes/theme"
import { Table, InlineContainer, InlineImage, Truecaser, MachineOutput, ResponsiveStacker } from "./src/components"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.main1};
    }
`

const components = {
    table: Table,
    InlineContainer,
    InlineImage,
    Truecaser,
    MachineOutput,
    ResponsiveStacker
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            { element }
        </ThemeProvider>
    </MDXProvider>
)