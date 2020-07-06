import React from "react"
import { rgba } from "polished"
import styled from "styled-components"
import { BrandButton } from "./Button"

const Welcome = styled.div`
    grid-column: 2 / span 12;
    grid-row: 2 / span 10;
    padding: ${props =>
        `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`
    };
    z-index: 10;
    
    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props =>
        `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    }

    h2 {
        margin-bottom: 0.8rem;
        font-size: 2.5rem;
    }

    h2 > span {
        color: ${props => rgba(props.theme.colours.blue2, 1)};
    }
`

export const WelcomeContent = () => {
    return (
        <Welcome>
            <h2>
                Code<span>.</span>
            </h2>
            <h2>
                Design<span>.</span>
            </h2>
            <h2>
                Automation<span>.</span>
            </h2>
            <h2>
                Testing<span>.</span>
            </h2>
            <h2>
                Cloud<span>.</span>
            </h2>
            <h2>
                <span>Love What You Code</span>
            </h2>
            <BrandButton href="/blog">See More</BrandButton>
        </Welcome>
    )
}