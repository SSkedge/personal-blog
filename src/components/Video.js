import React from "react";
import styled from "styled-components";

export const VideoWrapper = styled.div`
    grid-column: 5 / span 6;
    grid-row: 6 / span 2;
    overflow: hidden;
    position: relative;

    video{
        height: 100%;
        width: 100%;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`

export const Video = ({ src }) => {
    return (
        <VideoWrapper>
            <video controls>
                <source src={`../../videos/${src}`} type="video/mp4" />
            </video>
        </VideoWrapper >
    )
}
