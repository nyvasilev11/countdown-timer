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
  background-color: ${props => (props.background ? props.background : "#f00")};
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

export const MainSideDiv = styled.div`
  background-color: ${props => (props.background ? props.background : "#0af")};
  color: ${props => (props.tColor ? props.tColor : "#f1f1f1")};
  /* color: #f1f1f1; */
`;
