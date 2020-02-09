import styled from "styled-components";

export const Swatch = styled.div`
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 0.1rem;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
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
  background-color: ${props => (props.background ? props.background : "#0af")};
  color: ${props => (props.tColor ? props.tColor : "#f1f1f1")};
  border-radius: ${props => (props.radius ? `${props.radius}rem` : "0")};
  width: ${props => (props.width ? props.width : "50")}rem;
  height: ${props => (props.height ? props.height : "15")}rem;
`;

export const Slider = styled.input`
  border: 1px solid red;
`;
