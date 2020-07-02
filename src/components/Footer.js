import React from "react";
import styled from "styled-components";
import {P} from "../styles/Typography"

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`

export const Footer = () => {
    return (
        <FooterWrapper>
            <P size="xSmall" colour="dark3">Copyright © 2020 All Rights Reserved</P>
        </FooterWrapper>
    )
}