import styled from "styled-components";
import reactCSS from "reactcss";

export const styles = reactCSS({
  default: {
    color: {
      width: "3.6rem",
      height: "1.4rem",
      borderRadius: "0.2rem",
      background: "red"
    },
    swatch: {
      padding: "5px",
      background: "#fff",
      borderRadius: "0.1rem",
      boxShadow: "0 0 0 0.1rem rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer"
    },
    popover: {
      position: "absolute",
      zIndex: "2"
    },
    cover: {
      position: "fixed",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0"
    }
  }
});

const Test = styled.div`
  color: ${props => props.textC};
  background-color: ${props => props.bgC};
  font-size: 40px;
`;

const defaultStyled = {
  test: Test
};

export default defaultStyled;
