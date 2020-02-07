import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { getTextColor } from "../../actions";
import { styles } from "../../styles/styled-component";

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
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {colorPanel ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker
            color={textColor}
            onChange={color => dispatchText(getTextColor(color))}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TextColorPicker;
