import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";

export const NavWrapper = styled.nav`
    grid-column: 2/ span 12;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`

export const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "sc.svg" }) {
                publicURL
            }
        }
    `)

    return (
        <NavWrapper>
            <Link to="/">
                <img src={data.logo.publicURL} alt="My Logo" />
            </Link>
        </NavWrapper>
    )
}