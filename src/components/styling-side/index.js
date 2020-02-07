import React from "react";
import BgColorPicker from "./BgColorPicker";
import TextColorPicker from "./TextColorPicker";
import { useSelector } from "react-redux";
import defaultStyled from "../../styles/styled-component";

const RightSide = () => {
  const textColorr = useSelector(state => state.textColor);
  const bgColorr = useSelector(state => state.bgColor);

  return (
    <section className="styling-side">
      <BgColorPicker />
      <TextColorPicker />
      <defaultStyled.test textC={textColorr} bgC={bgColorr}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
        architecto.
      </defaultStyled.test>
    </section>
  );
};

export default RightSide;
