import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";
import { BackgroundGradient, GradientBar } from "./src/components";
import { preToCodeBlock } from "mdx-utils";
import { MDXProvider } from "@mdx-js/react";
import { Code, Table } from "./src/components"

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

    .gatsby-highlight {
        position: relative;
        -webkit-overflow-scrolling: touch;
    }
    
    .gatsby-highlight:not(:last-child) {
        margin-top: 2rem;
    }
    
    .gatsby-highlight pre[class*="language-"] {
        -webkit-overflow-scrolling: touch;
        padding: 1rem 0.75rem;
        border-radius: 0.25rem;
    }
    .gatsby-highlight pre[class*="language-"]::before {
        background: black;
        border-radius: 0 0 0.25rem 0.25rem;
        color: white;
        font-size: 12px;
        letter-spacing: 0.025rem;
        padding: 0.1rem 0.5rem;
        position: absolute;
        right: 1rem;
        text-align: right;
        text-transform: uppercase;
        top: 0;
    }
    .gatsby-highlight pre[class~="language-javascript"]::before {
        content: "js";
        background: #f7df1e;
        color: black;
    }
    .gatsby-highlight pre[class~="language-js"]::before {
        content: "js";
        background: #f7df1e;
        color: black;
    }
    
    .gatsby-highlight pre[class~="language-html"]::before {
        content: "html";
        background: #005a9c;
        color: white;
    }
    
    .gatsby-highlight pre[class~="language-css"]::before {
        content: "css";
        background: #ff9800;
        color: white;
    }

    .gatsby-highlight pre[class~="language-kotlin"]::before {
        content: "kotlin";
        background: #ff9800;
        color: white;
    }

    .gatsby-highlight pre[class~="language-java"]::before {
        content: "java";
        background: #ff9800;
        color: white;
    }

    .gatsby-highlight pre[class~="language-go"]::before {
        content: "golang";
        background: #005a9c;
        color: white;
    }
    
    .gatsby-highlight pre[class~="language-golang"]::before {
        content: "golang";
        background: #005a9c;
        color: white;
    }
  
`

const components = {
    table: Table,
    pre: preProps => {
        const props = preToCodeBlock(preProps)
        // if there's a codeString and some props, we passed the test
        if (props) {
            return <Code {...props} />
        }
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />
    },
    wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <BackgroundGradient />
            <GradientBar />
            {element}
        </ThemeProvider>
    </MDXProvider>
)