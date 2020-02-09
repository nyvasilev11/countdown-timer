import React from "react";
import { getSize, getBorderRadius } from "../../actions";
import { Slider } from "../../styles/styled-component";
import { useSelector, useDispatch } from "react-redux";

const SizeSlider = () => {
  const dispatchSize = useDispatch();
  const dispatchRadius = useDispatch();
  const widthSize = useSelector(state => state.sizeWidth);
  const heightSize = useSelector(state => state.sizeHeight);
  const borderRadius = useSelector(state => state.borderRadius);

  return (
    <div>
      <Slider
        type="range"
        min="70"
        max="150"
        step="1"
        onChange={e => dispatchSize(getSize(e.target.value))}
      />
      <p>
        Width:{" "}
        {widthSize > 0 && widthSize !== undefined && widthSize !== null
          ? `${parseFloat(widthSize).toFixed(0)}0px`
          : null}
      </p>
      <p>
        Height:
        {heightSize > 0 && heightSize !== undefined && heightSize !== null
          ? `${parseFloat(heightSize).toFixed(0)}0px`
          : null}
      </p>
      <Slider
        type="range"
        min="0"
        max="10"
        step="1"
        value={borderRadius}
        onChange={e => dispatchRadius(getBorderRadius(e.target.value))}
      />
    </div>
  );
};

export default SizeSlider;
