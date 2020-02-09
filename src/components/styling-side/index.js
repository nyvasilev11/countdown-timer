import React from "react";
import BgColorPicker from "./BgColorPicker";
import TextColorPicker from "./TextColorPicker";
import SizeSlider from "./SizeSlider";

const RightSide = () => {
  return (
    <section className="styling-side">
      <div className="color-panel">
        <p className="sub-title">Colors</p>
        <div className="color-panel--left">
          <BgColorPicker />
          <p className="color-panel__title--left">Background Color</p>
        </div>
        <div className="color-panel--right">
          <TextColorPicker />
          <p className="color-panel__title--right">Text Color</p>
        </div>
      </div>
      <SizeSlider />
    </section>
  );
};

export default RightSide;
