import React from "react";
import styled from "styled-components";
import { Footer, Nav } from "../components";

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: 7.8rem 20rem 4rem auto;
    gap: 0 2rem;
    position: relative;
    z-index: 1;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1rem repeat(6, 1fr) 2rem;

    }
`

export const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper>
    )
}