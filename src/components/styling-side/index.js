import React from "react";
import BgColorPicker from "./BgColorPicker";
import TextColorPicker from "./TextColorPicker";
import SizeSlider from "./SizeSlider";
import CheckBoxOption from "./CheckBoxOptions";

const RightSide = () => {
  return (
    <section className="styling-side">
      <div className="color-panel">
        <p className="sub-title">Colors</p>
        <div className="color-panel__blocks">
          <div className="color-panel--left">
            <BgColorPicker />
            <p className="color-panel__title color-panel__title--left">
              Background Color
            </p>
          </div>
          <div className="color-panel--right">
            <TextColorPicker />
            <p className="color-panel__title color-panel__title--right">
              Text Color
            </p>
          </div>
        </div>
      </div>
      <SizeSlider />
      <div className="checkboxes">
        <CheckBoxOption id={"transparency"} label={"Transparent background"} />
        <CheckBoxOption id={"hide_date_title"} label={"Hide date and title"} />
        {/* <CheckBoxOption id={"show_millisec"} label={"Show 10ths of seconds"} /> */}
      </div>
    </section>
  );
};

export default RightSide;
