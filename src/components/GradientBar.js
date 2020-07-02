import styled from 'styled-components';

export const GradientBar = styled.div`
  height: 5px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  &:before {
    border: 5px solid transparent;
    border-image: linear-gradient(to right, #177cf9 0, #ff2178 50%, #ffb300 100%);
    border-image-slice: 1;
    border-bottom: 0;
    border-right: 0;
    border-left: 0;
    content: '';
    height: 0px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export default GradientBar;