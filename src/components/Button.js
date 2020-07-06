import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Link } from "gatsby";

export const ButtonWrapper = styled(props => <Link {...props} />)`
    padding: 0.5rem;
    background-color: ${props => props.theme.colours.main1};
    border-radius: 0.5rem;
    color: ${props => props.theme.colours.light1};
    font-weight: 700;
    font-size: 0.875rem;
    width: fit-content;
    transition: filter 0.3s ease;
    text-decoration: none;

    &:hover,
    &:focus {
        filter: brightness(110%);
    }
`

export const BrandButtonWrapper = styled(props => <Link {...props} />)`
    display:inline-block;
    padding:1.2em 2.5em;
    margin:0 0.5em 0.5em 0;
    border-radius:0.15em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    text-transform:uppercase;
    font-weight:400;
    color:#FFFFFF;
    background-color:${props => rgba(props.theme.colours.blue5, 1)};
    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    text-align:center;

    &:hover,
    &:focus {
        filter: brightness(110%);
    }
`

export const Button = ({ children, href }) => {
    return (
        <ButtonWrapper to={href}>{children}</ButtonWrapper>
    )
}

export const BrandButton = ({ children, href }) => {
    return (
        <BrandButtonWrapper to={href}>{children}</BrandButtonWrapper>
    )
}