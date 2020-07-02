import { rgba } from "polished";
import styled from "styled-components";
import useTheme from "../utils/useTheme";
import React from "react";

const BackgroundContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  max-height: 100vh;
  overflow-x: hidden;
  padding-bottom: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Bar = styled.div`
  background: ${({ theme }) =>
        `linear-gradient(86.43deg, ${rgba(
            theme.colours.blue4,
            0.4
        )} 0.97%, ${rgba(theme.colours.blue4, 0)} 63.5%)`};
  height: 42.5rem;
  position: absolute;
  top: -3rem;
  transform: skewY(-5deg);
  width: 120vw;
  z-index: -1;
  @media screen and (min-width: 37.5rem) {
    top: -6vw;
  }
`;

const Oval = styled.div`
  background: ${({ theme }) =>
        `linear-gradient(270deg, ${rgba(theme.colours.white, 0.8)} 0%, ${rgba(
            theme.colours.white,
            0.25
        )} 100%)`};
  border-radius: 50%;
  box-shadow: inset 0px 1px 23px ${({ theme }) => theme.colours.white};
  height: 52rem;
  left: 0;
  mix-blend-mode: normal;
  opacity: 0.41;
  position: absolute;
  top: 0;
  transform: translate(-28%, -64%);
  width: 52rem;
`;

const CircleWrapper = styled.div`
  max-width: 120rem;
  position: relative;
  width: 100%;
`;

const Circle = styled.div`
  background-color: ${({ background }) => background};
  border-radius: 50%;
  box-shadow: 0px 12px 34px ${({ theme }) => rgba(theme.colours.blue2, 0.23)};
  height: ${({ size }) =>
        size === "large" ? 50 : size === "small" ? 14 : 23}px;
  left: ${({ left }) => left}%;
  opacity: 0.4;
  position: absolute;
  top: ${({ top }) => top}rem;
  width: ${({ size }) =>
        size === "large" ? 50 : size === "small" ? 14 : 23}px;
`;

export const BackgroundGradient = () => {
    const theme = useTheme();

    return (
        <BackgroundContainer>
            <Bar />
            <Oval />
            <CircleWrapper>
                <Circle
                    top={22}
                    left={33}
                    background={theme.colours.green3}
                    size="small"
                />
                <Circle
                    top={24}
                    left={72}
                    background={theme.colours.blue2}
                    size="large"
                />
                <Circle
                    top={15}
                    left={74}
                    background={theme.colours.green3}
                    size="small"
                />
                <Circle
                    top={10}
                    left={80}
                    background={theme.colours.purple1}
                    size="small"
                />
                <Circle
                    top={9}
                    left={86}
                    background={theme.colours.green3}
                    size="small"
                />
                <Circle
                    top={26.5}
                    left={90}
                    background={theme.colours.purple1}
                    size="small"
                />
                <Circle top={12.25} left={96} background={theme.colours.blue2} />
            </CircleWrapper>
        </BackgroundContainer>
    );
};

export default BackgroundGradient;
