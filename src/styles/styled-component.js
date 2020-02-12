import styled from "styled-components";

// main side
export const MainSideSection = styled.section`
  background-color: ${props => props.background};
  color: ${props => props.tColor};
  border-radius: ${props => (props.radius ? `${props.radius}rem` : "0")};
  width: ${props => (props.width ? props.width : "50")}rem;
  height: ${props => (props.height ? props.height : "15")}rem;
`;

// styling side
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
  width: 5rem;
  height: 5rem;
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

// sliders
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
  margin: 2rem 0;

  &::-webkit-slider-thumb {
    ${props => sliderThumb(props)};
  }

  &::-moz-range-thumb {
    ${props => sliderThumb(props)};
  }
`;

//checkBoxOptions
export const CheckBoxInput = styled.input`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 16px;
    height: 16px;
    background: #fff;
  }

  &:hover + label:before {
    background: #0af;
  }

  &:checked + label:before {
    background: #0af;
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  &:checked + label:after {
    content: "";
    position: absolute;
    left: 3px;
    top: 7px;
    background: #fff;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;

export const CheckBoxLabel = styled.label`
  font-size: 1.5rem;
`;
