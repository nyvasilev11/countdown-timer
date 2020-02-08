import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { getBgColor } from "../../actions";
import { Swatch, Color, Popover, Cover } from "../../styles/styled-component";

const BgColorPicker = () => {
  const [colorPanel, setColorPanel] = useState(false);

  const handleClick = () => {
    setColorPanel(!colorPanel);
  };

  const handleClose = () => {
    setColorPanel(false);
  };

  const dispatchBg = useDispatch();
  const bgColor = useSelector(state => state.bgColor);
  return (
    <div>
      <Swatch onClick={handleClick}>
        <Color background={bgColor} />
      </Swatch>
      {colorPanel ? (
        <Popover>
          <Cover onClick={handleClose} />
          <SketchPicker
            color={bgColor}
            onChange={color => dispatchBg(getBgColor(color))}
          />
        </Popover>
      ) : null}
    </div>
  );
};

export default BgColorPicker;
