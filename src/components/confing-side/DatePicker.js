import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { getDateAction } from "../../actions";

const DatePickerC = () => {
  const dispatchDate = useDispatch();
  const showDate = useSelector(state => state.date);

  const handleDispatchDate = date => {
    return dispatchDate(getDateAction(date));
  };

  return (
    <div className="leftSide__config leftSide__config--date">
      <p className="leftSide__sub-title">Countdown to date:</p>
      <DatePicker
        className="leftSide__input"
        dateFormat="dd/MM/yyyy"
        selected={showDate}
        onChange={handleDispatchDate}
        minDate={new Date()}
      />
    </div>
  );
};

export default DatePickerC;
