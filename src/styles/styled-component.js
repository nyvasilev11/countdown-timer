import styled from "styled-components";

export const Swatch = styled.div`
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 0.1rem;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  width: 6rem;
  height: 6rem;
`;

export const Color = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 0.2rem;
  background-color: ${props => (props.background ? props.background : "#f95")};
`;

export const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;

export const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const MainSideSection = styled.section`
  background-color: ${props => props.background};
  color: ${props => props.tColor};
  border-radius: ${props => (props.radius ? `${props.radius}rem` : "0")};
  width: ${props => (props.width ? props.width : "50")}rem;
  height: ${props => (props.height ? props.height : "15")}rem;
`;

const sliderThumb = () => `
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #00DCE4;
    cursor: pointer;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 1rem;
  background: #a0f68b;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  margin-top: 2rem;

  &::-webkit-slider-thumb {
    ${props => sliderThumb(props)};
  }

  &::-moz-range-thumb {
    ${props => sliderThumb(props)};
  }
`;
