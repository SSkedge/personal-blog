import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";
import { BackgroundGradient, GradientBar } from "./src/components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colours.light1};
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <BackgroundGradient />
        <GradientBar />
        {element}
    </ThemeProvider>
)