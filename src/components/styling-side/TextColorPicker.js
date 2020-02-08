import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { getTextColor } from "../../actions";
import { Swatch, Color, Popover, Cover } from "../../styles/styled-component";

const TextColorPicker = () => {
  const [colorPanel, setColorPanel] = useState(false);

  const handleClick = () => {
    setColorPanel(!colorPanel);
  };

  const handleClose = () => {
    setColorPanel(false);
  };

  const dispatchText = useDispatch();
  const textColor = useSelector(state => state.textColor);
  return (
    <div>
      <Swatch onClick={handleClick}>
        <Color background={textColor} />
      </Swatch>
      {colorPanel ? (
        <Popover>
          <Cover onClick={handleClose} />
          <SketchPicker
            color={textColor}
            onChange={color => dispatchText(getTextColor(color))}
          />
        </Popover>
      ) : null}
    </div>
  );
};

export default TextColorPicker;
