import React from "react";
import { CheckBoxInput, CheckBoxLabel } from "../../styles/styled-component";
import { useDispatch } from "react-redux";
import { isCheckboxCheked } from "../../actions";

const CheckBoxOption = ({ id, label }) => {
  const checkedDispatch = useDispatch();

  const handleChange = e => {
    const target = e.target;

    const isChecked = element => {
      if (element) {
        if (element.checked) {
          return checkedDispatch(isCheckboxCheked(element.id));
        } else if (!element.checked) {
          return checkedDispatch(isCheckboxCheked(`un${element.id}`));
        }
      }
    };

    switch (target.id) {
      case "transparency":
        isChecked(target);
        break;
      case "hide_date_title":
        isChecked(target);
        break;
      // case "show_millisec":
      //   isChecked(target);
      //   break;
      default:
        console.log(target.id);
        break;
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
