import React from "react";
import { CheckBoxInput, CheckBoxLabel } from "../../styles/styled-component";
import { useDispatch } from "react-redux";
import { isTransperancyChecked, isHideDateTimeChecked } from "../../actions";

const CheckBoxOption = ({ id, label }) => {
  const checkedDispatch = useDispatch();

  const handleChange = e => {
    const target = e.target;

    const storePassedOptions = (element, passThisOption) => {
      if (element.checked) checkedDispatch(passThisOption(element.id));
      else if (!element.checked)
        checkedDispatch(passThisOption(`un${element.id}`));
    };

    switch (target.id) {
      case "transparency":
        return storePassedOptions(target, isTransperancyChecked);
      case "hideDateTitle":
        return storePassedOptions(target, isHideDateTimeChecked);
      default:
        console.log(`default: ${target.id}`);
    }
  };

  return (
    <div className="checkboxes__element">
      <CheckBoxInput id={id} type="checkbox" onChange={e => handleChange(e)} />
      <CheckBoxLabel htmlFor={id}>{label}</CheckBoxLabel>
    </div>
  );
};

export default CheckBoxOption;
