import React from "react";
import styled from "styled-components";
import { Button } from "../components";
import { P, H2 } from "../styles/Typography";

export const CardWrapper = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContentCard = ({date, title, excerpt, slug, category}) => {
    return (
        <CardWrapper>
            <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0" color="dark2">
                {date}
            </P>
            <H2 textAlign="center" margin="0 0 1rem 0">
                {title}
            </H2>
            <P size="small" textAlign="center" margin="0 0 1.5rem" color="dark2">
                {excerpt}
            </P>
            <Button href={slug}> Read More </Button>
        </CardWrapper>
    )
}