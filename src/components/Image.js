import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export const FeatureImageWrapper = styled.div`
    grid-column: 3 / span 10;
    grid-row: 2 / 4;
    overflow: hidden;
    position: relative;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`

export const FeatureImage = ({ fixed }) => {
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed: {originalName: {eq: "salecycle.jpg"}}) {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)

    return (
        <FeatureImageWrapper>
            <Img fixed={fixed ? fixed : data.imageSharp.fixed} style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
            }} />
        </FeatureImageWrapper >
    )
}


