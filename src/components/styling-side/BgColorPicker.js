import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { getBgColor } from "../../actions";
import { styles } from "../../styles/styled-component";

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
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {colorPanel ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker
            color={bgColor}
            onChange={color => dispatchBg(getBgColor(color))}
          />
        </div>
      ) : null}
    </div>
  );
};

export default BgColorPicker;
